# Lost & Found — Website PRD & Implementation Specification

**Document type:** Product Requirements Document + build-ready specification
**Audience:** Anti Gravity (AI coding agent), with Sapan as the human reviewer
**Version:** 1.0 — May 2026
**Status:** Build-ready

---

## How to use this document

Anti Gravity should read this document end-to-end before writing a single line of code. The structure is:

- **§1–§4:** What we're building, for whom, and why
- **§5:** The design system — this is the visual constitution. Defer to it.
- **§6:** Sitemap and page-by-page specs — every page, every section, every CTA
- **§7–§9:** Components, motion, and copy
- **§10–§13:** Tech stack, data models, integrations, SEO/analytics
- **§14–§17:** Performance/accessibility, build roadmap, launch checklist, open questions
- **§18:** A single kickoff prompt for Anti Gravity (paste this directly to start)

If anything in this document conflicts with itself, the **page specs in §6** are the source of truth for what gets built; the **design system in §5** is the source of truth for how it looks and moves.

---

## Table of contents

1. Executive summary & vision
2. Brand foundation (essence, voice, aesthetic universe)
3. Audiences — "who we vibe with"
4. Business model & revenue architecture
5. Design system (palette, type, texture, motion principles)
6. Sitemap & full page specifications
7. Component library
8. Motion & micro-interactions catalogue
9. Voice, tone & ready-to-ship copy
10. Tech stack & architecture
11. Data models & CMS schema
12. Integrations (payments, email, forms, analytics)
13. SEO & analytics tracking plan
14. Performance, accessibility, browser support
15. Implementation roadmap (phased)
16. Launch checklist
17. Open decisions for Sapan
18. Anti Gravity kickoff prompt

---

# 1. Executive summary & vision

## 1.1 The product, in one sentence

A digital home for **Lost & Found — Personal Travel Curators** — a slow-travel brand that designs emotionally considered escapes for people in transition (heartbreak, burnout, career fatigue, decision overload), built to feel like flipping through someone's beautifully kept travel journal rather than scrolling a booking site.

## 1.2 The promise the website must deliver

The Instagram already does the heavy lifting of building emotional connection. The website's job is to **convert that connection into a booking** — without ever feeling like the conversion happened. A visitor should arrive, recognise the voice, see themselves in the language, scroll through trips that look like things they'd actually do, and end up either reserving a seat or writing to us about a custom trip — feeling like they made the decision themselves.

## 1.3 Three actions, in priority order

Every page must lead toward exactly one of these three actions:

1. **Reserve a seat** on an upcoming L&F Gathering or curated experience (B2C revenue).
2. **Inquire** about a custom-curated trip or team retreat (B2C custom + B2B revenue).
3. **Subscribe** to the journal (top-of-funnel, compounding).

## 1.4 Success metrics (first 90 days post-launch)

| Metric | Target |
|---|---|
| Newsletter subscribers | 800+ |
| Reserved seats on Gatherings | 30+ |
| Qualified custom-trip inquiries | 25+ |
| Avg. session duration (home) | > 2:30 |
| Bounce rate (home) | < 40% |
| Conversion rate (home → any CTA click) | > 8% |
| Lighthouse performance (mobile) | > 88 |
| Lighthouse accessibility | 100 |

## 1.5 What this site is NOT

- **Not an OTA.** No "search 12 destinations, sort by price descending."
- **Not a generic startup site.** No card-with-shadow component grid, no purple gradient, no "Get Started" button, no Inter font.
- **Not a luxury wellness brand site.** Aman/Aesop polish is the wrong direction — that's too cold, too corporate, too male. This brand is warm, vulnerable, hand-made.
- **Not a brochure.** Every page leads somewhere. Every section has a job.

## 1.6 The single most important design instruction

> The website should feel like flipping through a friend's well-kept travel journal — paper textures, handwritten captions in coral marker, polaroid photos slightly askew, italic serif quotes between sage-green sections, and an underlying sense that someone took *care* with this. If a visitor scrolls and feels their shoulders drop a half-inch — like they've stumbled into a quiet bookshop — the site is working. If it feels glossy, perfect, or in a hurry, it's failing.

This means: textured cream backgrounds (never flat white), hand-drawn elements as accents, polaroid-framed photography, generous whitespace with intentional asymmetry, motion that breathes (400–800ms easings, never snappy), one CTA per scroll.

---

# 2. Brand foundation

## 2.1 Brand essence

- **Name:** Lost & Found
- **Subtitle / wordmark line:** Personal Travel Curators
- **Stylization:** "LOST&FOUND" all caps in serif, with "PERSONAL TRAVEL CURATORS" set as small caps directly underneath, letter-spaced. (Confirmed from existing brand applications.)
- **Working tagline (rotates on home hero):**
  - "We curate. You arrive."
  - "Less itinerary. More presence."
  - "For the burnt-out, the heartbroken, and the beautifully tired."
  - "Travel that doesn't feel like another decision."

## 2.2 Brand values (the things we say "yes" and "no" to)

| We say YES to | We say NO to |
|---|---|
| Slow over packed | "10 cities in 14 days" |
| Specific over generic | "Amazing experiences await" |
| Vulnerable over polished | "Live your best life" |
| Confessional over aspirational | Influencer-tour energy |
| Indian-and-South-Asian-fluent | Translating "chai" as "tea" |
| One trip, deeply | Endless catalogue browsing |
| Naming the host | Faceless tour ops |
| Saying when something isn't right for you | Selling to everyone |

## 2.3 Voice & tone

The voice is **a thoughtful friend who's been through it and writes you long voice notes at 11pm.** Not a copywriter. Not an editor. Not a salesperson.

**Things this voice says naturally:**
- "Decision Fatigue is one of the most underrated exhaustions of modern life."
- "I want more people to stop speed-running cities and start staying long enough to feel something real."
- "Stop waiting to have it all figured out."
- "OOPS, I booked a flight instead of dealing with my problems. But hey, that trip kindda fixed my life."
- "Heartbreak of any kind is not a weakness to power through. It is a rupture that asks to be acknowledged."
- "Travel isn't a break from work. Work is the break from living."

