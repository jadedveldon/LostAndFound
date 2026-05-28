# Lost & Found — Sri Lanka Gatherings Page + IA Update

**Document type:** Implementation spec for Claude Code (local)
**Companion to:** `Lost-and-Found-Website-PRD.md`, `Lost-and-Found-Polish-Spec.md`, `tokens.css`
**Status:** Build-ready
**Version:** 2.0 — Nov 2026 (revised per Sapan feedback)

> **Changes in v2 vs v1:** removed `/gatherings/apply` route — the application is now an **inline contact form** rendered as the final section of `/gatherings`. Form reduced to 4 fields (Name, Email, Phone, "How are you a right fit to join us"). Added a second CTA in the hero — **"Request My Invite"** — that scrolls to the form. Removed all price mentions across the page. Removed the "48-hour" SLA promise. Submission emails route via environment variable `GATHERING_INQUIRY_EMAIL` so the recipient can be set without code changes.

---

## 0 · How to use this document

This spec covers two related changes:

1. **An information-architecture cleanup.** The site currently has `/gatherings` (catalogue of all trips) and `/experience` (custom-curation service). We're rationalising naming so the nav matches the brand vocabulary.
2. **A new singular landing page** for the Sri Lanka *Relearn the Art of Slow Travel* gathering (Aug 20–26, 2026), per the attached wireframe — now with an inline contact form as the closing section.

The existing site at `lost-and-found-app-snowy.vercel.app` is the visual source of truth. Tokens, fonts, eyebrow + Title-Case heading rhythm, italic Newsreader subheads, and clay handwritten accents already live in the codebase; this page reuses them.

Bold lines in the source wireframe represent **section labels / headings** that render with visual emphasis (Title Case display serif). The body copy underneath them is verbatim where the wireframe specified it.

---

## 1 · Information-architecture change

### 1.1 Current state
| URL | Page | Nav label |
|---|---|---|
| `/gatherings` | Catalogue listing multiple trips (Slow Transit, Decision Detox, Monsoon Reading) | GATHERINGS |
| `/experience` | Custom-curation service page ("we plan the whole trip or just parts") | EXPERIENCES |
| `/gatherings/[slug]` | Single trip detail page (existing template) | — |

### 1.2 Target state
| URL | Page | Nav label |
|---|---|---|
| `/gatherings` | **NEW** — singular Sri Lanka *Relearn the Art of Slow Travel* landing page (with inline form) | GATHERINGS |
| `/experiences` | Catalogue listing (the page currently at `/gatherings`) | EXPERIENCES |
| `/experiences/[slug]` | Single trip detail page (moved from `/gatherings/[slug]`) | — |
| `/plan-with-us` | Custom-curation service page (the page currently at `/experience`) | PLAN WITH US (header CTA only — not a primary nav item) |

### 1.3 Rationale
- An "L&F Gathering" is a single named cohort experience — singular by definition. `/gatherings` should resolve to one gathering at a time (currently Sri Lanka).
- "Experiences" plural fits the catalogue concept better than the custom-curation service.
- "Plan With Us" is already the header CTA copy on the deployed site; aligning the route name makes the nav coherent.

### 1.4 Redirects (mandatory — preserve SEO + bookmarks)

In `next.config.js` (or `next.config.ts`), add:

```js
async redirects() {
  return [
    // Old slow-transit detail page → new singular Sri Lanka landing
    { source: '/gatherings/the-slow-transit', destination: '/gatherings', permanent: true },
    // Other catalogued trips → new catalogue route
    { source: '/gatherings/decision-detox-goa', destination: '/experiences/decision-detox-goa', permanent: true },
    { source: '/gatherings/monsoon-reading-kerala', destination: '/experiences/monsoon-reading-kerala', permanent: true },
    // Custom-curation route rename
    { source: '/experience', destination: '/plan-with-us', permanent: true },
  ];
}
```

### 1.5 Cross-link sweep

Search the codebase for any of these paths and update:

- `/gatherings/the-slow-transit` → `/gatherings`
- `/experience` (as a route literal, *not* the page title text) → `/plan-with-us`
- Footer "Trips" column: `Gatherings → /gatherings`, `The Experience → /plan-with-us`, plus keep `Decision Detox` and `A La Carte` pointing at their current routes.
- Home page marquee strip CTAs, "see all gatherings →" link on home, and any cards that linked to the old gatherings catalogue should now point to `/experiences`.
- Header nav: keep labels `GATHERINGS` (→ `/gatherings`) and `EXPERIENCES` (→ `/experiences`). The header right-side button stays "Plan With Us" → `/plan-with-us`.

---

## 2 · Files to create / move / edit

