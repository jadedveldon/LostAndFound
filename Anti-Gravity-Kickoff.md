# Anti Gravity — Lost & Found Kickoff Prompt

> **How to use:** Paste the prompt below directly into Anti Gravity. Attach `Lost-and-Found-Website-PRD.md` and `tokens.css` as references. Anti Gravity will work from the PRD as the source of truth.

---

```
Build the Lost & Found Travel website per the attached PRD.

WHO LOST & FOUND IS:
A slow-travel curation brand designing trips for people in transition — burnout,
decision fatigue, heartbreak, life inflection points. Audience is 25-35,
predominantly women, urban India + Indian diaspora. The brand voice is
"thoughtful friend writing 11pm voice notes" — confessional, specific,
never marketing-speak.

WHAT THE SITE SELLS:
1. L&F Gathering — small-group open-enrolment trips (priced, listed)
2. The L&F Experience — fully custom-curated trips (inquiry-based)
3. The Decision Detox — themed retreat for the burnt-out (priced, listed)
4. A La Carte — modular trip-planning services
+ The Journal (free newsletter, top-of-funnel)
+ For Teams (B2B retreats, inquiry)

DESIGN LANGUAGE (LOCKED — see PRD §5):
- Editorial scrapbook journal aesthetic — paper textures, polaroid frames,
  handwritten coral script, italic dusty-blue serifs, sage green section bands
- Palette: paper #F2EBDD, paper-deep #E5DBC4, ink #1F1D1A, moss #5C6F5A,
  clay #C45A3F, denim #6B7F95, wheat #C9A876
- Fonts: DM Serif Display (display), Newsreader (body, italic for emphasis),
  Caveat Brush (handwritten clay accents), JetBrains Mono (eyebrows/meta)
- NEVER use: Inter, pure white (#FFFFFF), pure black (#000000),
  card-with-shadow components, "Get Started" buttons, exclamation marks
  (except in playful contexts), purple gradients, bouncy spring animations
- ALWAYS use: paper-grain texture overlay (~6% opacity), polaroid frames
  with random tilts (-3° to +3°), italic Newsreader for emotional lines,
  Caveat Brush in clay for handwritten emphasis (1-3 words at a time),
  hand-drawn SVG underlines/arrows/circles, slow easings (600-800ms)

TECH STACK (PRD §10):
- Next.js 15 App Router + TypeScript + Tailwind v4
- Sanity CMS (or Payload as alternative)
- Resend (email), Razorpay (INR payments), Stripe (USD international)
- Lenis smooth scroll + Motion (framer-motion) + GSAP for the hero
  handwriting reveal
- Plausible + PostHog for analytics
- Neon Postgres + Drizzle ORM for bookings/inquiries
- Vercel hosting

BUILD ORDER (PRD §15):
0. Setup — Next.js, fonts, paste tokens.css, set up Sanity, set up
   integrations (Razorpay, Resend, Postgres, Plausible, PostHog)
1. Design system — every component in PRD §7, including hand-drawn SVGs
2. Home page — PRD §6.4. This is the most important page — invest the
   most time here. All 9 sections, marquee, hero handwriting reveal,
   "who we vibe with" interaction.
3. Gatherings catalogue + single Gathering with reservation flow.
   Build the Razorpay reservation flow end-to-end — booking modal,
   Razorpay Standard Checkout, webhook handler, confirmation email
   via React Email template, /thanks page.
4. The Experience + Decision Detox + A La Carte service pages.
   Build inquiry form + /api/inquiry route + Resend dual-emails
   (user confirmation + admin notification).
5. Editorial pages — Journal index + single article, Destinations
   index + single, Who We Vibe With, Our Story, Reviews.
6. Contact + Teams + 404 + legal pages.
7. Polish — all micro-interactions in PRD §8, responsive QA,
   accessibility audit (target Lighthouse 100), performance audit
   (target mobile Perf >88), SEO meta + OG image generation,
   sitemap, robots.txt, analytics events.
8. Content load + soft launch.

ACCEPTANCE CRITERIA PER PAGE:
Every page must match the spec in PRD §6 exactly — every section,
every CTA placement, every interaction. Lighthouse mobile Perf > 88,
A11y = 100. All forms work end-to-end with email confirmation.

VOICE:
For any new copy you generate, follow PRD §9. Italic Newsreader (denim)
for emotional/quoted lines. DM Serif Display uppercase for impact.
Caveat Brush in clay for handwritten emphasis (1-2 words). Mono uppercase
for eyebrows/dates. Always specific, never generic. No "amazing," no
"epic," no exclamation marks except in playful contexts.

OPEN DECISIONS (PRD §17):
Some items need Sapan's input — see PRD §17. When you encounter one,
mark it [NEEDS DECISION] in the code/CMS and continue with a sensible
default. Do not block on these.

WHEN STUCK:
Ask. When you make assumptions, mark them clearly with [ASSUMED:].
Default to the PRD; only deviate when you have a clear, defensible
reason and you flag it.

START WITH PHASE 0 SETUP. CONFIRM PROJECT IS UP AND RUNNING BEFORE
MOVING TO PHASE 1.
```

---

## Files to attach to Anti Gravity

1. `Lost-and-Found-Website-PRD.md` — the full PRD
2. `tokens.css` — drop directly into `/styles/tokens.css` in the project
3. (Once Sapan provides) Logo SVG, sample photos, written content for first Gatherings/journal articles

## Recommended Anti Gravity workflow

1. Paste the prompt above as the kickoff message
2. Attach the PRD + tokens.css
3. After Phase 0 confirms working, ask Anti Gravity to walk through the home page section-by-section — this lets you catch design intent issues before they propagate
4. Review at the end of each phase before letting it move to the next
5. Real content (photos, copy) only loads in Phase 8 — earlier phases use placeholders so design iteration is fast