**Tone characteristics:**
- Conversational, never marketing-speak
- Allows imperfection ("kindda" is fine; we're texting, not publishing)
- Mixes considered prose with casual interjections (Gen-Z–coded but not pandering — "girlies", "SZN", "vibe with" used naturally)
- Specific over generic ("five mornings of Himalayan fog and one afternoon of nothing scheduled" beats "amazing nature experiences")
- Lower-case in body for warmth, ALL CAPS for emotional emphasis (used sparingly)

**Hard avoids (banned words/phrases):**
~~amazing~~, ~~epic~~, ~~transformative~~, ~~bucket-list~~, ~~unforgettable~~, ~~once-in-a-lifetime~~, ~~hidden gem~~, ~~adventure of a lifetime~~, ~~discover~~, ~~explore your wanderlust~~, ~~book now~~, ~~limited spots — hurry~~, ~~elevate your experience~~, exclamation marks (except in playful contexts), emoji in body copy.

## 2.4 The aesthetic universe — references

- **The Late Checkout** (the Pinterest reference) — paper textures, handwritten script, polaroids, scattered layout
- **Cereal Magazine** — generous whitespace, refined typography, slow scroll
- **Atlas Obscura** editorial features — long-form storytelling treatment
- **Selina** in tone (community + considered design), not in execution
- **Lost & Found's own Instagram** — sage/coral/cream palette, italic serifs, monospace body, handwritten emphasis
- **Frankie Magazine** (Australian indie zine) — collage feel, hand elements, warm palette
- **Apartamento** — domestic intimacy, real spaces, real people

## 2.5 Logo / wordmark

The existing brand mark is:

```
LOST&FOUND
PERSONAL TRAVEL CURATORS
```

Set in a fine serif (likely Playfair Display, Cormorant Garamond, or DM Serif Display weight ~500–600), uppercase, letter-spaced. The subtitle is small caps, ~30% the size of the wordmark, with wider letter-spacing.

**For the website:**
- The wordmark appears once in the header (top-left), at ~24px height.
- It appears once in the footer at ~32px height.
- Never bigger. Never with a swoosh. Never in clay/coral — always in `--ink` or `--moss`.
- A monogram "L&F" can be used as favicon and small footer mark.

---

# 3. Audiences — "who we vibe with"

Lost & Found's Instagram has already named its audience archetypes ("creatives, heartbroken girlies, introverts, daydreamers, couples, mother & daughter"). The website extends and uses these.

## 3.1 Primary archetype: The Quietly Burnt-Out Twenty-Something (B2C)

- **Demographics:** 25–34, predominantly women, urban India (Bangalore, Bombay, Delhi, Hyderabad, Pune, Kolkata) + Indian diaspora (Dubai, Singapore, London, NYC). Tech / design / consulting / creative / law / finance. Household income INR 12L+.
- **Psychographic:** Reads, journals, follows curated Instagram feeds (Cereal, Kinfolk, slow-travel accounts), in therapy or considering it, owns a Kindle, has bought a Moleskine.
- **Job-to-be-done:** "I'm exhausted from making decisions. I want to go somewhere I haven't researched, with a small group I won't have to perform for, run by someone who actually knows what slow travel means. I don't want to plan it. I want to show up."
- **Anxieties:** Will it be cringe? Will the group be cliquey? Is the host actually thoughtful or just selling vibes? What if I don't connect? Can I do this solo as a woman?
- **Trigger to convert:** Specific itinerary detail, named host, real photography (not stock), past-trip reviews, small group size promised explicitly.

## 3.2 Secondary archetype: The Heartbroken / In-Transition

- **Trigger life event:** Breakup, divorce, parent loss, job loss, quarter-life or mid-life inflection.
- **Job-to-be-done:** "I need to leave for a week. I don't know where. I just need someone to take care of the rest."
- **The emotional tone the site MUST hold:** This audience is fragile. The website must never feel rushed, salesy, or extractive. Holding space is a core design objective.

## 3.3 Tertiary archetype: The Couple / Family looking for an alternative

- Couples who don't want a Maldives package
- Mothers and adult daughters wanting to travel together
- Two friends who haven't seen each other in three years

## 3.4 B2B archetype: The People & Culture Lead at a Mid-Size Indian Company

- **Demographics:** Head of People / HR / Founder's Office at a 50–500 person company.
- **Job-to-be-done:** "I need an offsite that doesn't feel like an offsite. My team is tired. I don't want to do another Goa villa."
- **Trigger to convert:** Past corporate clients (case-studies anonymized if needed), clear inclusions, named contact, downloadable one-pager, easy invoicing.

## 3.5 Casual reader (top-of-funnel)

- Discovered us via Instagram, a journalist's piece, a friend forwarding a reel.
- **Conversion goal:** Newsletter signup. Save for later.

## 3.6 Audience routing on the home page

The home page must serve all these in the first 1.5 viewports:

1. **Hero** speaks to all (emotional, archetype-agnostic)
2. **"Who we vibe with"** strip lets visitors self-identify (uses the archetypes above)
3. **Upcoming Gatherings** strip serves the immediate-buyers
4. **For Teams** band serves the B2B segment
5. **Journal** strip serves the not-ready-yet readers

---

# 4. Business model & revenue architecture

Lost & Found has multiple offers visible across its content. The website must clearly distinguish them.

## 4.1 The four product lines

### Product 1 — **The L&F Gathering** (group community trip)
- 5–8 day group trip, small cohort (10–14 travellers), open enrolment, hosted by Lost & Found team.
- One destination per Gathering. 4–6 Gatherings per year.
- Price band: **INR 65,000–1,25,000** per person (depending on destination/duration), inclusive of stays, most meals, experiences, transfers, host. Excludes flights.
- Booking: Reserve seat with **INR 15,000 deposit** (refundable up to 30 days out). Balance due 21 days before departure.
- Marketing positioning: "Travel with strangers who become friends."
- Example: *Ahangama, Sri Lanka — Aug 20–26, 2026 — A week to rediscover travel differently.*

### Product 2 — **The L&F Experience** (full personal curation)
- Custom-designed solo, couple, or small-group trip. End-to-end planning by the L&F team.
- Range: 4–14 days, anywhere they curate (current footprint: India, Sri Lanka, UAE, expanding).
- Price model: **Curation fee** (INR 25,000–60,000 depending on trip complexity) + cost of bookings (transparent, no markup) OR all-in package (INR varies).
- Lead flow: Inquiry form → 30-min discovery call → proposal (PDF) → contract → planning.

### Product 3 — **The Decision Detox** (signature themed retreat)
- A *named* themed Gathering specifically for people experiencing decision fatigue / burnout.
- Same mechanics as L&F Gathering but with a specific therapeutic frame (no decisions to make on trip, fixed daily rhythm, journaling, optional sound bath / yoga / breathwork).
- Marketed separately because it has a distinct emotional buyer.
- Price band: same as L&F Gathering (INR 75,000–1,25,000).

### Product 4 — **A La Carte / Modular Curation** (the "just the parts" option)
- "We can plan the whole trip, or just the parts you want to remember forever."
- Sub-services: Itinerary design, restaurant bookings, local experiences & day plans, accommodation curation.
- Price model: Per service (INR 5,000–25,000) or bundled.
- This is the **lighter-touch entry product** — lower friction, lower commitment, builds toward a full Experience.

### Product 5 — **The Journal** (free, compounding)
- Email newsletter, one letter per fortnight.
- Future product: paid quarterly print zine (Year 2).

## 4.2 Conversion architecture per page

Every page has **one primary CTA, one secondary CTA**. Never more than two.

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| Home | Browse upcoming Gatherings | Plan a personal Experience |
| Gatherings (catalogue) | Reserve your seat (per card) | Save for later |
| Single Gathering | Reserve your seat | Have a question? Write to us |
| The L&F Experience (service page) | Tell us about your trip (form) | Read past Experience stories |
| Decision Detox (landing page) | Reserve your seat (next cohort) | Read what it's like |
| A La Carte | Get in touch | Browse Gatherings |
| Destinations index | Open destination | — |
| Single destination | Browse trips here | Plan a custom Experience |
| Who We Vibe With | Find your trip (filtered) | Subscribe to journal |
| Journal index | Read article | Subscribe |
| Single journal article | Subscribe | Browse Gatherings |
| Our Story | Browse Gatherings | Subscribe |
| Reviews | Browse Gatherings | Plan an Experience |
| Contact | Send message | — |
| 404 | Go home | Browse Gatherings |

## 4.3 Pricing display rules

- Cards always show **"From INR XX,XXX"** — round to nearest thousand. Never below "from."
- Detail pages show **full price + what's included + what's not** — radical transparency builds trust at this price point.
- **Currency toggle** (INR / USD) lives in footer; default INR for IN visitors, USD for international (geo-detected).
- USD conversion uses a static rate updated monthly — admin sets in CMS.

---

# 5. Design system

This section is **canonical**. Every visual decision in the build defers to this.

## 5.1 Aesthetic direction (locked)

**Editorial scrapbook journal.** Cream paper textures, polaroid photo frames, handwritten coral script, italic dusty-blue serifs, sage green sectional blocks, hand-drawn arrows and underlines, generous whitespace, intentionally imperfect alignment. Warm. Vulnerable. Hand-made-feeling.

The overall mood: **someone's beautifully kept travel journal**, photographed in soft afternoon light.

## 5.2 Color palette

The palette is taken directly from Lost & Found's existing visual language. Six colors total. No more.

```css
:root {
  /* PRIMARY SURFACES */
  --paper:        #F2EBDD;  /* primary background — warm cream, slightly textured */
  --paper-deep:   #E5DBC4;  /* secondary surface, dividers, hover states */
  --paper-warm:   #FAF5EA;  /* highlight surface (e.g., cards on paper bg) */

  /* TEXT */
  --ink:          #1F1D1A;  /* primary text, near-black warm */
  --ink-soft:     #4A463F;  /* secondary text, captions */
  --ink-mute:     #807A6E;  /* tertiary text, meta info */

  /* BRAND ACCENTS */
  --moss:         #5C6F5A;  /* sage green — section blocks, secondary buttons */
  --moss-deep:    #3F4F3E;  /* darker sage — hover states for moss */
  --clay:         #C45A3F;  /* coral / terracotta — primary accent, hand-script color */
  --clay-deep:    #A04528;  /* hover state for clay */
  --denim:        #6B7F95;  /* dusty blue — italic serif color, secondary accent */
  --denim-deep:   #4F6178;  /* hover state for denim */
  --wheat:        #C9A876;  /* warm gold — decorative lines, occasional highlights */
}

/* TEXTURE OVERLAY (applied to body) */
.paper-texture {
  background-image:
    url('/textures/paper-grain.png'),
    radial-gradient(ellipse at 30% 20%, rgba(255,250,240,0.4) 0%, transparent 50%);
  background-blend-mode: multiply;
  background-size: 600px 600px, 100% 100%;
}
```

**Usage rules:**
- ~65% paper, ~18% ink (text), ~10% moss/denim (sections + accents), ~5% clay (handwriting + emphasis), ~2% wheat (lines)
- **Clay (coral)** is the signature — used for handwritten-script display text, emphasis words, and primary CTA fills. Used like punctuation. Never for body text or large flat fills.
- **Moss (sage)** is for full-bleed section bands (e.g., "For Teams" band, "Subscribe to the Journal" footer band) where text on top reverses to `--paper`.
- **Denim (dusty blue)** is for italic serif accents and secondary/quote text — referenced from the Pinterest pin and L&F Insta posts.
- **Never use pure white (`#FFFFFF`) or pure black (`#000000`).**
- **Body backgrounds always have paper texture** — flat solid color is forbidden on full-bleed surfaces.

**Section background palette (for variety across pages):**
- 70% of sections: `--paper` (the default cream)
- 15%: `--paper-deep` (slightly darker cream, used to delineate sections without full color shift)
- 10%: `--moss` reverse-out (sage with cream text)
- 5%: `--clay` reverse-out (coral with cream text — use VERY sparingly, max 1 section per page)

## 5.3 Typography

A **four-font system**. Deliberately mixed — this is part of the scrapbook DNA.

### Font 1 — Display Serif (uppercase + standard)
Used for: hero wordmark-style headlines (uppercase), section titles, navigation, "LOST&FOUND" wordmark.

- **Recommended:** [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) (free, Google Fonts)
- **Alternative:** Playfair Display, Cormorant Garamond
- **Style:** ~500 weight, used in uppercase with +0.02em letter-spacing for headlines, regular case with italic for emphasis text.

### Font 2 — Body Serif (regular + italic, lower case)
Used for: body copy, longer paragraphs, italic emphasis lines, journal articles.

- **Recommended:** [Newsreader](https://fonts.google.com/specimen/Newsreader) (free, variable weight + italic, beautifully soft)
- **Alternative:** Source Serif Pro, EB Garamond
- **Style:** Regular for body, italic for emotional/quoted lines (this is THE Lost & Found "feel" — italic serif lines like *"a quiet morning & a life that doesn't feel rushed"*).

### Font 3 — Handwritten Script (THE signature)
Used for: handwritten emphasis words, polaroid captions, hero headline, decorative throwaways. Always in `--clay` (coral).

- **Recommended:** [Caveat Brush](https://fonts.google.com/specimen/Caveat+Brush) (free, marker-style) OR [Reenie Beanie](https://fonts.google.com/specimen/Reenie+Beanie) (free, casual handwriting)
- **Alternative for premium:** "Beauty Hand" (paid, very close match to L&F's existing handwriting style — see Insta posts where words like "urgent", "slow travel" are written in this style)
- **Style:** Used at large size for headlines (90–180px), small size for polaroid captions (~28px). Slight rotation (-2° to +3°) when used as caption.

### Font 4 — Monospace / Typewriter
Used for: small caption text, eyebrow labels, dates, metadata, "PERSONAL TRAVEL CURATORS" subtitle. The L&F Insta uses a courier-style font for body in many posts — this is part of the brand DNA.

- **Recommended:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) or [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (both free)
- **Alternative:** Courier Prime
- **Style:** Often UPPERCASE with letter-spacing for eyebrow labels; sentence case for captions.

### Type scale

Modular scale, ratio 1.25. Mobile values shown in parentheses.

| Token | Font | Size desk (mob) | Line-h | Usage |
|---|---|---|---|---|
| `display-script` | Caveat Brush | 180px (96px) | 0.95 | Hero handwritten headline |
| `display-1` | DM Serif Display | 96px (56px) | 1.0 | Page hero (uppercase) |
| `display-2` | DM Serif Display | 72px (44px) | 1.05 | Section openers |
| `h1` | DM Serif Display | 56px (36px) | 1.1 | Page titles |
| `h2` | DM Serif Display | 40px (28px) | 1.15 | Section heads |
| `h3` | Newsreader Italic | 32px (24px) | 1.25 | Italic quote-style headings (the "Lost & Found feel") |
| `h4` | DM Serif Display | 24px (20px) | 1.3 | Card titles |
| `body-lg` | Newsreader 400 | 20px (18px) | 1.6 | Lead paragraphs, journal body |
| `body` | Newsreader 400 | 17px (16px) | 1.65 | Default body |
| `body-sm` | Newsreader 400 | 15px (14px) | 1.55 | Captions |
| `mono-sm` | JetBrains Mono | 13px (12px) | 1.4 | Eyebrow labels (UPPERCASE +0.1em) |
| `caption-script` | Caveat Brush | 28px (22px) | 1.1 | Polaroid captions |

**Italic serif** is a feature, not an exception. Use Newsreader Italic for any line meant to feel like a thought, a memory, a quote. Examples: "*what kind of morning you're dreaming of*", "*we curate, you arrive*", "*for those who've forgotten how to stop*".

## 5.4 Spacing & layout

- **Base unit:** 4px
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256
- **Container max-widths:**
  - `narrow`: 720px (long-form text)
  - `default`: 1200px (most pages)
  - `wide`: 1440px (galleries, full-bleed sections)
  - Edges always have 24px (mobile) / 64px (desktop) gutter
- **Vertical section rhythm:**
  - Between sections: 96–192px desktop, 64–96px mobile
  - Within section: 32–64px between blocks
- **Asymmetry is welcomed.** Sections do NOT need to be perfectly symmetric. Polaroids tilt. Headlines may sit off-center. Two-column blocks may be 60/40 instead of 50/50.

## 5.5 Texture & decorative elements

These are non-negotiable details that give the site its "scrapbook" character:

1. **Paper grain texture** — overlaid on the body background at ~6% opacity. Creates the subtle "real paper" feel. (Asset: `/textures/paper-grain.png`, sourced from a free seamless grain pack — anti gravity should generate or source this.)
2. **Polaroid frames** — used for ALL photo presentations except full-bleed hero photos. White/cream border (16px top/sides, 56px bottom for caption space), slight shadow (`0 12px 32px rgba(31,29,26,0.08)`), random tilt between -3° and +3°.
3. **Hand-drawn arrows** — used as section transitions and CTA pointers. Provided as inline SVG. Drawn in `--clay`, slightly imperfect lines (jitter ~1–2px).
4. **Hand-drawn underlines** — used on key emphasis words in headlines. Inline SVG, `--clay` color. Animated to "draw in" on viewport entry.
5. **Tape elements** — small (~80px wide) translucent tape marks used to "stick" polaroids to the page. Used sparingly (one per polaroid maximum).
6. **Highlight circle / scribble** — hand-drawn circle around emphasis words (like the "20s" highlight in the L&F "trusting myself" Insta post). Inline SVG.
7. **Section dividers** — never a flat horizontal line. Use either:
   - A short hand-drawn squiggle SVG centered
   - A row of small dots (3–5)
   - A small mark like `~~~` rendered as SVG

## 5.6 Iconography

- **Custom hand-drawn icons** for: navigation, social, share, save, play, arrow, plus, close. Drawn in a single 1.5px stroke style with slight jitter.
- **Source:** Anti Gravity should commission from the existing brand mark style OR use [Phosphor Icons](https://phosphoricons.com/) (free, hand-drawn feel) with the "duotone" style overridden to single-stroke `--ink`.
- **Never use Material Icons, Font Awesome, or Heroicons** — they're too generic.

## 5.7 Imagery treatment

All photography on the site goes through a consistent treatment:

- **Slight desaturation** (-8% saturation)
- **Warmth boost** (+10 on warm channels, slight amber tint at 4%)
- **Film grain overlay** (subtle, ~3% opacity, applied via CSS `mix-blend-mode: overlay` on a noise texture)
- **Vignette** (very subtle, ~10% darkening on outer 20% of frame)

This treatment makes every photo feel like it belongs to the same journal — even if shot on different cameras at different times.

**Anti Gravity should implement this as a `.photo-treatment` CSS class** that applies these effects to any `<img>` it wraps. The CMS uploads original photos; the class handles consistency.

## 5.8 Cursor

- **Desktop:** Custom small circular cursor (12px diameter, `--ink` 1.5px ring, `--paper` fill).
- On hover over interactive elements: cursor expands to 56px and shows a small text label inside ("View", "Reserve", "Read", "Open", "Save").
- On hover over draggable carousel: shows "← Drag →" inside.
- Implemented with a `<div>` that follows `mousemove` (lerp 0.2 for smooth tail).

## 5.9 Motion principles

The whole site moves slowly — that's the brand promise made manifest.

- **Default easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-cubic-ish, but softer)
- **Default duration for entrances:** 600–800ms
- **Default duration for hovers:** 250–400ms
- **Stagger:** 80–120ms between sibling elements entering
- **Smooth scroll:** Lenis with default settings, ease 0.08
- **No bouncy spring physics** anywhere. This isn't an iOS demo. Use ease curves, not springs.
- **Page transitions:** Cross-fade with slight upward translate (16px), 600ms.

## 5.10 Sound (optional, off by default)

A subtle ambient toggle in the footer (small "🔊 sound on" link in `caption-script`). When toggled on, plays a barely-audible loop of soft ambient (waves, wind, birds — 5-min seamless loop). **Off by default.** This is a delight detail, not a feature.

---

# 6. Sitemap & full page specifications

## 6.1 Sitemap

```
/                            Home
/gatherings                  Upcoming Gatherings (catalogue)
/gatherings/[slug]           Single Gathering page
/experience                  The L&F Experience (custom curation service page)
/decision-detox              Decision Detox (themed Gathering landing)
/a-la-carte                  Modular curation services
/destinations                Destinations index
/destinations/[slug]         Single destination page (e.g., Sri Lanka, Spiti)
/who-we-vibe-with            Audience archetype filter / find-your-trip page
/journal                     Journal index (blog)
/journal/[slug]              Single journal article
/our-story                   About / founder & team
/reviews                     L&F & Reviewed (testimonials)
/contact                     Contact / general inquiry
/teams                       For Teams (B2B page)
/inquire                     Long-form inquiry form (used by Experience and Teams)
/thanks                      Thank-you confirmation page
/404                         Custom 404
/legal/privacy
/legal/terms
/legal/cancellation
```

## 6.2 Global header

**Layout:**
- Sticky on scroll, with a subtle background-blur backdrop after 80px scroll.
- 80px tall on desktop, 64px on mobile.
- Background: `--paper` with backdrop-filter: blur(12px) at >80px scroll.

**Contents (left → right):**
1. **Wordmark** (left): "LOST&FOUND" in DM Serif Display, with "PERSONAL TRAVEL CURATORS" small caps mono below. ~24px tall total.
2. **Nav** (center, desktop only): GATHERINGS · EXPERIENCE · JOURNAL · OUR STORY (in mono-sm uppercase, +0.1em letter-spacing). On hover: clay underline animates in left-to-right (300ms).
3. **CTA + Menu** (right): A small "Reserve a seat ↗" link in italic Newsreader (denim color), and a hamburger icon (mobile only).

**Mobile menu:**
- Full-screen overlay, `--paper` background
- Nav items in display-2 size, stacked, left-aligned
- Slow fade-in on open (400ms), staggered nav item entrance (80ms apart)
- Bottom of menu: small handwritten "say hi →" link in Caveat Brush, clay color, links to /contact

## 6.3 Global footer

**Sections (top to bottom):**

1. **Newsletter band** (sage `--moss` background, `--paper` text)
   - Headline (italic Newsreader, ~h2 size): *"slow letters, once a fortnight."*
   - Subhead (body): "No promotions. No urgency. Just a thoughtful note from the road."
   - Email input + "Subscribe" button
   - Below input, in mono-sm: "We won't share your email. We'll write to you when we have something worth saying."

2. **Footer columns** (cream `--paper` background)
   - Column 1: Wordmark + small description ("Personal travel curators. Designing slow trips for people in transition.") + social icons (Instagram, YouTube, Spotify if podcast).
   - Column 2: TRIPS — Gatherings, The Experience, Decision Detox, A La Carte
   - Column 3: COMPANY — Our Story, Journal, Reviews, Press
   - Column 4: HELP — Contact, FAQ, Cancellation, Privacy, Terms

3. **Bottom bar**
   - Left: "© Lost & Found, 2026 · made with care in [city]"
   - Right: Currency toggle (INR / USD), language toggle (EN — future-proofing for हिन्दी)

4. **Decorative bottom** — A faint hand-drawn squiggle SVG running edge-to-edge across the bottom of the footer in `--wheat` at 30% opacity.

---

## 6.4 Page: HOME `/`

Most important page. Anti Gravity should spend the most time here.

### Section 1 — Hero
- **Layout:** Asymmetric. Left side text, right side image.
- **Background:** `--paper` with paper-grain texture
- **Left column (60% width on desktop, full on mobile):**
  - Eyebrow (mono-sm uppercase, ink-soft): "PERSONAL TRAVEL CURATORS · EST. 2024"
  - Main headline: **Two lines.**
    - Line 1 in DM Serif Display, regular case, 96px desktop: "Travel that feels like"
    - Line 2 in Caveat Brush handwritten, clay color, 180px desktop: "a long exhale."
  - Sub-headline (body-lg, italic Newsreader, denim color, max-width 480px): "*we plan slow, considered trips for people who've forgotten how to stop. you don't decide where to eat. you don't decide what to do. you arrive — and you remember.*"
  - Two buttons (primary + secondary):
    - Primary: "Browse upcoming Gatherings" (clay fill, paper text)
    - Secondary: "Plan a personal Experience" (ink outline, ink text)
- **Right column (40% width):**
  - A polaroid-style photo, slightly tilted (-2°), with a hand-written caption underneath in Caveat Brush: "*Ahangama, last spring*"
  - Photo treatment applied (warmth + slight grain)
  - On hover: photo lifts 4px, tilt straightens to 0°, 600ms ease

**Below hero (above fold on desktop):**
- A horizontal marquee strip of small text in mono-sm, scrolling slowly right-to-left:
  - "NEXT GATHERING — AHANGAMA, AUG 20 · 14 SEATS · 4 LEFT  ✦  THE DECISION DETOX — GOA, OCT 10 · ENROLLING NOW  ✦  L&F EXPERIENCE — CURATION OPEN ALL YEAR  ✦  [repeat]"
- Color: ink on paper-deep band
- Speed: very slow, 80s loop

### Section 2 — "We don't sell trips. We curate breaks."
- **Background:** `--paper` (default)
- **Layout:** Two columns, asymmetric (40/60).
- **Left column:**
  - Italic h3 (Newsreader italic, denim): "*we don't sell trips —*"
  - Display-2 (DM Serif Display): "we curate breaks"
  - Body-lg paragraph (~80 words): "Decision Fatigue is one of the most underrated exhaustions of modern life. CEOs, founders, managers, anyone carrying responsibility — we've quietly observed how taxing it is to constantly decide. So we tested something simple: what happens when you let someone else take the driver's seat for your break? Someone who understands pacing, intention, and experience. Someone who plans it for you, as you."
  - Small mono-sm signature: "— TANYA & KEERTHI, FOUNDERS"
- **Right column:** A 2x2 polaroid grid, each tilted differently, each with a hand-written caption. Photos: a hand journaling, a forest path, a meal table, a slow ferry ride.

### Section 3 — Upcoming Gatherings (carousel)
- **Background:** `--paper-deep` (light cream variant — visually delineates from hero/Section 2)
- **Section header:**
  - Eyebrow mono-sm: "GATHERINGS · 2026"
  - Display-2 italic (Newsreader italic): "*upcoming small-group trips*"
  - Sub: body-sm: "10–14 travellers per cohort. Hosted. All-inclusive."
- **Body:** Horizontal draggable carousel of Gathering cards (see §7.2). Shows next 4–6 upcoming Gatherings.
- **Footer of section:** Right-aligned "see all gatherings →" link in italic Newsreader, denim color, with hand-drawn arrow SVG.

### Section 4 — "Who we vibe with"
- **Direct homage to the Pinterest reference** (The Late Checkout). This section is THE design moment of the page.
- **Background:** `--paper` with extra-prominent grain texture
- **Layout:** Single centered block, max-width 1200px
- **Top:** Tilted polaroid (~5° rotation) of someone in a moment, slightly off to the left, with a piece of "tape" SVG holding it to the page
- **Headline:** Massive Caveat Brush handwritten text in clay, 160px desktop, slightly hand-feeling rotation:
  > "who we vibe with"
- **Body:** Newsreader italic, denim color, 32px (h3 size), centered, max-width 800px:
  > *creatives / heartbroken girlies / introverts / daydreamers / couples / mother & daughter / the burnt-out / the in-between*
- Each archetype is **clickable**, links to `/who-we-vibe-with#archetype-slug` and shows trips filtered for that archetype.
- **Below:** Italic Newsreader, body-sm, ink-soft: "*what kind of morning are you dreaming of?*"
- **Subtle interaction:** As cursor moves over each archetype word, the others fade to 40% opacity, 250ms.

### Section 5 — "We can plan the whole trip, or just the parts."
- **Background:** `--paper-deep`
- **Layout:** Two columns
- **Left:**
  - DM Serif Display uppercase, 56px: "WE CAN PLAN THE WHOLE TRIP, OR JUST THE PARTS YOU WANT TO REMEMBER FOREVER"
  - Italic Newsreader, denim, body: "*what we plan together*"
  - Hand-drawn arrow pointing right (SVG)
- **Right:** A horizontal row of polaroids, each labeled in Caveat Brush:
  - "complete itinerary design"
  - "local experiences & day plans"
  - "restaurant bookings"
  - "accommodation curation"
- Each polaroid is a clickable card — clicks lead to `/a-la-carte#slug`
- On hover: polaroid lifts 6px, tilt straightens, others fade to 70%

### Section 6 — The Decision Detox feature band
- **Background:** Full-bleed `--clay` (coral) — high-impact, used max once per page.
- **Text color:** `--paper` (cream) on coral
- **Headline (DM Serif Display, h1):** "Introducing — The Decision Detox"
- **Body:** Newsreader regular, ~80 words: "Our response to a world that asks too much of your mind. Five days where every decision has been made for you. Where to wake. What to eat. Where to walk. The only thing left for you is to be there."
- **CTA:** "Read about the Detox →" (paper outline button, paper text)
- **Layout:** Off-center text on left (60%), a single tall polaroid on right showing a quiet moment (someone alone on a beach, or a hand holding a cup).

### Section 7 — Reviews / "L&F & Reviewed"
- **Background:** `--paper`
- **Section header:** Eyebrow "REVIEWED — TRAVELLERS WHO'VE BEEN" + display-2 "*words from the road*"
- **Layout:** A draggable carousel of testimonial cards. Each card looks like a polaroid (photo of the traveller + handwritten quote underneath in Caveat Brush + name in mono-sm).
- **Card interaction:** Hover lifts and brings forward; others fade.
- 4–6 testimonials shown.

### Section 8 — Journal preview
- **Background:** `--paper-deep`
- **Section header:** Eyebrow "FROM THE JOURNAL" + display-2 italic "*notes & founder's takes*"
- **Layout:** Three latest journal articles in a row (desktop) / stacked (mobile).
- Each article card: image (treated), title (h4 DM Serif Display), excerpt (body-sm, 2 lines), date (mono-sm), "read →" link (italic Newsreader, denim).

### Section 9 — For Teams band
- **Background:** Full-bleed `--moss` (sage green), `--paper` text
- **Layout:** Centered, single column, max-width 800px
- **Eyebrow:** "FOR FOUNDERS, P&C LEADS, FOUNDER'S OFFICES"
- **Headline (DM Serif Display, h1, paper):** "Plan an offsite that doesn't feel like an offsite."
- **Body:** "We design custom retreats for teams of 8–30, in places your team will remember more than the slide deck."
- **CTA:** "Tell us about your team →" (clay button, paper text)
- A faint paper texture is preserved over the moss; bottom-right of band has a small wheat-colored hand-drawn squiggle.

### Section 10 — Newsletter band (above footer)
- See global footer section §6.3 for spec — appears at the bottom of every page.

---

## 6.5 Page: GATHERINGS `/gatherings`

The catalogue of upcoming small-group trips.

### Hero
- Eyebrow: "L&F GATHERINGS · 2026 · 2027"
- Headline (display-1, regular case, ink): "Small trips, with strangers who become friends."
- Sub (italic Newsreader, denim, body-lg): *"10 to 14 seats per cohort. Hosted by us. All-inclusive."*
- Filter strip below: pill-style filters for **Upcoming · Sold out · Themed (Decision Detox) · Solo-friendly · International**

### Body
- Grid of Gathering cards (3-up desktop, 1-up mobile). 24px gap.
- Each card: see §7.2 for spec.
- Empty state if filtered to zero: "No trips match — but the next cohort is always one we're planning. *Subscribe to know first.*"

### Bottom band
- "Don't see the right one?" → "Plan a personal Experience →" (link to /experience)

---

## 6.6 Page: SINGLE GATHERING `/gatherings/[slug]`

The conversion-critical page. Treat it as a long-form editorial — like reading a great magazine feature about the trip.

### Section 1 — Hero
- **Full-bleed photo** (60vh height), with treatment applied
- **Overlay:**
  - Top-left: small mono-sm eyebrow "L&F GATHERING · No. 07"
  - Bottom-left: location (display-1, paper) + dates (italic Newsreader, paper, denim color faded)
  - Bottom-right: "From INR 95,000 / person" (mono-sm, paper)
- **Below hero:** A single italic Newsreader line, denim, centered, max-width 800px: "*A week to rediscover travel differently.*"

### Section 2 — At a glance
- Three-column block, min-height 200px:
  - Column 1: Duration · "6 days, 5 nights"
  - Column 2: Cohort · "12 travellers maximum"
  - Column 3: Host · Photo (small polaroid) + name + 1-line bio
- Below: A row of small icon+label pairs: "Stay included · Most meals included · Local experiences included · Airport pickups included · Flights NOT included"

### Section 3 — The story (long-form)
- **Width:** 720px max (narrow)
- **Format:** Long editorial paragraphs in Newsreader, broken up by:
  - Italic pull-quotes (h3 italic, denim color)
  - In-line polaroids (left- or right-floated, with handwritten captions)
  - Section sub-heads (h3 italic Newsreader, denim)
- **Sample structure:**
  - "What this trip is" (~150 words)
  - "What a day looks like" (~200 words)
  - "Where you'll stay" (~150 words + photo)
  - "Who comes on these" (~100 words)
  - "Who shouldn't come" (~80 words — radical honesty)

### Section 4 — Itinerary
- **Day-by-day expand/collapse layout**
- Each day: small horizontal line, day number in mono-sm, day title in DM Serif Display h3, brief description body, expand to see hour-by-hour rough plan
- **Important copy framing:** "*This is a guide, not a contract. We hold space for serendipity.*" (italic, denim, mono caption above the itinerary)

### Section 5 — Photo gallery
- Polaroid scatter layout (not grid) — 8–12 photos, varied tilts, varied sizes
- Click to open lightbox
- Lightbox: dark cream overlay (--paper at 95%), photo centered, caption below in Caveat Brush, arrows to navigate

### Section 6 — What's included / not
- Two columns. Left "*included*" (in moss color italic Newsreader), bullet list. Right "*not included*" (in clay color italic), bullet list.
- Hand-drawn checkmarks (left) and crosses (right) instead of standard bullets.

### Section 7 — Booking band (sticky on scroll, becomes fixed bottom bar on mobile)
- Background: `--paper-deep`, slight elevation shadow
- Left: Trip name + dates + price
- Right: "Reserve your seat — INR 15,000 deposit" (clay button)
- Below button on mobile sheet: "Have a question? Write to us →" (small italic link)

### Section 8 — Reviews from this trip (if applicable)
- 2–3 testimonials in polaroid card format (carousel on mobile)

### Section 9 — Related Gatherings
- "If this isn't right, you might like —" + 3 related Gathering cards

---

## 6.7 Page: THE L&F EXPERIENCE `/experience`

The page that converts the inquiry-based custom-curation product.

### Section 1 — Hero
- Background: `--paper`
- Two-column. Left: text. Right: a layered stack of 3 polaroids with various trip moments.
- Eyebrow: "THE L&F EXPERIENCE"
- Headline: "*planned for you, as you*" (italic Newsreader, denim, h1 size)
- Body: "A trip designed entirely around how you travel. Where you want to go. How fast. With whom. We curate, you arrive."
- CTAs: "Tell us about your trip →" (primary, clay) + "Read past Experiences" (secondary, ink outline)

### Section 2 — How it works (4 steps)
- Visual: Four polaroids in a row, each numbered, each with a Caveat Brush caption:
  1. "*we have a chat*" — 30-min discovery call
  2. "*we sketch it*" — first proposal in 5 days
  3. "*we refine together*" — until it feels right
  4. "*you arrive*" — we handle the rest

### Section 3 — What we plan (the modular menu)
- Same as the home Section 5, but expanded
- Cards for each module: Itinerary, Stays, Experiences, Restaurants, Transport, Day Plans, Surprise Curation
- Each is a polaroid card with a description and starting price ("from INR 5,000")

### Section 4 — Past Experiences (case study cards)
- 6 cards, each a mini case study: traveller name (anonymized if needed), destination, length, 1-line description, link to full case study (single journal article)

### Section 5 — Pricing transparency
- Display-2 italic: "*how we charge*"
- Two-column body explaining the model: "*we charge a curation fee, then book everything for you at cost — no markups*" OR "*we offer all-in package pricing if you prefer*"
- Range: "Curation fees from INR 25,000. Trip costs vary by destination."

### Section 6 — FAQ (5–7 questions)
- Expand/collapse format. Questions in DM Serif Display h4. Answers in Newsreader.

### Section 7 — Inquiry CTA band
- Full-bleed clay band
- "Ready to think about your next trip?" + "Tell us about it →" button

---

## 6.8 Page: DECISION DETOX `/decision-detox`

A landing page for the signature themed product. Treat as a mini-microsite.

### Section 1 — Hero
- Full-bleed photo (low-stim landscape — empty beach, foggy hill, single chair)
- Overlay text, centered:
  - Eyebrow mono-sm paper: "A LOST & FOUND GATHERING"
  - Headline (display-1 paper): "The Decision Detox"
  - Sub italic Newsreader paper: "*for the burnt-out and the beautifully tired*"

### Section 2 — The premise (long-form)
- Reuse and expand the Insta caption verbatim:
  > Decision Fatigue is one of the most underrated exhaustions of modern life. CEOs, founders, managers, and anyone carrying responsibility don't always realise how taxing it is to constantly decide. We've been quietly observing this pattern for a while. And we tested something simple — what happens when you truly let someone else take the driver's seat for your break? In a thoughtful, curated way, where someone who understands pacing, intention, and experience plans it for you... as you. Introducing the Decision Detox. Our response to a world that asks too much of your mind.

### Section 3 — What's removed from your day
- A list, beautifully typeset:
  - "no decisions about where to eat —"
  - "no decisions about what to do —"
  - "no decisions about how to get there —"
  - "no decisions about who to talk to —"
  - "you wake up. you arrive. you stay."
- Set in italic Newsreader, h3 size, denim color, left-aligned, generous line-height (1.6)

### Section 4 — A day in the Detox
- Hour-by-hour sample day (body Newsreader, narrow column 720px)
- Includes: morning silence, slow breakfast, optional walk, lunch with the cohort, afternoon free time (no plans), sunset something, dinner, journaling

### Section 5 — Upcoming cohorts (next 2–3 dates)
- Compact Gathering cards specific to Decision Detox runs

### Section 6 — Reservation CTA band
- Same booking flow as a Gathering

---

## 6.9 Page: A LA CARTE `/a-la-carte`

The light-touch entry product.

### Sections:
1. Hero — "*the parts you want to remember forever*"
2. Service grid (polaroid cards) — Itinerary Design, Restaurant Bookings, Day Plans, Local Experiences, Stay Curation, Transport
3. Each service is expandable inline — shows what's included, starting price, sample deliverable
4. CTA: "Get in touch →" (form modal or `/contact`)

---

## 6.10 Page: DESTINATIONS `/destinations`

A geographic browsing page. Lower priority than Gatherings but useful for SEO and discoverability.

### Layout
- Hero: simple — "*places we curate*"
- Below: a beautiful destinations grid. Each tile is a tilted polaroid with:
  - Photo of destination
  - Caveat Brush caption with destination name ("Sri Lanka", "Spiti", "Goa", "Wayanad", "Dubai", "Majuli")
  - Number of trips currently offered there (mono-sm)
- Click → `/destinations/[slug]`

### Single destination page
- Hero photo + intro paragraph (the L&F point of view on this place)
- "Why we keep coming back" — italic editorial paragraph
- Upcoming Gatherings here
- Sample custom Experience itineraries here
- Photo gallery (polaroid scatter)

---

## 6.11 Page: WHO WE VIBE WITH `/who-we-vibe-with`

A "find your trip" filter page based on emotional archetypes.

### Layout
- Hero: the same massive Caveat Brush "who we vibe with" treatment from the home page, but bigger
- Below: archetype cards in a grid — each with a polaroid photo, name (italic), and short description
  - "Heartbroken girlies" — for the fresh wound + the slow heal
  - "Career-growth-SZN survivors" — for the in-betweens
  - "Introverts who want company sometimes" — small group, quiet
  - "Daydreamers" — for the imaginative wanderers
  - "Couples who don't want a Maldives package" — slow + together
  - "Mother & daughter" — generational travel
  - "Solo-but-not-alone" — first-time solo
  - "Founders & decision-makers" — the Decision Detox cohort
- Click an archetype → filtered Gatherings + Experiences listing

---

## 6.12 Page: JOURNAL `/journal`

Editorial blog. The slow content asset that compounds.

### Hero
- Title: "the journal" in italic Newsreader, h1, denim
- Sub: "*letters from the road, founder's takes, slow reads*"

### Body
- Featured article (large): hero image, title h2, excerpt, "read →"
- Below: article grid (3-column desktop), each with photo + title + excerpt + date + read time
- Filter pills above grid: "Founder's Takes · Slow Reads · From the Road · Decision Detox · Curator Picks"
- Pagination at bottom: simple "← previous · next →" in italic

### Single article `/journal/[slug]`
- Hero: large photo + title (display-1) + author + date + read time
- Body: long-form Newsreader, max-width 720px
- Pull-quotes in h3 italic denim
- Inline polaroids
- End-of-article: subscribe-to-journal CTA + "you might also like —" + 3 related articles

---

## 6.13 Page: OUR STORY `/our-story`

The founder/team page.

### Sections
1. Hero: a large photo of Tanya & team. Caveat Brush caption: "*hi, we're tanya & keerthi*"
2. The Why (~250 words): why Lost & Found exists. Tone: confessional, founder voice.
3. The team: each team member as a polaroid card with: photo, name, role (italic), 80-word bio, a quirky line ("currently reading:" or "favourite slow place:")
4. Philosophy: "*things we believe*" — 8–10 short italic-Newsreader principles
5. Press: small grid of publication logos with quotes (if applicable)
6. CTA: "Browse Gatherings" + newsletter

---

## 6.14 Page: REVIEWS `/reviews`

A dedicated page for "L&F & Reviewed" — beautifully presented testimonials.

### Layout
- Hero: "*L&F & Reviewed*" in italic Newsreader, h1, denim
- Body: A scattered, polaroid-collage layout of testimonials
- Each testimonial: photo of traveller (treated), handwritten quote in Caveat Brush, name + trip in mono-sm
- Filter: "Solo · Couple · Group · Custom · Decision Detox"
- Click a testimonial to read the full review

---

## 6.15 Page: CONTACT `/contact`

Simple, warm, low-friction.

### Layout
- Single column, narrow (720px max)
- Hero: "*say hi*" in Caveat Brush, clay
- Body intro: "Tell us where you are, what's going on, what you're hoping for. We read everything ourselves. We usually reply within 24 hours."
- Form fields:
  - Name (text)
  - Email (text)
  - What brings you here? (radio: Reserving a Gathering / Planning an Experience / Team retreat / Just saying hi / Press)
  - Tell us more (textarea, placeholder: "as much or as little as you like — even three lines is enough")
  - Where are you based? (text, optional)
- Submit button: "send →" (clay, italic Newsreader)
- Below form: alternative contact — "or write to us at hello@lostandfoundtravel.com" + small social icons

---

## 6.16 Page: TEAMS `/teams`

The B2B page.

### Sections
1. Hero — "*for founders, P&C leads, founder's offices*" + headline "Plan a retreat your team will actually remember."
2. Two-column case study grid (anonymized if needed): "[Company X], 22 people, Goa, 4 days" + 1-line outcome
3. "What we do differently" — list of 5–6 differentiators
4. Sample retreat structures: 3-day / 4-day / 5-day, with rough day flow for each
5. Pricing transparency: "Per-person costs typically INR 18,000–28,000 / night, all-in. We invoice cleanly. We work with founder's offices, P&C teams, and Founder's Office directly."
6. Past clients (logos, anonymized OK)
7. Inquiry form with team-specific fields:
   - Company name
   - Your role
   - Team size
   - Approx. budget per person
   - Preferred timing
   - Anything specific?

---

## 6.17 Page: 404 `/404`

Make this a moment.

### Layout
- A polaroid in the center of an otherwise empty `--paper` page, showing a literal "lost" moment — someone standing at a fork in a path, or looking at a wrong turn
- Caveat Brush caption underneath: "*well, this got lost.*"
- Below: "the page you wanted isn't here. but here's where you might want to go —"
- Three buttons: "Home", "Gatherings", "Journal"

---

# 7. Component library

## 7.1 Button

**Variants:**
- `primary` — clay fill, paper text. Hover: clay-deep fill, slight upward translate (-2px), 250ms ease.
- `secondary` — ink outline 1.5px, ink text, paper background. Hover: ink fill, paper text.
- `ghost` — no border, ink text. Hover: small underline draws in (handwritten-style SVG underline).
- `link-italic` — Newsreader italic, denim color, with a hand-drawn arrow SVG. Hover: arrow translates 4px right, 250ms.

**Sizing:**
- `lg`: 56px tall, 24px horizontal padding, body-lg
- `md`: 44px tall, 20px horizontal padding, body
- `sm`: 36px tall, 16px horizontal padding, body-sm

**Border radius:** 0 (sharp). This brand is editorial, not consumer-app.

## 7.2 Gathering Card

The most important card on the site.

**Anatomy:**
- Container: `--paper-warm` background, slight shadow (`0 8px 24px rgba(31,29,26,0.06)`), no border radius, padding 0
- Top: Photo (240px tall on desktop, 200px mobile), edge-to-edge, treated
- Inside content area (24px padding):
  - Eyebrow (mono-sm uppercase, ink-mute): "L&F GATHERING · No. 07"
  - Title (DM Serif Display h4, ink): "Ahangama, Sri Lanka"
  - Italic dates (Newsreader italic body-sm, denim): "*Aug 20 – 26, 2026*"
  - Short description (body-sm, ink-soft, 2 lines max with ellipsis): "A week to rediscover travel differently — by the sea, with twelve quiet souls."
  - Bottom row: "From INR 95,000" (mono-sm) + "4 of 14 seats remaining" (mono-sm clay) + arrow icon
- Hover: card lifts 6px, photo scales 1.03, others in row fade to 70% opacity

**Variant:** Sold-out card — overlay paper-deep at 60% with handwritten "*sold out*" Caveat Brush across the photo at -8° rotation.

## 7.3 Polaroid Card

A reusable photo treatment used everywhere.

**Anatomy:**
- White/cream frame: 16px top + sides, 56px bottom (caption space)
- Background: `--paper-warm`
- Slight shadow: `0 12px 28px rgba(31,29,26,0.10)`
- Inside frame: photo, treated, fills frame minus padding
- Bottom (caption space): Caveat Brush text, ink color, ~20px size
- Tilt: random between -3° and +3° (set via inline style or CSS variable per instance)
- On hover (where interactive): tilt straightens to 0°, lifts 4px, 600ms ease

**Sizes:** sm (200px wide), md (320px), lg (480px)

## 7.4 Testimonial Card

Same as Polaroid Card structure, but instead of a single caption, has:
- Photo at top
- Below photo: italic Newsreader 1-3 line quote
- Below quote: traveller name + trip (mono-sm)
- Star rating optional (small hand-drawn star icons)

## 7.5 Section header

Standard pattern across pages:
- Eyebrow (mono-sm uppercase, +0.15em letter-spacing, ink-mute)
- Main heading (display-2 OR italic Newsreader h2, depending on tone)
- Optional sub (body-sm, ink-soft, max-width 720px)

Vertical rhythm: 16px between eyebrow and heading; 24px between heading and sub.

## 7.6 Form input

- Underline-style (no boxes). Just a 1.5px bottom border in `--ink`, 16px vertical padding.
- Label sits above in mono-sm uppercase
- Focus state: bottom border becomes clay, animates from left to right (400ms)
- Error state: bottom border clay, error message in italic Newsreader denim color below

## 7.7 Marquee strip

- Horizontal scrolling text, paper-deep background, ink text in mono-sm uppercase
- Items separated by small "✦" (sparkle) characters
- Speed: very slow (80s per loop)
- Pauses on hover

## 7.8 Modal / Lightbox

- Full-screen overlay, `--paper` at 96% opacity (not black — this is brand-coherent)
- Close button: top-right, hand-drawn × icon
- Content centered, max-width 800px
- Slow fade-in (500ms)

## 7.9 Newsletter inline form

- Single horizontal row: email input + "subscribe →" button
- On the moss-band footer version: input has paper underline, button is clay fill
- Success state: form replaces with handwritten "*we'll write to you soon ✦*" in Caveat Brush

## 7.10 Filter pill

- Small pill, no background by default, 1.5px ink border, 8px vertical / 14px horizontal padding, mono-sm uppercase text
- Active state: clay fill, paper text
- Hover: ink fill, paper text

## 7.11 Hand-drawn SVG components

These are reusable inline SVGs. Anti Gravity should generate or source these:

- `<HandArrow />` — a slightly imperfect right arrow, ~40px wide
- `<HandUnderline />` — a slightly wavy underline, animatable (draws in left-to-right)
- `<HandCircle />` — a circle scribbled around an emphasis word
- `<HandSquiggle />` — a horizontal squiggle for section dividers
- `<HandCheck />` and `<HandCross />` — for included/not-included lists
- `<TapeMark />` — a translucent tape graphic, 80px wide

Each accepts a `color` prop (defaults to currentColor). Animations triggered via Framer Motion when in view.

---

# 8. Motion & micro-interactions catalogue

Motion is part of the brand. The site moves slowly because the brand stands for slowness.

## 8.1 Page-level

- **Smooth scroll** via [Lenis](https://lenis.studiofreight.com/) — default settings, ease 0.08, duration 1.2.
- **Page transitions** — cross-fade with 16px upward translate, 600ms.
- **Initial page load** — paper-grain texture fades in over 800ms, then content staggers in (80ms apart).

## 8.2 Scroll-triggered

- **Headline reveal** — words fade up with 60ms stagger, 600ms duration, on entering viewport.
- **Polaroids enter** — fade + slight rotation (e.g., from 8° back to natural -3°), 800ms ease.
- **Hand-drawn underlines draw in** — SVG path animates from 0 to 1 stroke length, 600ms.
- **Section divider squiggles draw in** when crossing viewport.
- **Numbers count up** (in stats blocks) — over 1.5s with ease-out.

## 8.3 Hover

- **Buttons** — translate up 2px + slight darkening, 250ms.
- **Polaroid cards** — straighten + lift 6px + others in row fade to 70%.
- **Nav links** — clay underline draws in left-to-right, 300ms.
- **Photo galleries** — image scales 1.03, others fade.
- **Magnetic CTA** — primary CTAs subtly attract the cursor (3px pull) within 80px radius. Use [react-magnetic-button](https://www.npmjs.com/package/react-magnetic-button) or hand-roll with `gsap.to`.

## 8.4 Cursor behavior

- Default: 12px ring (ink) + paper fill.
- On interactive elements: expand to 56px circle, paper background, ink text inside ("View", "Reserve", etc.).
- On draggable carousels: cursor shows "← drag →".
- Cursor follows with `lerp(0.2)` for smooth tail.
- Hidden on mobile (touch).

## 8.5 Carousel interactions

- **Draggable** with mouse + touch
- **Drag indicator** — at first scroll-into-view, the carousel auto-nudges 24px right then back, hinting it's draggable (one-time).
- **Pagination dots** below — clay-filled when active, ink-outline when not.

## 8.6 Form micro-interactions

- **Focus state** — bottom border draws from left, clay color, 400ms.
- **Submit success** — form fades, replaced with handwritten Caveat Brush message, 500ms.
- **Error shake** — gentle 6px horizontal shake, 200ms.

## 8.7 Newsletter band

- On scroll into view, the headline draws (hand-underline animates), 600ms after section is 50% in viewport.

## 8.8 Hero handwriting reveal

The hero's Caveat Brush handwritten word ("a long exhale") should *draw itself in* — using SVG path animation. The word is rendered as an SVG (not text) for this animation, with `stroke-dasharray` animated from full length to 0, revealing the strokes left-to-right over 1200ms. Plays once on first load, then static on subsequent visits within the session.

## 8.9 Reduce motion

Always respect `prefers-reduced-motion`. When set:
- Disable Lenis smooth scroll
- Disable all entry animations (fade-in only, max 200ms)
- Disable cursor follow (use system cursor)
- Disable parallax

---

# 9. Voice, tone & ready-to-ship copy

This section gives Anti Gravity drop-in copy for every page so it doesn't have to write its own.

## 9.1 Home — full copy

```
[Eyebrow]
PERSONAL TRAVEL CURATORS · EST. 2024

[Hero headline, line 1, regular case serif]
Travel that feels like

[Hero headline, line 2, handwritten clay script]
a long exhale.

[Sub-headline, italic serif denim]
we plan slow, considered trips for people who've forgotten how to stop. you don't decide where to eat. you don't decide what to do. you arrive — and you remember.

[CTA primary]
Browse upcoming Gatherings

[CTA secondary]
Plan a personal Experience

[Marquee]
NEXT GATHERING — AHANGAMA, AUG 20 · 14 SEATS · 4 LEFT  ✦  THE DECISION DETOX — GOA, OCT 10 · ENROLLING NOW  ✦  L&F EXPERIENCE — CURATION OPEN ALL YEAR  ✦
```

```
[Section 2 eyebrow / italic line]
we don't sell trips —

[Section 2 headline]
we curate breaks

[Body, ~80 words]
Decision Fatigue is one of the most underrated exhaustions of modern life. CEOs, founders, managers, anyone carrying responsibility — we've quietly observed how taxing it is to constantly decide. So we tested something simple. What happens when you let someone else take the driver's seat for your break? In a thoughtful, curated way, where someone who understands pacing, intention, and experience plans it for you, as you. We've been doing it ever since.

[Signature]
— TANYA & KEERTHI, FOUNDERS
```

```
[Section 3 eyebrow]
GATHERINGS · 2026

[Section 3 italic headline]
upcoming small-group trips

[Section 3 sub]
10–14 travellers per cohort. Hosted. All-inclusive.
```

```
[Section 4 — handwritten massive clay headline]
who we vibe with

[Section 4 italic body, denim]
creatives / heartbroken girlies / introverts / daydreamers / couples / mother & daughter / the burnt-out / the in-between

[Section 4 italic caption]
what kind of morning are you dreaming of?
```

```
[Section 5 headline, all-caps serif]
WE CAN PLAN THE WHOLE TRIP, OR JUST THE PARTS YOU WANT TO REMEMBER FOREVER

[Section 5 italic caption]
what we plan together

[Polaroid 1 caption (Caveat Brush)]
complete itinerary design

[Polaroid 2 caption]
local experiences & day plans

[Polaroid 3 caption]
restaurant bookings

[Polaroid 4 caption]
accommodation curation
```

```
[Decision Detox band — clay background, paper text]

[Eyebrow]
INTRODUCING

[Headline]
The Decision Detox

[Body, ~70 words]
Our response to a world that asks too much of your mind. Five days where every decision has been made for you. Where to wake. What to eat. Where to walk. The only thing left for you is to be there.

[CTA]
Read about the Detox →
```

```
[For Teams band — moss background, paper text]

[Eyebrow]
FOR FOUNDERS, P&C LEADS, FOUNDER'S OFFICES

[Headline]
Plan an offsite that doesn't feel like an offsite.

[Body]
We design custom retreats for teams of 8–30, in places your team will remember more than the slide deck.

[CTA]
Tell us about your team →
```

```
[Newsletter band — moss background]

[Headline italic]
slow letters, once a fortnight.

[Sub]
No promotions. No urgency. Just a thoughtful note from the road.

[Input placeholder]
your email

[Button]
subscribe →

[Caption below input]
We won't share your email. We'll write to you when we have something worth saying.
```

## 9.2 Single Gathering — copy template

```
[Eyebrow]
L&F GATHERING · No. {NUMBER}

[Location]
{LOCATION_NAME}

[Dates]
{DATES}

[Italic tagline]
{ONE_LINE_TAGLINE} (e.g., "A week to rediscover travel differently.")

[At a glance — duration]
{DAYS} days, {NIGHTS} nights

[At a glance — cohort]
{MIN}–{MAX} travellers maximum

[At a glance — host]
Hosted by {HOST_NAME}

[Inclusions row]
Stay included · Most meals included · Local experiences included · Airport pickups included · Flights NOT included

[Story sections — to be written per trip]
"What this trip is" · "What a day looks like" · "Where you'll stay" · "Who comes on these" · "Who shouldn't come"

[Itinerary preface]
This is a guide, not a contract. We hold space for serendipity.

[Booking band]
Reserve your seat — INR {DEPOSIT} deposit · balance due 21 days before departure
```

## 9.3 Voice cheat sheet for Anti Gravity

When generating any new copy, follow these rules:

1. **Italic serif denim lines** for emotional / quoted moments. Always lower-case.
2. **DM Serif Display uppercase** for impact. Use for slogans, brand statements.
3. **Caveat Brush in clay** for handwritten emphasis — only one or two words at a time, never full sentences.
4. **Mono uppercase** for eyebrows, dates, meta — tight, factual, +0.1em letter-spacing.
5. **Newsreader regular** for body. Generous line-height (1.6).
6. **Use ✦ (sparkle U+2726)** as the L&F separator in marquees and lists.
7. **Always specific.** Replace any generic ("amazing trip") with specific ("six mornings of Sri Lankan rain and one afternoon of nothing planned").

---

# 10. Tech stack & architecture

## 10.1 Recommended stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router) + TypeScript** | Best-in-class for editorial sites, ISR for CMS content, great image perf, App Router gives us streaming + RSC. |
| Styling | **Tailwind CSS v4** + CSS variables for tokens | Speed of build + design system enforcement via tokens. |
| Animation | **Motion (formerly Framer Motion) v11** + GSAP for complex sequences + **Lenis** for smooth scroll | Motion handles 95% of cases. GSAP for hero handwriting reveal and complex scroll-triggered sequences. |
| CMS | **Sanity** (preferred) or **Payload CMS** | Sanity has the best authoring UX for editorial brands; Payload is self-hosted/free. Both support structured content. |
| Forms | **React Hook Form + Zod** for client | Type-safe, great UX. |
| Email | **Resend** | Best DX for transactional + newsletter; supports React Email templates. |
| Newsletter | **Resend Audiences** OR **Buttondown** OR **ConvertKit** | If sending only one letter per fortnight, Buttondown is most aligned with brand (indie writer feel). |
| Payments (deposits) | **Razorpay** (primary, INR) + **Stripe** (USD international) | Razorpay is mandatory for India; Stripe handles diaspora payments. |
| Hosting | **Vercel** | Best Next.js perf; free tier sufficient at launch. |
| Database (bookings, inquiries) | **Neon Postgres** (serverless) or **Supabase** | Serverless, free at launch volumes. |
| ORM | **Drizzle** | Modern, TypeScript-native, fast. |
| Analytics | **Plausible** (privacy-first) + **PostHog** (events + funnels) | Plausible for brand-coherent simplicity. PostHog for funnel analysis. |
| Image storage | **Sanity assets** OR **Cloudinary** | Both handle treatment + responsive serving. |
| Search (future) | **Algolia** or **Pagefind** (static) | Defer to Phase 2. |
| Deployment | **Vercel + GitHub** with preview deployments | Standard. |

## 10.2 Why this stack matches the brand

- **Sanity + Next.js**: Writers can publish journal entries and Gatherings without dev help. The site is editorial-first; the CMS workflow must support that.
- **Razorpay**: Required for INR. Sapan's primary market is India.
- **Resend**: When the newsletter is part of the brand voice ("slow letters, once a fortnight"), the writing tool matters. Buttondown is the most beautiful choice but has lower scale; Resend if growth is anticipated.
- **Lenis + Motion**: Achieves the slow, intentional motion required without performance hits.

## 10.3 Repository structure

```
/lostandfoundtravel
├── app/                          (Next.js App Router)
│   ├── (marketing)/              (route group for marketing pages)
│   │   ├── page.tsx              (home)
│   │   ├── gatherings/
│   │   ├── experience/
│   │   ├── decision-detox/
│   │   ├── a-la-carte/
│   │   ├── destinations/
│   │   ├── who-we-vibe-with/
│   │   ├── journal/
│   │   ├── our-story/
│   │   ├── reviews/
│   │   ├── teams/
│   │   ├── contact/
│   │   └── 404.tsx
│   ├── api/
│   │   ├── inquiry/route.ts      (POST inquiry submissions)
│   │   ├── reserve/route.ts      (POST seat reservations + Razorpay order)
│   │   ├── webhooks/razorpay/
│   │   └── newsletter/route.ts
│   ├── layout.tsx                (root layout, fonts, paper texture)
│   └── globals.css               (tokens, paper texture, base styles)
├── components/
│   ├── ui/                       (button, input, etc.)
│   ├── cards/                    (gathering card, polaroid, testimonial)
│   ├── sections/                 (hero, who-we-vibe-with, etc.)
│   ├── motion/                   (HandUnderline, magnetic CTA, etc.)
│   └── illustrations/            (hand-drawn SVGs)
├── lib/
│   ├── sanity.ts                 (client + queries)
│   ├── razorpay.ts               (server-side Razorpay)
│   ├── resend.ts                 (email client)
│   └── utils.ts
├── content/                      (static content fallbacks, copy constants)
├── public/
│   ├── textures/paper-grain.png
│   ├── fonts/
│   └── illustrations/
├── styles/
│   └── tokens.css                (CSS variables)
├── sanity/                       (Sanity schema definitions)
│   └── schemas/
├── drizzle/                      (DB schema)
├── .env.local
└── README.md
```

## 10.4 Environment variables

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_READ_TOKEN=

# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
NEXT_PUBLIC_RAZORPAY_KEY_ID=

# Stripe (international)
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Resend
RESEND_API_KEY=
NEWSLETTER_AUDIENCE_ID=

# Database
DATABASE_URL=

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=

# Site
NEXT_PUBLIC_SITE_URL=https://lostandfoundtravel.com
ADMIN_NOTIFICATION_EMAIL=hello@lostandfoundtravel.com
```

---

# 11. Data models & CMS schema

## 11.1 Sanity schemas

### `gathering`
```ts
{
  name: 'gathering',
  fields: [
    { name: 'number', type: 'string' }, // "07"
    { name: 'title', type: 'string' }, // "Ahangama, Sri Lanka"
    { name: 'slug', type: 'slug', source: 'title' },
    { name: 'destination', type: 'reference', to: 'destination' },
    { name: 'startDate', type: 'date' },
    { name: 'endDate', type: 'date' },
    { name: 'days', type: 'number' },
    { name: 'nights', type: 'number' },
    { name: 'capacityMax', type: 'number' },
    { name: 'capacityRemaining', type: 'number' },
    { name: 'priceFrom', type: 'number' }, // INR
    { name: 'priceFull', type: 'number' },
    { name: 'depositAmount', type: 'number' }, // default 15000
    { name: 'host', type: 'reference', to: 'teamMember' },
    { name: 'tagline', type: 'string' }, // "A week to rediscover travel differently"
    { name: 'shortDescription', type: 'text' }, // for cards
    { name: 'isThemedDecisionDetox', type: 'boolean' },
    { name: 'archetypes', type: 'array', of: 'reference', to: 'archetype' },
    { name: 'hero', type: 'image' },
    { name: 'gallery', type: 'array', of: 'image' },
    { name: 'storyBlocks', type: 'array', of: ['block', 'image', 'pullQuote'] },
    { name: 'itineraryDays', type: 'array', of: 'itineraryDay' },
    { name: 'whatsIncluded', type: 'array', of: 'string' },
    { name: 'whatsNotIncluded', type: 'array', of: 'string' },
    { name: 'whoShouldComeNot', type: 'text' }, // "Who shouldn't come" radical honesty section
    { name: 'testimonials', type: 'array', of: 'reference', to: 'testimonial' },
    { name: 'status', type: 'string', options: { list: ['draft', 'enrolling', 'sold_out', 'completed'] } },
  ]
}
```

### `destination`
```ts
{
  name: 'destination',
  fields: [
    { name: 'title', type: 'string' }, // "Sri Lanka"
    { name: 'slug', type: 'slug' },
    { name: 'country', type: 'string' },
    { name: 'region', type: 'string' },
    { name: 'introParagraph', type: 'text' },
    { name: 'whyWeKeepComingBack', type: 'text' }, // editorial "POV" paragraph
    { name: 'hero', type: 'image' },
    { name: 'gallery', type: 'array', of: 'image' },
    { name: 'currencyLocal', type: 'string' },
  ]
}
```

### `teamMember`
```ts
{
  name: 'teamMember',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'role', type: 'string' }, // "Co-founder & Curator"
    { name: 'photo', type: 'image' },
    { name: 'bio', type: 'text' }, // ~80 words
    { name: 'currentlyReading', type: 'string' },
    { name: 'favouriteSlowPlace', type: 'string' },
  ]
}
```

### `archetype` (Who We Vibe With)
```ts
{
  name: 'archetype',
  fields: [
    { name: 'name', type: 'string' }, // "Heartbroken girlies"
    { name: 'slug', type: 'slug' },
    { name: 'shortDescription', type: 'string' }, // "for the fresh wound + the slow heal"
    { name: 'longDescription', type: 'text' },
    { name: 'photo', type: 'image' },
  ]
}
```

### `testimonial`
```ts
{
  name: 'testimonial',
  fields: [
    { name: 'travellerName', type: 'string' },
    { name: 'travellerPhoto', type: 'image' },
    { name: 'tripReference', type: 'string' }, // "Ahangama 2026"
    { name: 'quote', type: 'text' }, // 1-3 lines
    { name: 'fullReview', type: 'text' }, // longer
    { name: 'tripType', type: 'string', options: { list: ['gathering', 'experience', 'detox'] } },
    { name: 'rating', type: 'number' }, // optional
    { name: 'featured', type: 'boolean' },
  ]
}
```

### `journalArticle`
```ts
{
  name: 'journalArticle',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'category', type: 'string', options: { list: ['founders-take', 'slow-read', 'from-the-road', 'decision-detox', 'curator-pick'] } },
    { name: 'author', type: 'reference', to: 'teamMember' },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'readTime', type: 'number' },
    { name: 'hero', type: 'image' },
    { name: 'excerpt', type: 'text' },
    { name: 'body', type: 'array', of: ['block', 'image', 'pullQuote', 'polaroidGroup'] },
    { name: 'relatedArticles', type: 'array', of: 'reference', to: 'journalArticle' },
    { name: 'featured', type: 'boolean' },
  ]
}
```

### `aLaCarteService`
```ts
{
  name: 'aLaCarteService',
  fields: [
    { name: 'title', type: 'string' }, // "Itinerary design"
    { name: 'slug', type: 'slug' },
    { name: 'description', type: 'text' },
    { name: 'priceFrom', type: 'number' },
    { name: 'whatsIncluded', type: 'array', of: 'string' },
    { name: 'sampleDeliverable', type: 'image' },
    { name: 'order', type: 'number' },
  ]
}
```

### `siteSettings` (singleton)
```ts
{
  name: 'siteSettings',
  fields: [
    { name: 'usdToInrRate', type: 'number' }, // updated monthly
    { name: 'marqueeItems', type: 'array', of: 'string' },
    { name: 'pressLogos', type: 'array', of: { logo: 'image', url: 'url', quote: 'text' } },
    { name: 'foundersOfficeEmail', type: 'string' },
    { name: 'generalEmail', type: 'string' },
  ]
}
```

## 11.2 Database schema (Drizzle / Postgres)

```ts
// inquiries
export const inquiries = pgTable('inquiries', {
  id: uuid('id').primaryKey().defaultRandom(),
  type: text('type').notNull(), // 'gathering' | 'experience' | 'team' | 'general' | 'press'
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  metadata: jsonb('metadata'), // archetype, team_size, budget, dates, gathering_ref etc.
  status: text('status').default('new'), // new | contacted | won | lost
  createdAt: timestamp('created_at').defaultNow(),
});

// reservations
export const reservations = pgTable('reservations', {
  id: uuid('id').primaryKey().defaultRandom(),
  gatheringId: text('gathering_id').notNull(), // sanity ref
  travellerName: text('traveller_name').notNull(),
  travellerEmail: text('traveller_email').notNull(),
  travellerPhone: text('traveller_phone'),
  depositAmount: integer('deposit_amount').notNull(),
  totalAmount: integer('total_amount').notNull(),
  currency: text('currency').default('INR'),
  razorpayOrderId: text('razorpay_order_id'),
  razorpayPaymentId: text('razorpay_payment_id'),
  paymentStatus: text('payment_status').default('pending'), // pending | paid | refunded | cancelled
  balanceDueDate: timestamp('balance_due_date'),
  metadata: jsonb('metadata'), // dietary, emergency contact, etc.
  createdAt: timestamp('created_at').defaultNow(),
});

// newsletter_subscribers
export const newsletterSubscribers = pgTable('newsletter_subscribers', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  source: text('source'), // 'home_footer' | 'journal_article' | 'exit_intent'
  archetype: text('archetype'), // optional self-identified
  resendContactId: text('resend_contact_id'),
  subscribedAt: timestamp('subscribed_at').defaultNow(),
  unsubscribedAt: timestamp('unsubscribed_at'),
});
```

---

# 12. Integrations

## 12.1 Razorpay (deposits, INR)

### Flow
1. User clicks "Reserve your seat" on Gathering page
2. Booking modal opens — collects name, email, phone, dietary notes, emergency contact
3. On submit, `/api/reserve` is called
4. Server creates Razorpay order for deposit amount (15,000 INR), inserts pending reservation row
5. Razorpay Checkout is launched (`razorpay.com/docs/payments/payment-gateway/web-integration/standard/`)
6. On success, Razorpay webhook → `/api/webhooks/razorpay`
7. Server updates reservation to `paid`, decrements `capacityRemaining` in Sanity, sends confirmation email via Resend, sends admin notification email
8. User is redirected to `/thanks?reservation_id=...`

### Failure handling
- Webhook retry logic
- Idempotent reservation update (use Razorpay payment ID as idempotency key)

## 12.2 Stripe (international, USD)

For diaspora travellers, offer USD deposit via Stripe. Same flow, alternate payment endpoint. Toggled by user's currency selection or geo-detection.

## 12.3 Resend (transactional + newsletter)

### Transactional emails (built with React Email templates)
- **Reservation confirmation** — to traveller, with trip summary, balance due date, host contact
- **Reservation admin notification** — to hello@lostandfoundtravel.com
- **Inquiry confirmation** — to inquirer ("we read this. we'll write back within 24 hours.")
- **Inquiry admin notification** — to hello@lostandfoundtravel.com (with all inquiry metadata)
- **Newsletter welcome** — sent immediately on signup ("welcome to slow letters")
- **Balance reminder** — sent 25 days before trip start (cron via Vercel)

### Newsletter
- Resend Audiences for list management
- Manual broadcast send by Sapan via Resend dashboard or a custom admin route
- Templates use the same paper-grain, Newsreader italic, Caveat Brush DNA — built in React Email

## 12.4 Form handling

All forms route through Next.js Route Handlers:
- `/api/inquiry` — POST, validates with Zod, saves to DB, sends 2 emails (user + admin)
- `/api/newsletter` — POST, validates email, adds to Resend Audience, saves to DB
- `/api/reserve` — POST, validates, creates Razorpay order, returns checkout config

All forms use **React Hook Form + Zod** for client-side validation. Server validation duplicates Zod schemas.

## 12.5 Plausible & PostHog analytics

- **Plausible** — installed as `<Script>` in root layout; tracks pageviews, basic engagement
- **PostHog** — installed via `posthog-js` provider; tracks events
- **Key events:**
  - `cta_clicked` (with `cta_label` and `page_path`)
  - `gathering_card_clicked`
  - `reserve_started`
  - `reserve_completed`
  - `inquiry_submitted` (with `inquiry_type`)
  - `newsletter_subscribed` (with `source`)
  - `archetype_clicked`
  - `journal_article_read` (with scroll depth ≥ 75%)

## 12.6 Sanity webhook

When a Gathering is published or updated, trigger ISR revalidation of:
- `/gatherings`
- `/gatherings/[slug]`
- Home (which lists upcoming gatherings)

---

# 13. SEO & analytics tracking plan

## 13.1 SEO foundation

- **Static metadata** per page via Next.js `generateMetadata()`
- **Open Graph images** auto-generated per page using Next.js `opengraph-image.tsx` — uses paper-grain background + DM Serif headline + Caveat Brush accent (consistent with site design)
- **Structured data:**
  - Organization schema on home (`schema.org/TravelAgency`)
  - Trip schema on Gathering pages (`schema.org/TouristTrip`)
  - Article schema on Journal articles
  - BreadcrumbList everywhere
- **XML sitemap** — `app/sitemap.ts` generates dynamically from CMS
- **Robots.txt** — allow all, link to sitemap

## 13.2 Target keyword themes (brand SEO)

These are intentionally specific, brand-fit keywords — not high-volume, high-intent:

- "slow travel India"
- "small group retreats India"
- "burnout retreat India"
- "decision fatigue retreat"
- "curated travel India"
- "personal travel curator India"
- "solo travel India hosted"
- "company offsite India alternative"
- "Sri Lanka slow travel"
- "Spiti slow travel"
- "Wayanad retreat"

The Journal is the SEO play. Each long-form article should target one keyword theme.

## 13.3 Analytics dashboard targets

Build a simple PostHog dashboard with:
- Funnel: Home → Gathering page → Reserve started → Reserve completed
- Funnel: Home → Experience page → Inquiry submitted
- Funnel: Any page → Newsletter subscribed
- Conversion rate per archetype clicked
- Top journal articles by read-through

---

# 14. Performance, accessibility, browser support

## 14.1 Performance targets

| Metric | Target (mobile) |
|---|---|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.05 |
| Lighthouse Performance | > 88 |
| Total page weight (home) | < 1.5MB |

### Tactics
- All images via Next.js `<Image>` with appropriate `sizes`
- Sanity image CDN with `?w=&q=80&fm=webp` query params
- Self-host fonts (woff2), preload only critical font-files (DM Serif Display + Newsreader regular). Caveat Brush + JetBrains Mono lazy-loaded.
- Lazy-load below-the-fold images
- Lazy-load Lenis (it's not critical to LCP)
- Avoid hero video — hero is a treated still photo
- Dynamic import for the cursor follower (not needed on mobile)

## 14.2 Accessibility

- **Lighthouse accessibility score: 100 required**
- All interactive elements keyboard-accessible
- Focus visible — clay outline 2px on focus
- All images have meaningful `alt` (CMS-required)
- Color contrast ≥ AA (verify clay on paper specifically — clay (`#C45A3F`) on paper (`#F2EBDD`) is ~4.6:1 for body text, OK; for ink (`#1F1D1A`) on paper is ~14:1, fine)
- `prefers-reduced-motion` respected (see §8.9)
- Form labels properly associated
- Skip-to-content link
- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<section>`)
- Mobile menu trap focus
- The handwriting SVG reveals have ARIA labels with the actual text content

## 14.3 Browser support

- Chrome / Edge / Firefox / Safari — last 2 versions
- iOS Safari 15+ / Chrome Android last 2 versions
- Graceful degradation for old browsers (no Lenis, no cursor follower, no scroll-driven animations — content remains accessible)

---

# 15. Implementation roadmap (phased)

A realistic build sequence for Anti Gravity. Phases are stackable; estimates assume a single agent working continuously.

## Phase 0 — Setup (foundation)
1. Init Next.js 15 + TypeScript + Tailwind v4
2. Install fonts (self-hosted woff2 in `/public/fonts`): DM Serif Display, Newsreader, Caveat Brush, JetBrains Mono
3. Set up `tokens.css` with all CSS variables from §5.2
4. Set up paper-grain texture asset and apply to body
5. Set up Lenis smooth scroll provider
6. Set up Motion (Framer Motion) provider
7. Set up Sanity project, initialize schemas from §11.1
8. Set up Resend account + audience
9. Set up Razorpay test keys
10. Set up Postgres (Neon) + Drizzle
11. Set up Plausible + PostHog
12. Configure Vercel deployment

**Acceptance criteria:** Site loads with paper texture, fonts render, Lenis is active, Sanity dashboard shows empty schemas, all envs are working.

## Phase 1 — Design system + global components
1. Build all components in §7 (Button, Polaroid Card, Gathering Card, Section Header, etc.)
2. Build all hand-drawn SVG illustrations (HandArrow, HandUnderline, HandCircle, HandSquiggle, TapeMark)
3. Build global header (with mobile menu)
4. Build global footer (with newsletter band)
5. Build the cursor follower component
6. Storybook all of the above (optional but recommended)

**Acceptance criteria:** A `/design-system` route shows every component in every state. Every interaction respects the motion principles.

## Phase 2 — Home page
1. Build all 9 sections of the home page per §6.4
2. Wire up real data from Sanity (Gatherings, testimonials, journal articles)
3. Marquee strip animation
4. "Who we vibe with" interaction (archetype hover)
5. Hand-drawn SVG entry animations
6. Hero handwriting SVG reveal animation

**Acceptance criteria:** Home page is pixel-correct against the design spec, performs at >88 Lighthouse, all sections respond to scroll triggers.

## Phase 3 — Gatherings catalogue + single Gathering
1. `/gatherings` page with filter pills
2. `/gatherings/[slug]` template — hero, at-a-glance, story, itinerary, gallery, included/not, sticky booking band, related
3. Booking modal + Razorpay integration
4. `/api/reserve` route + Razorpay webhook handler
5. Confirmation email (React Email template)
6. `/thanks` page

**Acceptance criteria:** Anti Gravity can publish a Gathering in Sanity, and the page renders correctly with working reservation flow end-to-end (test mode).

## Phase 4 — The Experience + Decision Detox + A La Carte
1. `/experience` page — hero, how it works, modules, case studies, FAQ, inquiry CTA
2. `/decision-detox` mini-microsite
3. `/a-la-carte` page
4. `/inquire` long-form inquiry form
5. `/api/inquiry` route + Resend emails

**Acceptance criteria:** Inquiry form works end-to-end, emails arrive at hello@lostandfoundtravel.com.

## Phase 5 — Editorial pages
1. `/journal` index with category filters
2. `/journal/[slug]` template (long-form editorial layout, polaroids, pull-quotes)
3. `/destinations` index + `/destinations/[slug]`
4. `/who-we-vibe-with` page with archetype filtering
5. `/our-story` page
6. `/reviews` page

**Acceptance criteria:** All editorial pages publish from Sanity. SEO meta is correctly generated. Article reading experience is beautiful at all viewports.

## Phase 6 — Forms, B2B, contact
1. `/contact` simple form
2. `/teams` B2B page with team-specific inquiry form
3. Custom 404 page
4. Legal pages (privacy, terms, cancellation)

## Phase 7 — Polish
1. All micro-interactions per §8
2. Responsive QA across all pages (mobile, tablet, desktop, ultrawide)
3. Accessibility audit + fixes (target Lighthouse 100)
4. Performance audit + fixes (target Lighthouse > 88)
5. Cross-browser testing
6. SEO meta + OG image generation
7. Sitemap + robots.txt
8. Analytics events wired

## Phase 8 — Launch prep
1. Real content load (Sapan + team writes/uploads at least 4 Gatherings, 3 destinations, 6 journal articles, 8 testimonials, team bios)
2. Switch Razorpay to live keys
3. Domain configuration + DNS
4. Final QA on production URL
5. Soft launch to mailing list
6. Public launch

**Estimated total Anti Gravity build time: 30–45 hours of focused agent time** if working from this PRD without major design clarifications.

---

# 16. Launch checklist

## Pre-launch
- [ ] All Phase 0–7 complete
- [ ] Real content live in Sanity (4+ Gatherings, 3+ destinations, 6+ journal posts, team bios, testimonials)
- [ ] Razorpay live keys configured
- [ ] Stripe live keys configured (if international)
- [ ] Resend domain verified
- [ ] Newsletter "welcome" email reviewed
- [ ] All transactional email templates reviewed
- [ ] Lighthouse audit passed (Perf > 88, A11y = 100, SEO > 95)
- [ ] All forms tested end-to-end
- [ ] DNS pointing to Vercel
- [ ] SSL active
- [ ] Sitemap submitted to Google Search Console
- [ ] Plausible / PostHog tracking confirmed
- [ ] Privacy policy live
- [ ] Cookie consent (if EU traffic significant)
- [ ] Social Open Graph images verified
- [ ] 404 page verified
- [ ] Mobile QA on iOS Safari + Chrome Android
- [ ] Tested on slow connection (Network throttling: Slow 4G)

## Launch day
- [ ] Push to production
- [ ] Send first newsletter to existing IG audience announcing the site
- [ ] Update Instagram bio link to lostandfoundtravel.com
- [ ] Post launch on Lost & Found Instagram
- [ ] Set up Plausible / PostHog dashboards

## Post-launch (first 30 days)
- [ ] Monitor real-user metrics weekly
- [ ] First newsletter sent (slow letter #1)
- [ ] Watch funnel: home → reserve, identify drop-offs
- [ ] A/B test: hero copy variations (only after 1000+ visitors)
- [ ] Add 2 more journal articles
- [ ] Collect first booked-trip testimonial → publish as case study

---

# 17. Open decisions for Sapan

Anti Gravity should NOT make these calls — they need Sapan's input. Mark with **[NEEDS DECISION]**.

1. **Domain:** Confirm `lostandfoundtravel.com` is owned. Alternates: `lostandfound.travel`, `byloostandfound.com`.
2. **Logo asset:** Provide existing logo SVG/AI. If none, Anti Gravity types "LOST&FOUND" in DM Serif Display.
3. **Photography library:** Provide Sapan's existing IG-quality photos in raw resolution. Anti Gravity will apply treatment.
4. **Team bios:** Provide written bios for Tanya, Keerthi, and any other team members.
5. **First 4 Gatherings:** Provide full content — title, dates, capacity, prices, story, itinerary, photos.
6. **First 6 journal articles:** Pre-launch content. Repurpose IG captions into long-form where possible.
7. **Confirmed pricing:** Validate the price bands proposed in §4.1 (Gatherings, Experience curation fees, etc.).
8. **Razorpay merchant account:** Confirm KYC complete on Razorpay account.
9. **Email domain:** Confirm hello@lostandfoundtravel.com exists and is monitored.
10. **Newsletter cadence and first-letter content:** Confirm "fortnightly" is correct and whether you want auto-send or manual.
11. **Currency conversion rate:** Confirm static USD-INR rate to use at launch.
12. **B2B sales contact:** Confirm whether B2B inquiries route to a separate email (e.g., teams@lostandfoundtravel.com).
13. **Cancellation policy:** Confirm — "deposit refundable up to 30 days out, balance due 21 days before, full refund if we cancel" — is this final?
14. **Privacy policy:** Need legal text. Anti Gravity should generate a starter version and mark for legal review.
15. **Color palette confirmation:** Sapan should confirm or tweak the hex values in §5.2 against the existing brand assets.

---

# 18. Anti Gravity kickoff prompt

Paste this directly into Anti Gravity to start the build.

```markdown
Build the Lost & Found Travel website per the PRD attached.