```
app/
  gatherings/
    page.tsx                       ← REPLACE: was catalogue, now Sri Lanka landing (inline form at bottom)
  experiences/
    page.tsx                       ← NEW: catalogue (content from old /gatherings/page.tsx)
    [slug]/
      page.tsx                     ← NEW: trip detail (content from old /gatherings/[slug]/page.tsx)
  plan-with-us/
    page.tsx                       ← NEW: content from old /experience/page.tsx
  experience/                      ← DELETE this directory after move
  api/
    gathering-inquiry/
      route.ts                     ← NEW: handles form submission, sends email
components/
  sri-lanka/                       ← NEW: page-scoped section components
    Hero.tsx
    StickyBanner.tsx
    ChaoticVacationOverlay.tsx
    WhatThisActuallyIs.tsx
    InBetweenSection.tsx
    YouLeaveWith.tsx
    ApplyCTABand.tsx
    LogisticsStrip.tsx
    InviteForm.tsx                 ← the inline contact form
public/
  images/
    sri-lanka/                     ← NEW: image folder
      chaotic-vacation.jpg         ← supplied (the uploaded overlay image)
      hero-1.jpg ... hero-5.jpg    ← 5 one-liner pairings (see §3.1)
      wellness-retreat.jpg
      adventure-trip.jpg
      dinner-strip.jpg
next.config.js                     ← add redirects from §1.4
.env.local                         ← add GATHERING_INQUIRY_EMAIL (see §4)
```

---

## 3 · The new `/gatherings` page — Sri Lanka *Relearn the Art of Slow Travel*

### Page meta

```ts
// app/gatherings/page.tsx
export const metadata = {
  title: 'Relearn the Art of Slow Travel — Sri Lanka · Aug 20–26, 2026 | Lost & Found',
  description: 'Seven days of ocean air, local culture, meaningful conversations, music-filled evenings, and a softer way of living. An L&F Gathering in Ahangama, Sri Lanka.',
  openGraph: { /* matching OG image */ },
};
```

The page is composed of the following sections in order. Total scroll feels like a long-form magazine feature, ~8 viewports on desktop.

---

### 3.1 Section — **Hero**

**Layout:** Two-column on desktop (≥ 1024px), stacked on mobile. Left column ~52%, right column ~48%. Reuse existing home-page hero proportions.

**Background:** `--paper` with the existing paper-grain overlay (already global).

**Left column (top to bottom):**

1. **Eyebrow** (`t-eyebrow`, `--ink-mute`):
   ```
   L&F GATHERING · AHANGAMA, SRI LANKA · AUG 20–26, 2026
   ```

2. **Main heading** (`t-display-1`, regular case, `--ink`). The phrase "Slow Travel" is the clay handwritten accent — mirror the hero treatment from the home page where "a long exhale" is in Caveat Brush:
   ```
   Relearn the Art of  [Slow Travel]   ← "Slow Travel" rendered in --font-script, --clay
   ```
   Implementation: wrap `Slow Travel` in `<span className="inline-script-accent">` styled with `font-family: var(--font-script); color: var(--clay); font-size: 1.05em; transform: rotate(-1.5deg); display: inline-block;` so it nests on the same line as the serif heading.

3. **Subtext** (`t-body-lg`, italic where set, `--ink-soft`, max-width ~440px):
   > Seven days of ocean air, local culture, meaningful conversations, music-filled evenings, and a softer way of living.

4. **CTA triplet** (stacked 12px gap on mobile, primary + secondary side-by-side on desktop with the tertiary on a row beneath):
   - **Primary:** **Request My Invite** → anchor link `#request-invite` (clay fill, paper text, magnetic on desktop) — scrolls smoothly to the inline form at the bottom of the page
   - **Secondary:** **Explore The Gathering** → in-page anchor `#what-this-actually-is` (ghost button with hand-underline on hover)

   Both CTAs use smooth scroll behaviour — implement with `<a href="#request-invite">` plus a small click handler that calls `document.getElementById('request-invite')?.scrollIntoView({ behavior: 'smooth', block: 'start' })`, guarded by a `prefers-reduced-motion` check that falls back to instant jump.

5. **Trust strip** beneath CTAs (`t-mono` small, `--ink-mute`):
   ```
   14 SEATS · 7 DAYS · ALL-INCLUSIVE · HOSTED BY TANYA & KEERTHI
   ```

   No price reference anywhere — see §9 confirmed decision.

**Right column — "one-liners with images":**

A vertical stack of **five paired one-liners**, each with its own image. This is the heart of the hero's right side. Each pair is one row:

- Image (treated, ~280×200 desktop / 100% × 180 mobile) on one side
- One-liner in italic Newsreader (`t-h3-italic`, `--denim`) on the other side
- Alternating sides (zigzag) for visual rhythm

Order top to bottom:

| # | One-liner (italic, denim) | Image alt | Image asset |
|---|---|---|---|
| 1 | *solo, but never lonely* | "A traveller alone on the porch at sunset, Ahangama" | `/images/sri-lanka/hero-1.jpg` |
| 2 | *shared meals > small talk* | "Long table dinner with strangers, candles, sea air" | `/images/sri-lanka/hero-2.jpg` |
| 3 | *culture beyond checklists* | "A quiet local moment — a vendor, a temple, a cup of tea" | `/images/sri-lanka/hero-3.jpg` |
| 4 | *less planning, more presence* | "Hands in lap, looking at the ocean, no phone" | `/images/sri-lanka/hero-4.jpg` |
| 5 | *beautiful strangers becoming stories* | "Two travellers laughing in conversation, low afternoon light" | `/images/sri-lanka/hero-5.jpg` |

