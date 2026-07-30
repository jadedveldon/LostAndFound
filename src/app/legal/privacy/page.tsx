import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy & Terms | Lost & Found",
  description:
    "How Lost & Found collects, uses, and protects your information, and the terms that govern using our site and booking a trip with us.",
};

const sections = [
  { id: "privacy", label: "Privacy Policy" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-it", label: "How We Use It" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "sharing", label: "How We Share Information" },
  { id: "security", label: "Data Security" },
  { id: "your-rights", label: "Your Rights & Choices" },
  { id: "children", label: "Children's Privacy" },
  { id: "terms", label: "Terms of Service" },
  { id: "bookings", label: "Bookings & Payments" },
  { id: "cancellations", label: "Cancellations & Changes" },
  { id: "responsibilities", label: "Your Responsibilities" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "ip", label: "Intellectual Property" },
  { id: "governing-law", label: "Governing Law" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full bg-[var(--paper)]">
        {/* Hero */}
        <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 border-b border-[var(--ink)]/10">
          <div className="container max-w-3xl">
            <span className="t-eyebrow mb-5 block">LEGAL</span>
            <h1
              className="text-[clamp(36px,5.5vw,64px)] font-normal text-[var(--ink)] leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Privacy &amp; Terms
            </h1>
            <p className="t-body-lg text-[var(--ink-soft)] leading-relaxed max-w-xl mb-4">
              We&apos;re a small team designing slow trips for people who value their time and their data equally. Here&apos;s the plain-language version of how we handle both.
            </p>
            <span className="t-mono text-[10px] uppercase tracking-widest text-[var(--ink-mute)]">
              Last updated · July 2026
            </span>
          </div>
        </section>

        {/* Body: TOC + content */}
        <section className="py-16 lg:py-24">
          <div className="container flex flex-col lg:flex-row gap-16 items-start">
            {/* TOC — sticky on desktop */}
            <nav className="hidden lg:block w-[220px] shrink-0 sticky top-32">
              <span className="t-eyebrow mb-4 block text-[var(--ink-mute)]">On this page</span>
              <ul className="flex flex-col gap-3 border-l border-[var(--ink)]/10 pl-4">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="t-body-sm text-[var(--ink-soft)] hover:text-[var(--clay)] transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Content */}
            <div className="w-full max-w-[720px] flex flex-col gap-16">
              <div id="privacy" className="scroll-mt-32 flex flex-col gap-6">
                <span className="t-eyebrow block text-[var(--clay)]">PART ONE</span>
                <h2 className="t-h2 text-[var(--ink)]" style={{ fontFamily: "var(--font-display)" }}>
                  Privacy Policy
                </h2>
                <p className="t-body-lg text-[var(--ink)] leading-relaxed">
                  Lost &amp; Found (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) designs and curates travel experiences. This policy explains what information we collect when you visit our site or plan a trip with us, why we collect it, and what choices you have.
                </p>
              </div>

              <LegalSection id="information-we-collect" title="Information We Collect">
                <p>We collect information in a few simple ways:</p>
                <ul>
                  <li><strong>Information you give us</strong> — your name, email, phone number, travel preferences, and any details you share when planning a trip, filling a form, or emailing us.</li>
                  <li><strong>Booking &amp; payment information</strong> — passport details, dietary or accessibility needs, and payment information, collected only when required to confirm a trip.</li>
                  <li><strong>Information collected automatically</strong> — device type, browser, pages visited, and general location, gathered through cookies and analytics tools when you use our site.</li>
                </ul>
              </LegalSection>

              <LegalSection id="how-we-use-it" title="How We Use It">
                <p>We use your information to:</p>
                <ul>
                  <li>Plan, confirm, and support the trips and gatherings you book with us.</li>
                  <li>Reply to enquiries and keep you updated about a trip in progress.</li>
                  <li>Send occasional journal updates or gathering announcements, only if you&apos;ve opted in.</li>
                  <li>Understand how people use our site so we can make it better.</li>
                </ul>
                <p>We don&apos;t use your information to do anything you wouldn&apos;t reasonably expect from a travel curator you&apos;ve trusted with your trip.</p>
              </LegalSection>

              <LegalSection id="cookies" title="Cookies & Tracking">
                <p>
                  Our site uses cookies and similar tools for basic functionality and to understand how visitors move through our pages. This helps us see which experiences resonate and where the site could work better. You can disable cookies in your browser settings — the site will still work, though some preferences may not be remembered.
                </p>
              </LegalSection>

              <LegalSection id="sharing" title="How We Share Information">
                <p>We only share your information when it&apos;s necessary to make your trip happen:</p>
                <ul>
                  <li>With hotels, hosts, guides, and local partners directly involved in your itinerary.</li>
                  <li>With payment processors to complete a booking.</li>
                  <li>With service providers who help us run our site and communications (e.g. email delivery, analytics), under confidentiality obligations.</li>
                </ul>
                <p>We never sell your personal information.</p>
              </LegalSection>

              <LegalSection id="security" title="Data Security">
                <p>
                  We take reasonable technical and organisational measures to protect your information from loss, misuse, or unauthorised access. No method of transmission or storage is completely secure, but we work to keep your data as safe as we&apos;d want our own kept.
                </p>
              </LegalSection>

              <LegalSection id="your-rights" title="Your Rights & Choices">
                <p>You can, at any time:</p>
                <ul>
                  <li>Ask what information we hold about you.</li>
                  <li>Ask us to correct or delete it.</li>
                  <li>Unsubscribe from journal or gathering emails using the link in any email, or by writing to us.</li>
                </ul>
                <p>
                  To exercise any of these, email us at{" "}
                  <a href="mailto:curator@lostandfoundtravel.in" className="text-[var(--denim)] underline underline-offset-2">
                    curator@lostandfoundtravel.in
                  </a>{" "}
                  and we&apos;ll take care of it.
                </p>
              </LegalSection>

              <LegalSection id="children" title="Children's Privacy">
                <p>
                  Our services are intended for adults planning travel. We don&apos;t knowingly collect information from children under 16. If you believe a child has shared information with us, please get in touch and we&apos;ll remove it.
                </p>
              </LegalSection>

              <div id="terms" className="scroll-mt-32 flex flex-col gap-6 pt-4 border-t border-[var(--ink)]/10">
                <span className="t-eyebrow block text-[var(--clay)]">PART TWO</span>
                <h2 className="t-h2 text-[var(--ink)]" style={{ fontFamily: "var(--font-display)" }}>
                  Terms of Service
                </h2>
                <p className="t-body-lg text-[var(--ink)] leading-relaxed">
                  These terms govern your use of our website and any trip, gathering, or experience booked through Lost &amp; Found. By using our site or booking with us, you agree to them.
                </p>
              </div>

              <LegalSection id="bookings" title="Bookings & Payments">
                <p>
                  A booking is confirmed once we&apos;ve received the agreed deposit or full payment. Prices for trips and gatherings are quoted per person or per group as specified at the time of enquiry, and may vary based on season, availability, and the details of your itinerary. We&apos;ll always confirm final pricing with you in writing before you pay.
                </p>
              </LegalSection>

              <LegalSection id="cancellations" title="Cancellations & Changes">
                <p>
                  Because we curate every trip individually — booking accommodation, hosts, and experiences on your behalf — cancellation terms vary by trip and are shared with you in writing at the time of booking. As a general principle:
                </p>
                <ul>
                  <li>Deposits are largely used to secure third-party bookings (stays, hosts, experiences) and are non-refundable once paid, except where those third parties allow it.</li>
                  <li>Full or partial refunds on the remaining balance depend on how close to departure a trip is cancelled, and on the cancellation terms of our partners.</li>
                  <li>We&apos;ll always try to help you reschedule where possible before treating a change as a cancellation.</li>
                </ul>
                <p>
                  If your plans change, talk to us as early as you can at{" "}
                  <a href="mailto:curator@lostandfoundtravel.in" className="text-[var(--denim)] underline underline-offset-2">
                    curator@lostandfoundtravel.in
                  </a>{" "}
                  — we&apos;ll do what we reasonably can.
                </p>
              </LegalSection>

              <LegalSection id="responsibilities" title="Your Responsibilities">
                <p>When travelling with us, we ask that you:</p>
                <ul>
                  <li>Provide accurate information (travel documents, health or dietary needs) so we can plan responsibly.</li>
                  <li>Hold valid travel insurance, passports, and visas required for your trip.</li>
                  <li>Treat local communities, hosts, and fellow travellers with the same care we design our trips around.</li>
                </ul>
              </LegalSection>

              <LegalSection id="liability" title="Limitation of Liability">
                <p>
                  We curate and coordinate experiences delivered by third parties — stays, guides, transport, and local partners. While we choose partners carefully, we aren&apos;t liable for circumstances outside our reasonable control, including but not limited to weather, third-party service failures, or events of force majeure. Our liability, where it does arise, is limited to the amount paid to us for the affected trip.
                </p>
              </LegalSection>

              <LegalSection id="ip" title="Intellectual Property">
                <p>
                  All content on this site — writing, photography, itineraries, and design — belongs to Lost &amp; Found or is used with permission. Please don&apos;t reproduce or repurpose it without asking us first.
                </p>
              </LegalSection>

              <LegalSection id="governing-law" title="Governing Law">
                <p>
                  These terms are governed by the laws of India. Any disputes will be handled in the courts of Mumbai, Maharashtra, unless otherwise required by law.
                </p>
              </LegalSection>

              <LegalSection id="changes" title="Changes to This Policy">
                <p>
                  We may update this page from time to time as our services or the law evolve. We&apos;ll update the &ldquo;last updated&rdquo; date above whenever we do. If a change is significant, we&apos;ll let you know directly.
                </p>
              </LegalSection>

              {/* Contact CTA */}
              <div id="contact" className="scroll-mt-32 p-8 lg:p-10 bg-[var(--paper-deep)] flex flex-col gap-4">
                <h3 className="t-h3-italic">Questions about any of this?</h3>
                <p className="t-body-lg text-[var(--ink)] leading-relaxed">
                  We&apos;re happy to explain anything in plain English — reach out anytime.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                  <Link href="/contact">
                    <Button variant="primary">Contact Us</Button>
                  </Link>
                  <a
                    href="mailto:curator@lostandfoundtravel.in"
                    className="t-body italic text-[var(--denim)] hover:text-[var(--denim-deep)] transition-colors"
                  >
                    curator@lostandfoundtravel.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-32 flex flex-col gap-4">
      <h3 className="t-h4 text-[var(--ink)] uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
        {title}
      </h3>
      <div className="legal-copy flex flex-col gap-4 t-body-lg text-[var(--ink)] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