CONTEXT:
- Lost & Found is a slow-travel curation brand designing trips for people in transition (burnout, decision fatigue, heartbreak, life inflection points). Audience is 25-35, predominantly women, urban India + Indian diaspora.
- This is an editorial scrapbook-journal aesthetic — paper textures, polaroid photos, handwritten coral script, italic dusty-blue serifs, sage green section bands, generous whitespace, intentional asymmetry.
- The site sells: small-group "Gatherings" (priced, listed), custom "Experiences" (inquiry), "Decision Detox" themed retreats, and "A La Carte" modular curation. It also hosts a Journal (editorial blog) and captures newsletter subscribers.

DESIGN SYSTEM (locked, defer to PRD §5):
- Palette: paper #F2EBDD, paper-deep #E5DBC4, ink #1F1D1A, moss #5C6F5A, clay #C45A3F, denim #6B7F95, wheat #C9A876
- Fonts: DM Serif Display (display), Newsreader (body, italic for emphasis), Caveat Brush (handwritten clay accents), JetBrains Mono (eyebrows/meta)
- NEVER use: Inter, pure white, pure black, card-with-shadow components, "Get Started" buttons, exclamation marks (except in playful context)
- ALWAYS use: paper-grain texture overlay, polaroid photo frames with random tilts (-3° to +3°), italic Newsreader for emotional lines, Caveat Brush in clay for handwritten emphasis (1-3 words at a time), hand-drawn SVG underlines/arrows/circles