**Composition rules:**
- Each row has a slight vertical offset (`margin-top: -8px` to `margin-top: 24px` randomised across rows) so the stack doesn't feel grid-aligned.
- Each image is wrapped in `.photo-treatment` so it matches the rest of the site.
- On desktop, the right column scrolls slightly more slowly than the left (subtle parallax, ~0.08 ratio via Lenis) so the one-liners read as the user scrolls the headline area. On mobile, no parallax — pairs simply stack below the headline + CTAs.
- Each pair fades + slides 12px on viewport entry, 80ms stagger between pairs, 600ms ease.

**Motion choreography (first paint):**
- Eyebrow → 16px fade up (0ms)
- Heading line 1 ("Relearn the Art of") → fade up (120ms)
- "Slow Travel" handwritten script → clip-path write-on reveal, 900ms (240ms after line 1)
- Subtext → fade up (380ms)
- CTAs → fade up (460ms)
- Trust strip → fade in (540ms)
- Right column pairs → staggered fade+slide in (640ms onward)

---

### 3.2 Section — **Sticky Banner**

**Behaviour:** Sticks below the global header (so total sticky offset = `64px` mobile / `80px` desktop). Visible from page-load. Becomes dismissable after first scroll (small close × on the right; once dismissed, stays dismissed for the session via `sessionStorage`).

**Visual:**
- Full-width band, background `--clay` with the same scoped grain overlay as other clay bands
- Text in `--paper`, `t-mono` size, slight letter-spacing
- Centered. `✦` separator on either side of the text (Sapan: "anything works" — defaulting to brand-coherent ✦, not 🌴).
- The text is itself a clickable anchor → `#request-invite` (clicking anywhere on the banner takes the visitor straight to the form).

**Copy:**
```
✦  EARLY BIRD APPLICATIONS CLOSE AUG 1ST  ·  REQUEST YOUR INVITE  ✦
```

**Implementation:**

```css
.sticky-banner {
  position: sticky;
  top: var(--header-h, 64px);
  z-index: 30;
  background: var(--clay);
  color: var(--paper);
  text-align: center;
  padding: 10px 24px;
  font-family: var(--font-mono);
  font-size: var(--type-mono-sm);
  letter-spacing: 0.08em;
  cursor: pointer;
}
@media (min-width: 1024px) { .sticky-banner { top: 80px; } }
.sticky-banner__close {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 0;
  color: var(--paper);
  opacity: 0.7;
  cursor: pointer;
}
.sticky-banner__close:hover { opacity: 1; }
```

Place this sticky element *inside* the page's main scroll container, immediately after the header — so it scrolls with the page and sticks once it reaches the top.

---

### 3.3 Section — **Chaotic Vacation Overlay** (full-bleed image with overlay)

**Layout:** Full-bleed cinematic image, ~70vh height on desktop, ~55vh on mobile. The supplied chaotic-vacation image (`/images/sri-lanka/chaotic-vacation.jpg`) is the asset — an aerial of palm-fringed beach with rock formations. Wrapped in `.photo-treatment` to match the rest of the site's warm grading.

**Overlay text (upper-left, on the image):** Title Case DM Serif Display, `--paper`, with a subtle text-shadow for legibility against the bright water area:

```
Most of us don't need
another chaotic vacation.
```

Style:
```css
.chaotic-overlay-text {
  position: absolute;
  top: 12%;
  left: 6%;
  max-width: 620px;
  font-family: var(--font-display);
  color: var(--paper);
  font-size: var(--type-display-2);
  line-height: 1.05;
  text-shadow: 0 2px 18px rgba(31, 29, 26, 0.42);
}
```

Fades + translates up 24px on viewport entry, 800ms.

**Below the image (back on `--paper` ground):**

Container `narrow` (max-width 720px), centered, vertical padding `--space-24`.

Lead-in sentence (`t-body-lg`, `--ink`):
> We need:

A vertical list of five items, each prefixed with a hand-drawn `HandCheck` SVG (moss colour) flush-left of the text. Items in `t-body-lg`, `--ink`, generous line height (~1.6), 16px row gap:

- Space to breathe
- Time away from constant decision-making
- Meaningful connections
- New guided experiences
- A reminder that life can feel softer

Each row animates the `HandCheck` draw-in on viewport entry, 100ms stagger between rows.

Closing line below the list (italic Newsreader, `t-h3-italic`, `--denim`, centred, `--space-12` above):

> *This gathering was created for exactly that.*

---

### 3.4 Section — **What This Actually Is** (anchor `#what-this-actually-is`)

**Layout:** Container `default` (max 1200px). Single-column intro, then a two-column dichotomy block, then the in-between full-bleed image, then a single-column close.

**Sub-section A — Intro:**

Eyebrow (`t-eyebrow`, `--ink-mute`):
```
SECTION 3 — WHAT THIS ACTUALLY IS
```

