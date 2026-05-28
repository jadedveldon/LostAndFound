import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// ── Rate limiter (in-memory, 5 submissions per IP per hour) ──────────────────
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_LIMIT) return true;
  hits.push(now);
  rateLimitMap.set(ip, hits);
  return false;
}

// ── Validation schema (mirrors client-side) ──────────────────────────────────
const bodySchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().min(1).max(40),
  fit: z.string().min(12).max(4000),
  gathering: z.literal('sri-lanka-aug-2026'),
  source: z.string().max(80).optional(),
});

// ── Email helpers ─────────────────────────────────────────────────────────────
function adminEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  fit: string;
  source: string;
  timestamp: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family:Georgia,serif;background:#f6efe6;color:#000;padding:40px 24px;max-width:600px;margin:0 auto;">
  <p style="font-family:'Hammersmith One',sans-serif;font-size:22px;letter-spacing:0.05em;margin:0 0 32px;">Lost&amp;Found</p>
  <h1 style="font-size:24px;font-weight:400;margin:0 0 24px;">New Sri Lanka Gathering invite request</h1>
  <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6;">
    <tr><td style="padding:8px 0;color:#97896e;width:120px;vertical-align:top;">Name</td><td style="padding:8px 0;">${escHtml(data.name)}</td></tr>
    <tr><td style="padding:8px 0;color:#97896e;vertical-align:top;">Email</td><td style="padding:8px 0;">${escHtml(data.email)}</td></tr>
    <tr><td style="padding:8px 0;color:#97896e;vertical-align:top;">Phone</td><td style="padding:8px 0;">${escHtml(data.phone)}</td></tr>
    <tr><td style="padding:8px 0;color:#97896e;vertical-align:top;">Submitted</td><td style="padding:8px 0;">${escHtml(data.timestamp)}</td></tr>
    <tr><td style="padding:8px 0;color:#97896e;vertical-align:top;">Source</td><td style="padding:8px 0;">${escHtml(data.source)}</td></tr>
  </table>
  <p style="margin:28px 0 8px;color:#97896e;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;">Why they&rsquo;re a right fit:</p>
  <p style="background:#ece0d0;padding:20px;font-size:16px;line-height:1.7;white-space:pre-wrap;">${escHtml(data.fit)}</p>
  <p style="margin-top:40px;font-size:13px;color:#97896e;">Lost &amp; Found · lostandfoundtravel.com</p>
</body>
</html>`;
}

function confirmationEmailHtml(firstName: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family:Georgia,serif;background:#f6efe6;color:#000;padding:40px 24px;max-width:600px;margin:0 auto;">
  <p style="font-family:'Hammersmith One',sans-serif;font-size:22px;letter-spacing:0.05em;margin:0 0 40px;">Lost&amp;Found</p>
  <p style="font-size:18px;line-height:1.7;">hey ${escHtml(firstName)},</p>
  <p style="font-size:18px;line-height:1.7;font-style:italic;color:#38678a;margin:16px 0;">we&rsquo;ve got your note. we read everything ourselves, so this won&rsquo;t take long.</p>
  <p style="font-size:16px;line-height:1.7;color:#3d3d3d;margin:24px 0;">
    if you want to read more about who we are and what we do, here&rsquo;s the journal —<br/>
    <a href="https://lostandfoundtravel.com/journal" style="color:#38678a;">lostandfoundtravel.com/journal</a>
  </p>
  <p style="font-size:20px;font-style:italic;color:#ce4737;margin-top:40px;">— tanya &amp; keerthi</p>
  <hr style="border:none;border-top:1px solid #ece0d0;margin:40px 0 16px;" />
  <p style="font-size:12px;color:#97896e;">Lost &amp; Found · lostandfoundtravel.com</p>
</body>
</html>`;
}

function escHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function getFirstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] ?? fullName;
}

function formatIst(date: Date): string {
  return date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }) + ' IST';
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limit by IP
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    );
  }

  // Parse + validate
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed.', issues: parsed.error.issues }, { status: 422 });
  }

  const { name, email, phone, fit, source } = parsed.data;
  const resolvedSource = source ?? 'direct';
  const timestamp = formatIst(new Date());

  // ── Persist to DB ──────────────────────────────────────────────────────────
  if (process.env.DATABASE_URL) {
    try {
      const { getDb } = await import('@/db/index');
      const { inquiries } = await import('@/db/schema');
      const db = getDb();
      await db.insert(inquiries).values({
        type: 'gathering_application',
        name,
        email,
        message: fit,
        metadata: { phone, gathering: 'sri-lanka-aug-2026', source: resolvedSource },
        status: 'new',
      });
    } catch (dbErr) {
      console.error('[gathering-inquiry] DB insert failed:', dbErr);
    }
  }

  // ── Send emails via Resend ─────────────────────────────────────────────────
  const recipientEmail = process.env.GATHERING_INQUIRY_EMAIL;
  if (!recipientEmail) {
    console.warn('[gathering-inquiry] GATHERING_INQUIRY_EMAIL is not set — skipping admin email.');
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey && (recipientEmail || true)) {
    const resend = new Resend(resendKey);

    // Admin email
    if (recipientEmail) {
      try {
        await resend.emails.send({
          from: 'Lost & Found <hello@lostandfoundtravel.com>',
          to: recipientEmail,
          replyTo: email,
          subject: `New Sri Lanka Gathering invite request — ${name}`,
          html: adminEmailHtml({ name, email, phone, fit, source: resolvedSource, timestamp }),
        });
      } catch (err) {
        console.error('[gathering-inquiry] Admin email failed:', err);
      }
    }

    // Confirmation email to applicant
    try {
      await resend.emails.send({
        from: 'Tanya & Keerthi <hello@lostandfoundtravel.com>',
        to: email,
        subject: 'we got your application — Lost & Found',
        html: confirmationEmailHtml(getFirstName(name)),
      });
    } catch (err) {
      console.error('[gathering-inquiry] Confirmation email failed:', err);
    }
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