TECH STACK (PRD §10):
- Next.js 15 App Router + TypeScript + Tailwind v4
- Sanity CMS, Resend (email), Razorpay (INR payments), Stripe (USD)
- Lenis smooth scroll + Motion (framer-motion) + GSAP for the hero handwriting reveal
- Plausible + PostHog for analytics
- Neon Postgres + Drizzle ORM
- Vercel hosting

BUILD ORDER (PRD §15):
0. Setup (Next, fonts, tokens, Sanity, integrations)
1. Design system (all components from PRD §7)
2. Home page (PRD §6.4 — most important page)
3. Gatherings catalogue + single Gathering with reservation flow
4. The Experience, Decision Detox, A La Carte
5. Journal + Destinations + Who We Vibe With + Our Story + Reviews
6. Contact + Teams + 404 + Legal
7. Polish, performance, accessibility
8. Content load + launch

ACCEPTANCE CRITERIA PER PAGE: Each page must match the spec in PRD §6 exactly — every section, every CTA, every interaction. Lighthouse mobile Perf > 88, A11y = 100. All forms work end-to-end with email confirmation.

VOICE: Read PRD §9 for voice. When generating any new copy, follow the rules there. The voice is "thoughtful friend writing 11pm voice notes" — confessional, specific, never marketing-speak.