Heading (`t-display-2`, regular case, `--ink`):
> What This Actually Is

Lead body (`t-body-lg`, `--ink`):
> Most retreats sit on two extremes.

**Sub-section B — The two extremes (asymmetric two-column block):**

Left column (60% width on desktop):
- Sub-heading (`t-h3-italic`, `--denim`):
  > *On one side: the wellness retreat.*
- Body paragraph (`t-body`, `--ink-soft`, preserve line breaks):
  > Beautiful, intentional… but sometimes overwhelming.
  > Rigid schedules. Forced healing. Constant introspection.
  > Wellness is becoming another thing to "do right."

Right column (40% width on desktop): a polaroid-treated image — *yoga / wellness retreat scene with people*. Asset slot `/images/sri-lanka/wellness-retreat.jpg`. Tilt `+2deg`. Caption (Caveat Brush, `--ink`): "*the wellness route*".

Then a horizontal rule — `HandSquiggle` centred, `--wheat` at 30% opacity.

Next row, mirrored: image on the left, text on the right.

Left column (40%): polaroid image — *adventure trip / rafting / high-energy group scene*. Asset slot `/images/sri-lanka/adventure-trip.jpg`. Tilt `-3deg`. Caption: "*the adventure route*".

Right column (60%):
- Sub-heading (`t-h3-italic`, `--denim`):
  > *On the other side: the adventure trip.*
- Body (`t-body`, `--ink-soft`):
  > Fast-paced itineraries. Constant movement. Tourist checklists.
  > Too much doing, not enough feeling.
  > You come back needing another vacation.

**Sub-section C — The full-bleed "in-between" image with overlay:**

Full-bleed image (`/images/sri-lanka/dinner-strip.jpg` — a calm warm-toned long-table dinner or golden-hour gathering). Height ~60vh on desktop, ~45vh on mobile. Photo-treatment applied.

Overlay text — centred, paper colour, DM Serif Display `t-display-2`:
```
We exist somewhere in between.
```

Below this image, on `--paper-deep` background band (visually delineates this as the "thesis" moment), container `narrow`:

Four short phrases as one flowing line on desktop, stacked on mobile, separated by the `✦` mark. Italic Newsreader (`t-h3-italic`, `--denim`):

> *Enough stillness to breathe ✦ Enough movement to feel alive ✦ Enough structure to feel held ✦ Enough freedom to explore.*

Don't force four equal columns — let the line break naturally.

**Sub-section D — The framing close:**

Container `narrow`, generous vertical padding.

Two short paragraphs (`t-body-lg`, `--ink`):

> This isn't about escaping your life. Nor is it about fixing yourself either.

> It's about: good food, music-filled evenings, ocean air, meaningful conversations, local culture, solo exploration, beautiful people, and remembering what life feels like when it slows down.

---

### 3.5 Section — **You Leave With**

**Layout:** Container `narrow`. Background switches to `--moss` full-bleed band, paper text on it (consistent with the For Teams band on the home page).

Eyebrow (`t-eyebrow`, `--paper`, 60% opacity):
```
WHAT YOU TAKE HOME
```

Heading (`t-display-2`, `--paper`):
> You leave with more than photos.

Below the heading, vertically stacked list — each item on its own line, large `t-h3-italic` size, `--paper` colour, generous line height:

> You leave with:
>
> *stories,*
> *perspective,*
> *real connection,*
> *and maybe a softer relationship with life itself.*

Set "*stories,*", "*perspective,*", "*real connection,*" each on their own line. The final long line wraps naturally.

Animation: each line fades up 16px, 120ms stagger.

A `HandSquiggle` (in `--wheat`, 40% opacity) sits centred ~64px below the final line as a quiet section close.

---

### 3.6 Section — **Logistics quick-reference**

**Layout:** Container `default`. Three-column on desktop, stacked on mobile. Background `--paper-deep`. Vertical padding `--space-12`.

A small at-a-glance reference. Three columns each with a `t-eyebrow` label + value:

| Eyebrow | Value (`t-h4`) |
|---|---|
| DATES | Aug 20–26, 2026 |
| WHERE | Ahangama, Sri Lanka |
| COHORT | 14 travellers · hosted |

Below the row, mono-sm note (`t-mono`, `--ink-mute`):
```
STAY INCLUDED · MOST MEALS INCLUDED · LOCAL EXPERIENCES INCLUDED · AIRPORT PICKUPS INCLUDED · FLIGHTS NOT INCLUDED
```

Below that, in italic Newsreader (`t-body-italic`, `--ink-mute`, centred, small):

> *For pricing and full inclusions, request your invite below.*

This single sentence does the work of price-gating without ever quoting a number, per Sapan's direction.

---

### 3.7 Section — **Request My Invite** (inline contact form — page anchor `#request-invite`)

This is the conversion section. It replaces the prior `/gatherings/apply` route entirely — the form lives directly on this page so visitors never leave it.

**Layout:** Container `narrow` (max-width 720px). Background `--paper` (returns to default ground after the logistics strip's `--paper-deep`). Generous vertical padding (`--space-24` top, `--space-32` bottom).

**Above the form:**

Eyebrow (`t-eyebrow`, `--ink-mute`, centred):
```
REQUEST YOUR INVITE
```

Heading (`t-display-2`, `--ink`, centred):
> Tell us a little about you.

Subhead (`t-h3-italic`, `--denim`, centred, max-width 480px):
> *We read every application ourselves.*

A small spacing of ~`--space-12`, then the form.

**Form fields** (underline-style inputs per existing `.input` token, 28px row gap, full-width on the narrow container):

| Field | Label (`t-mono` UPPERCASE eyebrow above input) | Input type | Required | Placeholder |
|---|---|---|---|---|
| 1 | NAME | text | ✓ | *your full name* |
| 2 | EMAIL | email | ✓ | *where we can write back* |
| 3 | PHONE NUMBER | tel | ✓ | *with country code* |
| 4 | HOW ARE YOU A RIGHT FIT TO JOIN US? | textarea (min-height 140px) | ✓ | *as much or as little as you like — three lines is enough* |

**Submit button:** "Send My Application →" (clay primary, magnetic on desktop). Centred under the form, with `--space-8` margin-top.

**Below the button**, small mono-sm caption in `--ink-mute`, centred:
> WE'LL BE IN TOUCH WHEN WE'VE READ IT.

(No "48 hours" promise — per Sapan's direction.)

**Submission states:**

- **Idle** — form as above.
- **Submitting** — button label changes to "Sending…", button disabled, faint clay pulse on the button border, all inputs disabled.
- **Success** — entire form node replaces with a centred handwritten clay message:
  ```
  *we got it. ✦*
  ```
  In Caveat Brush, `--clay`, `t-display-script` size scaled down ~50%, with the `✦` rendered same-size in `--wheat`. A small line below (`t-body`, `--ink-soft`):
  > *Tanya & Keerthi will reply from hello@lostandfoundtravel.com.*

  Track event `gathering_invite_requested` to analytics.

- **Error** — form stays mounted with values intact; an error message appears above the submit button in italic Newsreader denim:
  > *Something went sideways on our end. Try again, or write to us directly at hello@lostandfoundtravel.com.*

**Client-side validation:**
- Name: not empty, max 120 chars
- Email: valid email format, max 200 chars
- Phone: not empty, allow `+`, digits, spaces, hyphens, parentheses — light validation only (don't block international formats); max 40 chars
- Fit textarea: not empty, min 12 chars (prevent "yes"/"a"-style submissions), max 4000 chars

Use the existing form pattern in the codebase (likely React Hook Form + Zod per original PRD §12.4). Errors render under each field as italic Newsreader `t-body-sm` in `--clay-deep`.

**Accessibility:**
- Each input has a real `<label>` linked via `htmlFor` to its `id`
- Required fields announced with `aria-required="true"` and visual asterisk via `::after` on the label
- Error states use `aria-invalid="true"` and `aria-describedby` to associate the error message
- Submit button focusable and reachable via keyboard
- Smooth-scroll from CTAs respects `prefers-reduced-motion` (falls back to instant jump)

---

## 4 · Backend — form submission endpoint

### 4.1 Route

`POST /api/gathering-inquiry`

### 4.2 Request body (validated server-side with Zod, schema mirrors client-side)

```ts
{
  name: string;           // 1..120
  email: string;          // valid email, 1..200
  phone: string;          // 1..40
  fit: string;            // 12..4000
  gathering: 'sri-lanka-aug-2026';  // fixed for this page
  source?: string;        // optional analytics tag (e.g. 'hero-cta' | 'sticky-banner' | 'logistics-section')
}
```

### 4.3 Email destination

**Environment variable:** `GATHERING_INQUIRY_EMAIL`

This is the email address where submissions are delivered. Sapan sets this in:
- `.env.local` for local dev
- Vercel Project Settings → Environment Variables for production

Add a placeholder to `.env.example`:
```
# Where Sri Lanka gathering applications are routed
GATHERING_INQUIRY_EMAIL=
```

If `GATHERING_INQUIRY_EMAIL` is unset at runtime, the route should:
1. Log a warning to the server console
2. Still return 200 to the client (the user shouldn't see a backend config issue)
3. Persist the submission to the existing inquiries table in Postgres so nothing is lost

### 4.4 Email template

Use the existing Resend integration (per original PRD §12.3). Send **two emails**:

**Email A — to `GATHERING_INQUIRY_EMAIL` (admin / Sapan)**

- From: `Lost & Found <hello@lostandfoundtravel.com>` (or whatever existing sender is configured)
- Reply-To: applicant's email (so Sapan can hit reply and write back directly)
- Subject: `New Sri Lanka Gathering invite request — {name}`
- Body (HTML + plain text via React Email):
  - Wordmark header (paper background, ink text — matches transactional templates from PRD)
  - "New invite request" heading
  - Applicant fields rendered as a clean labelled list:
    ```
    Name        {name}
    Email       {email}
    Phone       {phone}
    Submitted   {timestamp, IST}
    Source      {source or 'direct'}

    Why they're a right fit:
    {fit}
    ```
  - Footer with the brand sign-off

**Email B — to applicant (confirmation)**

- From: `Tanya & Keerthi <hello@lostandfoundtravel.com>`
- Subject: `we got your application — Lost & Found`
- Body (warm, on-brand, italic Newsreader for the body, Caveat Brush for the closing accent):
  - Greeting using their first name
  - "we've got your note. we read everything ourselves, so this won't take long."
  - "if you want to read more about who we are and what we do, here's the journal" (link to `/journal`)
  - Sign-off: "— tanya & keerthi"

No SLA / timeframe is mentioned in either email, per Sapan's direction.

### 4.5 Persistence

Insert a row into the existing `inquiries` table (per original PRD §11.2) with:
- `type: 'gathering_application'`
- `name`, `email`, `message` (use the `fit` content here)
- `metadata`: `{ phone, gathering: 'sri-lanka-aug-2026', source }`
- `status: 'new'`

### 4.6 Rate limiting

Light rate-limit by IP at the edge (Vercel KV or in-memory Map for low traffic): max 5 submissions per IP per hour. Returns `429` with a friendly message if exceeded; client renders the error state.

### 4.7 Spam protection

Add a honeypot field — a hidden `<input name="website">` styled `position:absolute; left:-9999px;` and not visible. If the field is filled on submit, silently return success without sending. Cheap and effective against most bots. Do **not** add a CAPTCHA — it kills conversion for a high-intent form like this.

---

## 5 · The catalogue page — `/experiences` (relocated)

This is a **lift-and-shift** of the existing `/gatherings/page.tsx` content. Only changes required:

1. Update the H1: "Small trips, with strangers who become friends." stays. Eyebrow changes from `L&F GATHERINGS · 2026 · 2027` to:
   ```
   L&F EXPERIENCES · 2026 · 2027
   ```
2. Update all card links from `/gatherings/[slug]` to `/experiences/[slug]`.
3. Filter pill copy stays.
4. The bottom band ("Don't see the right one? Plan a personal Experience →") changes its link to `/plan-with-us`.

Cards in this catalogue may still display "From INR X" since pricing on those *other* trips is unaffected by the no-price rule (which is specific to the Sri Lanka gathering). Confirm with Sapan if a global no-price policy is preferred — flagged in §9.

Update meta:
```ts
export const metadata = {
  title: 'Experiences — L&F | Lost & Found',
  description: 'Small-group, hosted, all-inclusive trips. 10 to 14 seats per cohort.',
};
```

---

## 6 · Design system — what to reuse, not redefine

The new page uses **existing** tokens and components. Do not introduce new ones unless explicitly listed below.

### 6.1 Reuse from `tokens.css` / `globals.css`
- Colour vars: `--paper`, `--paper-deep`, `--paper-warm`, `--ink`, `--ink-soft`, `--ink-mute`, `--moss`, `--clay`, `--denim`, `--wheat`
- Type utility classes: `t-eyebrow`, `t-display-1`, `t-display-2`, `t-h1`, `t-h2`, `t-h3-italic`, `t-h4`, `t-body-lg`, `t-body`, `t-body-sm`, `t-mono`, `t-caption-script`
- Layout: `.container`, `.container-narrow`, `.section`, `.band-moss`, `.band-clay`, `.band-paper-deep`
- Photo treatment: `.photo-treatment` (wrap every editorial image)
- Polaroid: existing `.polaroid` component + per-instance `--tilt` CSS var
- Buttons: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost-hand`
- Form inputs: existing `.input` + `.label` styles

### 6.2 Reuse existing components
- `<TreatedImage />` wrapper around `next/image` for all photography
- `<MagneticButton />` for both the "Request My Invite" hero CTA and the form submit button (desktop only; touch fallback is a regular button)
- Hand-drawn SVG components (`HandUnderline`, `HandArrow`, `HandCheck`, `HandSquiggle`) — see Polish Spec §3 if not yet built
- The header and footer are global; no changes other than the nav-label / link updates listed in §1.5

### 6.3 New (page-scoped only) — minimal additions
- `inline-script-accent` style for the "Slow Travel" hero accent — defined on the Hero component, **not** added globally
- `chaotic-overlay-text` and `sticky-banner` styles per the snippets above — defined inside the page's CSS module or as styled JSX, not in `tokens.css`

### 6.4 Tone & voice — match exactly
- Title Case for major headings (e.g. "What This Actually Is" — never lowercase or ALL CAPS for these)
- Italic Newsreader in `--denim` for emotional subheads and pull lines
- Caveat Brush in `--clay` only for **1–3 word handwritten accents** ("Slow Travel", "*we got it. ✦*" success state)
- Mono ALL-CAPS with `0.1em` letter-spacing for eyebrows and meta strips
- No emoji in body copy. The `✦` is the brand separator.
- No exclamation marks except in playful caption contexts
- **No pricing references anywhere on this page** — confirmed direction

---

## 7 · Asset inventory

Sapan provides (per Sapan's confirmation):

| Asset | Slot | Notes |
|---|---|---|
| `chaotic-vacation.jpg` | §3.3 full-bleed | **SUPPLIED** — the aerial palm/beach image |
| `hero-1.jpg`…`hero-5.jpg` | §3.1 right-column one-liner pairs | 5 images, ~16:9 or 4:3; warm-toned, real travellers, no obvious tourist clichés |
| `wellness-retreat.jpg` | §3.4 sub-section B left polaroid | yoga / mat / serene group scene with people |
| `adventure-trip.jpg` | §3.4 sub-section B right polaroid | rafting / hiking / energetic group scene |
| `dinner-strip.jpg` | §3.4 sub-section C full-bleed | warm evening long-table or golden-hour gathering scene |

Until real assets exist, Claude Code uses the existing Unsplash placeholder convention already in the codebase (`images.unsplash.com/...`) with `// TODO[ASSET]:` comments at each replacement point.

---

## 8 · Acceptance criteria

The implementation is complete when **all** of the following are true:

**IA migration:**
- [ ] `/gatherings` resolves to the new Sri Lanka landing page (not the old catalogue)
- [ ] `/experiences` resolves to the lift-and-shifted catalogue (with the H1, eyebrow, and link updates in §5)
- [ ] `/experiences/[slug]` works for the previously catalogued trips
- [ ] `/plan-with-us` resolves to the content previously at `/experience`
- [ ] All four redirects from §1.4 are in place and return `308 Permanent Redirect`
- [ ] The header nav reads `GATHERINGS · EXPERIENCES · OUR JOURNAL · WHY WE'RE HERE` and links correctly
- [ ] The header CTA "Plan With Us" links to `/plan-with-us`
- [ ] Home page marquee strip, footer columns, and any "see all gatherings →" link all point correctly per §1.5

**Sri Lanka page:**
- [ ] New `/gatherings` page renders all seven sections (§3.1 – §3.7) in order, with verbatim copy
- [ ] Hero displays the two CTAs ("Request My Invite" primary, "Explore The Gathering" secondary) plus the trust strip — **no price mentioned**
- [ ] Hero "Request My Invite" CTA smooth-scrolls to `#request-invite` (the form) and respects reduced-motion
- [ ] Sticky banner stays visible after scrolling past the hero, dismissable via close ×, dismissal persists in `sessionStorage`, banner body is itself clickable and scrolls to `#request-invite`
- [ ] Chaotic-vacation overlay image is `photo-treatment`-wrapped and the overlay heading is legible
- [ ] The "We need:" list renders with `HandCheck` SVGs (moss), each drawing in on viewport entry
- [ ] Wellness / adventure dichotomy renders as the mirrored two-column block with polaroid images at unique tilts
- [ ] "We exist somewhere in between" appears as overlay on the full-bleed dinner-strip image
- [ ] You Leave With section renders on the moss band with paper text and stagger animation
- [ ] Logistics quick-reference renders before the form, with the italic "*For pricing and full inclusions, request your invite below.*" line
- [ ] **No price displayed anywhere on the Sri Lanka page** — verified via text search

**Inline form (§3.7):**
- [ ] Form renders at the bottom of the page with anchor id `request-invite`
- [ ] All four fields (Name, Email, Phone, Fit) present, required, with the correct labels and placeholders
- [ ] Client-side Zod validation matches the rules in §3.7
- [ ] Honeypot field present per §4.7
- [ ] Submission POSTs to `/api/gathering-inquiry`
- [ ] Successful submission renders the handwritten clay "*we got it. ✦*" success state
- [ ] No "48 hours" or other SLA promise anywhere in form copy or confirmation emails

**Backend:**
- [ ] `/api/gathering-inquiry` route exists with Zod validation
- [ ] Reads `GATHERING_INQUIRY_EMAIL` env var; logs a warning and persists to DB if unset (still returns 200 to client)
- [ ] Sends admin email (to `GATHERING_INQUIRY_EMAIL`) with applicant fields + reply-to set to applicant's email
- [ ] Sends confirmation email to applicant (no SLA promise in body)
- [ ] Persists row to `inquiries` table with `type: 'gathering_application'` and full metadata
- [ ] Rate-limits at 5 submissions per IP per hour
- [ ] `.env.example` updated with `GATHERING_INQUIRY_EMAIL=` placeholder

**Quality bars:**
- [ ] Lighthouse mobile Performance ≥ 88, Accessibility = 100 on `/gatherings`
- [ ] No console errors or layout shift on first paint
- [ ] `prefers-reduced-motion` honoured (no parallax, no clip-path write-on, no magnetic — see Polish Spec §8)
- [ ] All photography wrapped in `<TreatedImage />` / `.photo-treatment`
- [ ] Page meta (title, description, OG) set per §3 opener
- [ ] No new global tokens or utility classes introduced — only page-scoped additions per §6.3

---

## 9 · Confirmed decisions + remaining flags

**Confirmed (Sapan, this iteration):**

| # | Decision | Choice |
|---|---|---|
| 1 | IA split (Gatherings singular / Experiences catalogue / Plan With Us) | ✅ Approved |
| 2 | Sticky banner separator | ✅ Defaulting to `✦` (no palms) |
| 3 | Application form length | ✅ 4 fields: Name, Email, Phone, Fit |
| 4 | SLA / follow-up promise | ✅ Removed — no timeframe anywhere |
| 5 | Pricing display on Sri Lanka page | ✅ Zero price mentions — "contact us for info" framing only |
| 6 | Real photography | ✅ Sapan providing |

**Open / flagged in code with `// TODO[DECISION]:`**

1. **`GATHERING_INQUIRY_EMAIL` recipient address** — Sapan to set in `.env.local` and Vercel env vars before launch.
2. **Catalogue pricing on `/experiences`** — the lift-and-shifted cards currently show "From INR X". The no-price policy is currently scoped to *only* the Sri Lanka gathering. Confirm if Sapan wants the no-price rule extended to all cards on `/experiences` too, or whether Sri Lanka is the only one with that treatment.

---

## 10 · Claude Code kickoff prompt

Paste this into Claude Code in your local terminal at the project root, alongside this spec file.

```
Build the Sri Lanka Gatherings page, the IA cleanup, and the inline
form submission flow per the attached spec (Sri-Lanka-Gatherings-PRD.md).
Source of truth: the deployed site at lost-and-found-app-snowy.vercel.app
— match its design language exactly (Title Case headings, mono eyebrows,
italic Newsreader denim subheads, clay handwritten accents, paper grain,
photo treatment).

WORK ORDER:

1. IA migration FIRST (do not start the new page until this is green):
   - Move app/gatherings/page.tsx → app/experiences/page.tsx (apply
     the H1/eyebrow/link updates per spec §5)
   - Move app/gatherings/[slug]/ → app/experiences/[slug]/
   - Move app/experience/page.tsx → app/plan-with-us/page.tsx
   - Add the four redirects in next.config.js per spec §1.4
   - Sweep all internal links to update routes per spec §1.5 (header,
     footer, home marquee, anywhere referencing old routes)
   - Verify the site still builds and old URLs redirect correctly

2. Build the new app/gatherings/page.tsx as the Sri Lanka landing page.
   Implement sections §3.1 through §3.7 in order. Use copy verbatim.
   Reuse all existing tokens, components, and patterns — no new global
   utilities. Page-scoped styles only for items in spec §6.3.

   Critical: ZERO PRICE MENTIONS anywhere on this page. Use the framing
   in §3.6 ("For pricing and full inclusions, request your invite below.")
   instead. The Hero trust strip lists seats/days/inclusivity/host only.

3. Build the sticky banner per §3.2 — position: sticky inside the page
   main, top offset matches the header height. Dismissable with
   sessionStorage persistence. Banner body is itself an anchor link to
   #request-invite.

4. Build the inline contact form (§3.7) at the bottom of the page,
   anchor id "request-invite". Four fields only: Name, Email, Phone,
   "How are you a right fit to join us" (textarea). Include the
   honeypot field per §4.7. Client validation matches §3.7. Success
   state is the handwritten clay "we got it. ✦" message — no SLA
   promise in any copy.

5. Build /api/gathering-inquiry per spec §4:
   - Zod-validated POST handler
   - Reads GATHERING_INQUIRY_EMAIL env var (recipient address)
   - Sends admin email (with applicant's email as reply-to)
   - Sends confirmation email to applicant (no SLA promise)
   - Persists to inquiries table with type 'gathering_application'
   - Rate limits 5/IP/hour
   - Returns 200 even if env var is missing (logs warning, still
     persists to DB)
   - Update .env.example with the GATHERING_INQUIRY_EMAIL placeholder

6. Both CTAs in the hero ("Request My Invite" primary, sticky banner
   click target) smooth-scroll to #request-invite, with a
   prefers-reduced-motion fallback to instant jump.

7. All images go through <TreatedImage />. Mark missing assets with
   // TODO[ASSET]: comments pointing at the slot in §7.

8. Run Lighthouse on /gatherings. Must hit ≥88 mobile Perf and 100 A11y
   before declaring done. Verify no price text appears anywhere on the
   page via grep / view-source.

CONSTRAINTS:
- Do not introduce new fonts, new colour tokens, or new global classes.
- Do not change the header, footer, or home page beyond the link
  updates in §1.5.
- Do not change the visual language of other pages.
- Preserve every bold heading from the source wireframe as a visually
  emphasised Title Case display-serif heading.
- Respect prefers-reduced-motion across all animations.
- No SLA / "48 hours" / response-time promise anywhere.

Confirm the IA migration step is complete with screenshots / redirect
tests before moving to step 2. Then ship section by section for review.
```

---

**End of spec v2.** Companion to the original PRD, the Polish Spec, and the existing deployed codebase. The deployed site is the design source of truth; this page extends it.