When you have questions, ask. When you make assumptions, mark them clearly with [ASSUMED]. Default to the PRD; only deviate when you have a clear, defensible reason.

Begin with Phase 0 setup.
```

---

## Appendix A — Asset deliverables checklist (for Sapan to provide)

Before Anti Gravity reaches Phase 8, Sapan needs to provide:

**Brand:**
- [ ] Logo files (SVG, PNG)
- [ ] Confirmation of color hex values (or replacements)
- [ ] Confirmation of font choices (or paid font licenses if upgrading from free alternatives)

**Photography:**
- [ ] 60–80 raw photographs from past trips, organized by destination
- [ ] 8–10 founder/team portrait photos
- [ ] 4–6 testimonial-traveller photos (with permission)

**Content:**
- [ ] First 4 Gatherings: full content per §11.1 schema
- [ ] First 3 destinations: descriptions + galleries
- [ ] Team bios (3–6 people)
- [ ] First 6 journal articles
- [ ] First 8 testimonials
- [ ] Press logos + quotes (if applicable)
- [ ] Privacy policy + terms (legal review)

**Integrations:**
- [ ] Razorpay merchant credentials (live keys post-KYC)
- [ ] Resend account + audience set up
- [ ] Domain registered + DNS access
- [ ] hello@lostandfoundtravel.com mailbox

---

## Appendix B — Visual reference glossary

Anti Gravity should review these mental models:

- **"Polaroid scatter"** — A layout where 4–8 polaroid-framed photos are placed with intentional varied tilts (-5° to +5°) and offsets (overlapping by 12–32px), as if scattered on a desk. Used on Gathering galleries and home Section 5.
- **"Paper grain"** — A subtle (~6% opacity) noise/grain texture overlaid on the body background, giving cream surfaces a hand-made paper feel.
- **"Hand-drawn underline reveal"** — An SVG underline that draws itself in on viewport entry (`stroke-dasharray` from path-length to 0 over 600ms), used to emphasize key words in headings.
- **"Tilt-on-rest"** — Polaroids sit with a slight permanent tilt; on hover, they straighten to 0° and lift. The "rest state" is asymmetric, the "hover state" is composed — counterintuitive but feels right.
- **"Magnetic CTA"** — Primary buttons gently pull the cursor toward them within an 80px radius, ~3px maximum displacement.
- **"Slow letters"** — The newsletter brand. Implies fortnightly cadence, considered tone, no marketing pushes.
- **"L&F Gathering"** — Branded name for the small-group, open-enrolment trips.
- **"L&F Experience"** — Branded name for fully custom-curated trips.
- **"Decision Detox"** — Branded name for the themed-retreat product specifically targeting decision fatigue.

---

**End of PRD.**

*Built with care for Sapan. Lost & Found, est. 2024.*
