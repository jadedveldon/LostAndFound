# Lost & Found — Polish & Refinement Spec

**Document type:** Companion spec to `Lost-and-Found-Website-PRD.md`
**Audience:** Anti Gravity (implementing agent), Sapan (reviewer)
**Version:** 1.0 — May 2026
**Status:** Build-ready · apply after current deployment

---

## How to use this document

This is **not a new PRD.** It's a targeted patch list. The deployed site at `lost-and-found-app-snowy.vercel.app` is structurally correct — every section from PRD §6 exists, copy is on-voice, the sitemap and layout logic are right. What's missing is the **hand-made finishing layer**: the things in PRD §5.5 (texture & decorative elements), §5.7 (imagery treatment), §7.3 (polaroid), §7.11 (hand-drawn SVGs), and §8.8 (hero handwriting reveal) that were specified but not built.

Every item below references the PRD section it implements. Anti Gravity should treat this as: "the PRD is still the source of truth — these are the parts that were skipped or under-built. Close them."

Priority key:
- **P0 — Brand-critical.** The site does not read as Lost & Found until these ship. Do these first.
- **P1 — High-impact.** Major perceived-quality lift. Do these second.
- **P2 — Refinement.** Final polish pass.

| # | Item | Priority | PRD ref |
|---|---|---|---|
| 1 | Paper grain texture overlay | **P0** | §5.2, §5.5 |
| 2 | Photo treatment class | **P0** | §5.7 |
| 3 | Hand-drawn SVG component library | **P0** | §5.5, §7.11 |
| 4 | Hero right-column rebuild (scrapbook cluster) | **P0** | §6.4 §1 |
| 5 | Hero handwriting reveal + weight fix | **P1** | §5.3, §8.8 |
| 6 | Polaroid component upgrade | **P1** | §7.3 |
| 7 | CTA buttons character pass | **P1** | §7.1, §8.3 |
| 8 | Motion + load choreography | **P2** | §8 |
| 9 | Compositional imperfection pass | **P2** | §5.4, §5.5 |

---

# 1 · Paper grain texture overlay — **P0**

**Deployed state:** Background is flat `#F2EBDD`. No texture anywhere.
**PRD said (§5.5 item 1, §5.2):** Paper-grain overlaid on the body at ~6% opacity; "flat solid color is forbidden on full-bleed surfaces."

This is the single highest-leverage fix. Every "this looks digital/templated" reaction traces back to this one absence.

**Implementation — zero-asset SVG noise (preferred over a PNG; no HTTP request, scales infinitely):**

Add to `globals.css`:

```css
/* Paper grain — fixed overlay, sits above background, below content */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  mix-blend-mode: multiply;
  opacity: 0.55; /* the SVG is already low-alpha; this lands at ~6% effective */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.12 0 0 0 0 0.11 0 0 0 0 0.10 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 240px 240px;
}

/* Warm light bloom — gives the cream depth instead of dead flatness */
body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse 80% 60% at 28% 18%,
    rgba(255, 250, 240, 0.55) 0%,
    transparent 55%
  );
}

/* Ensure all real content sits above the texture layers */
body > * { position: relative; z-index: 2; }
```

**For moss/clay full-bleed bands** (Section 6, 9, footer newsletter) the grain must persist *over* the color, not vanish. Add a scoped grain:

```css
.band-moss, .band-clay {
  position: relative;
  isolation: isolate;
}
.band-moss::before, .band-clay::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  mix-blend-mode: overlay;
  opacity: 0.30;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n2)'/%3E%3C/svg%3E");
  background-size: 240px 240px;
}
```

**Acceptance:** Take a screenshot, zoom 400%. Cream surfaces show fine tooth/grain, not a single flat hex. The grain is present *on* the sage and coral bands too. No visible repeat seam (the `stitchTiles='stitch'` handles this).

---

# 2 · Photo treatment class — **P0**

**Deployed state:** Raw Unsplash images. The Ahangama hero photo is cold electric-teal and clashes with the warm palette.
**PRD said (§5.7):** A `.photo-treatment` class — −8% saturation, +warmth, ~3% film grain, subtle vignette — "so every photo feels like it belongs to the same journal."

```css
.photo-treatment {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}
.photo-treatment > img,
.photo-treatment > picture > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.90) sepia(0.10) contrast(1.04) brightness(1.015);
}
/* film grain */
.photo-treatment::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  mix-blend-mode: overlay;
  opacity: 0.08;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
  background-size: 180px 180px;
}
/* vignette */
.photo-treatment::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  box-shadow: inset 0 0 90px 24px rgba(31, 29, 26, 0.14);
}
```

**Next.js component wrapper** so this is applied everywhere images render:

```tsx
// components/TreatedImage.tsx
import Image, { type ImageProps } from "next/image";

export function TreatedImage({ className = "", ...props }: ImageProps) {
  return (
    <span className={`photo-treatment ${className}`}>
      <Image {...props} />
    </span>
  );
}
```

Then sweep the codebase: replace every `next/image` usage that renders trip/journal/destination/testimonial photography with `<TreatedImage>`. Do **not** treat the logo, icons, or UI chrome.

**Acceptance:** The Ahangama hero photo is visibly warmer and softer — it now sits *inside* the palette instead of fighting it. All photos across the home page feel shot on the same roll of film.

---

# 3 · Hand-drawn SVG component library — **P0**

**Deployed state:** Zero hand-drawn elements anywhere. "different places, one feeling." is plain floating text. No tape, no arrows, no underlines.
**PRD said (§5.5 items 3,4,5,6 + §7.11):** A reusable inline-SVG set: `HandArrow`, `HandUnderline`, `HandCircle`, `HandSquiggle`, `HandCheck`, `HandCross`, `TapeMark`. Each accepts a color, draws in on viewport entry.

Create `components/illustrations/`. Use **Motion's `pathLength`** for the draw-in (no paid GSAP plugin needed). Every component takes `className` for sizing and inherits `currentColor` so it tints via CSS.

```tsx
// components/illustrations/hand.tsx
"use client";
import { motion } from "motion/react";

const draw = {
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true, margin: "-12%" },
};
const ease = [0.22, 1, 0.36, 1] as const;

export function HandUnderline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 22" fill="none" className={className} aria-hidden>
      <motion.path
        d="M5 13 C 64 4 128 19 192 10 C 240 4 280 9 315 14"
        stroke="currentColor" strokeWidth={3.4} strokeLinecap="round"
        {...draw} transition={{ duration: 0.62, ease }}
      />
    </svg>
  );
}

export function HandArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 96" fill="none" className={className} aria-hidden>
      <motion.path
        d="M8 18 C 26 64 64 82 108 54"
        stroke="currentColor" strokeWidth={3.2} strokeLinecap="round"
        {...draw} transition={{ duration: 0.7, ease }}
      />
      <motion.path
        d="M90 64 L 110 52 L 100 30"
        stroke="currentColor" strokeWidth={3.2}
        strokeLinecap="round" strokeLinejoin="round"
        {...draw} transition={{ duration: 0.4, ease, delay: 0.55 }}
      />
    </svg>
  );
}

export function HandCircle({ className = "" }: { className?: string }) {
  // intentionally not perfectly closed — the overshoot at the end sells "hand"
  return (
    <svg viewBox="0 0 220 120" fill="none" className={className} aria-hidden>
      <motion.path
        d="M112 9 C 48 7 11 32 11 60 C 11 94 66 111 120 110 C 178 109 210 82 207 52 C 204 24 162 8 104 10 C 86 11 70 16 58 24"
        stroke="currentColor" strokeWidth={3} strokeLinecap="round"
        {...draw} transition={{ duration: 0.9, ease }}
      />
    </svg>
  );
}

export function HandSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 16" fill="none" className={className} aria-hidden>
      <motion.path
        d="M3 9 Q 14 1 25 9 T 47 9 T 69 9 T 91 9 T 113 9 T 137 9"
        stroke="currentColor" strokeWidth={2.6} strokeLinecap="round"
        {...draw} transition={{ duration: 0.7, ease }}
      />
    </svg>
  );
}

export function HandCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden>
      <path d="M5 15 C 8 18 10 21 12 23 C 16 15 20 9 25 5"
        stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HandCross({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden>
      <path d="M6 6 C 12 12 17 17 22 22 M22 6 C 17 11 12 17 6 22"
        stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
}
```

**TapeMark** is CSS, not SVG — it needs the translucent layered look:

```css
.tape {
  position: absolute;
  width: 92px;
  height: 30px;
  background: linear-gradient(
    135deg,
    rgba(201, 168, 118, 0.32) 0%,
    rgba(242, 235, 221, 0.42) 50%,
    rgba(201, 168, 118, 0.28) 100%
  );
  /* slightly torn edges */
  clip-path: polygon(2% 8%, 98% 0, 100% 88%, 4% 100%);
  box-shadow: 0 1px 4px rgba(31, 29, 26, 0.10);
  backdrop-filter: saturate(1.1);
  z-index: 5;
}
```

**Where these go on the home page (per PRD §6.4):**

| Element | Component | Placement |
|---|---|---|
| Under "exhale" in hero | `HandUnderline` (clay) | absolutely positioned under the handwritten word, 6px below baseline |
| "different places, one feeling." → polaroid cluster | `HandArrow` (clay) | between the note and the cluster, curving toward it |
| "see all gatherings →" | `HandArrow` small (denim) | inline after the text, replaces the `→` |
| Section dividers between major sections | `HandSquiggle` (wheat, 30% opacity) | centered, ~120px wide |
| Included / not-included lists (Gathering pages) | `HandCheck` moss / `HandCross` clay | replacing bullets |
| Every polaroid in hero + Section 2 + Section 5 | `.tape` | one per polaroid, top edge, rotated −4° to +6° |
| "who we vibe with" emphasis | `HandCircle` (clay) | around one rotating archetype word |

**Acceptance:** A `/design-system` route renders all seven, each drawing itself in on scroll. On the home page, no clay text "floats" anymore — every handwritten annotation is anchored by a drawn mark or connects to something with an arrow.

---

# 4 · Hero right-column rebuild — **P0**

**Deployed state:** Two clean polaroids with uniform soft shadow, floating in a large void. The middle-right of the hero is dead space. Reads as a card component, not an arranged page.
**PRD said (§6.4 Section 1):** A scrapbook moment — polaroid(s) with tape, handwritten caption, the right side should feel composed and intentional, not a photo slot.

**Rebuild the right column as a deliberate scrapbook cluster:**

Layout intent (desktop):

```
                    ┌───────────────────┐
                    │  [tape, rotated]   │
                    │   ╔═════════════╗  │   ← Polaroid A (large, +2°)
                    │   ║  Ahangama   ║  │     "Ahangama, last spring"
                    │   ║   photo     ║  │
                    │   ╚═════════════╝  │
              ┌──────────┐  overlaps ↓   │
   [tape] →   │ ╔══════╗ │ by ~40px      │   ← Polaroid B (small, −5°)
              │ ║Kerala║ │               │     "Kerala, monsoon"
              │ ╚══════╝ │               │     tucked lower-left, behind A's corner
              └──────────┘                │
        ↖ HandArrow (clay) curving up from:
        "different places,
         one feeling."   ← clay caption-script, rotated −3°
```

Key rules that make it read as hand-arranged, not as a grid:
- **Overlap.** Polaroid B's top-right corner sits *behind* Polaroid A's bottom-left by 32–48px. Use `z-index` + negative margins, not a flex gap.
- **Tilt variety.** A at `+2deg`, B at `-5deg`. Never both the same. Set via `style={{ '--tilt': '2deg' }}` and `transform: rotate(var(--tilt))`.
- **Tape anchors each polaroid.** One `.tape` per polaroid, straddling the top edge, each rotated differently (`-4deg`, `+6deg`).
- **The arrow does work.** `HandArrow` physically connects "different places, one feeling." to the cluster — it's the visual sentence "these different photos → one feeling." Position it absolutely, ~110px wide, clay, curving from the note's top toward Polaroid B.
- **Kill the void.** The cluster should occupy roughly the same vertical extent as the left column's text block (eyebrow → headline → paragraph → CTAs). If there's dead space, the polaroids are too small — scale Polaroid A up until the right column has the same visual weight as the left. The PRD calls for asymmetry (§5.4), not emptiness.

Structural sketch:

```tsx
<div className="hero-cluster">
  {/* Polaroid A */}
  <figure className="polaroid polaroid--lg" style={{ '--tilt': '2deg', zIndex: 3 }}>
    <span className="tape" style={{ rotate: '-4deg', top: -14, left: '38%' }} />
    <TreatedImage src="/ahangama.jpg" alt="A quiet morning in Ahangama" width={420} height={520} />
    <figcaption className="t-caption-script">Ahangama, last spring</figcaption>
  </figure>

  {/* Polaroid B — overlapping, lower-left, behind A */}
  <figure className="polaroid polaroid--sm" style={{ '--tilt': '-5deg', zIndex: 2 }}>
    <span className="tape" style={{ rotate: '6deg', top: -12, left: '30%' }} />
    <TreatedImage src="/kerala.jpg" alt="Backwaters in monsoon, Kerala" width={260} height={300} />
    <figcaption className="t-caption-script">Kerala, monsoon</figcaption>
  </figure>

  {/* Annotation + arrow */}
  <p className="hero-note t-caption-script">different places,<br/>one feeling.</p>
  <HandArrow className="hero-arrow" />
</div>
```

```css
.hero-cluster { position: relative; min-height: 560px; }
.polaroid--lg { position: absolute; top: 20px; right: 40px; width: 420px; }
.polaroid--sm { position: absolute; top: 360px; right: 300px; width: 260px; }
.hero-note   {
  position: absolute; bottom: 40px; right: 360px;
  color: var(--clay); transform: rotate(-3deg); text-align: right;
}
.hero-arrow  {
  position: absolute; bottom: 96px; right: 290px;
  width: 110px; color: var(--clay); transform: rotate(8deg);
}
```

(Tune the absolute values against the live layout — the structure and overlap logic are what matter, not the exact pixels.)

**Acceptance:** Screenshot the hero. The right side reads as something a person arranged on a desk — overlapping photos, tape, a note with an arrow pointing into the cluster. There is no large empty rectangle. Left and right columns have balanced visual weight.

---

# 5 · Hero handwriting reveal + weight fix — **P1**

**Deployed state:** "a long exhale." is default-weight Caveat Brush — thin, reads as a Google Font, no animation.
**PRD said (§5.3 Font 3, §8.8):** The hero handwritten word should be visually chunkier (the L&F Instagram uses a heavier brush face — "Beauty Hand" flagged as the paid match) and should *draw itself in* on first load.

**Fix A — weight (quick, free):** Caveat Brush ships only at 400. Fatten it with stroke:

```css
.hero-script {
  font-family: var(--font-script);
  color: var(--clay);
  -webkit-text-stroke: 1.4px var(--clay);   /* fattens the strokes */
  paint-order: stroke fill;
  letter-spacing: 0.005em;
  transform: rotate(-1.5deg);                /* hand-set, not laser-straight */
  display: inline-block;
}
```

If a heavier face is acceptable, the better free swap is **Caveat** (variable, supports 700) at `font-weight: 700` instead of Caveat Brush — it's closer to the marker weight in the brand's Instagram. Paid option remains "Beauty Hand" per PRD §5.3.

**Fix B — the §8.8 reveal (do this; it also future-proofs the weight problem):** Render the line as text but wipe it in with a clip-path on first load. This looks like it's being written and needs no SVG path tracing:

```css
@keyframes handwrite {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0 0 0); }
}
.hero-script {
  animation: handwrite 1100ms cubic-bezier(0.22, 1, 0.36, 1) 350ms both;
}
@media (prefers-reduced-motion: reduce) {
  .hero-script { animation: none; }
}
```

For the "drawn-stroke" look closer to the PRD's stated SVG approach: letter the three words once in a vector tool (or convert the Caveat/Beauty Hand text to outlines), export as a single SVG path, and animate `pathLength` with Motion exactly like the `Hand*` components in §3. The clip-path wipe above is the pragmatic version and looks excellent; the SVG-path version is the premium version. Either satisfies §8.8 — do the clip-path now, leave a `// TODO[ASSET]: replace with lettered SVG path` for the upgrade.

**Acceptance:** "a long exhale." reads as ink pressed into paper — visibly heavier than the body — and on first page load it writes itself left-to-right over ~1.1s. On reload within the session it's static. Respects reduced-motion.

---

# 6 · Polaroid component upgrade — **P1**

**Deployed state:** Polaroids are tidy CSS cards — equal padding all around, uniform shadow, no tilt, no tape.
**PRD said (§7.3):** Frame `--paper-warm`; padding **16px top/sides, 56px bottom** (caption well); shadow `0 12px 28px rgba(31,29,26,0.10)`; per-instance tilt −3° to +3°; tape; hover straightens to 0° and lifts.

```css
.polaroid {
  --tilt: 0deg;
  position: relative;
  display: inline-block;
  background: var(--paper-warm);
  padding: 16px 16px 56px;          /* asymmetric — caption well at the bottom */
  box-shadow: var(--shadow-polaroid);
  transform: rotate(var(--tilt));
  transition: transform var(--duration-slow) var(--ease-default),
              box-shadow var(--duration-slow) var(--ease-default);
}
.polaroid .photo-treatment { width: 100%; aspect-ratio: 4 / 5; }
.polaroid figcaption {
  font-family: var(--font-script);
  font-size: var(--type-caption-script);
  color: var(--ink);
  text-align: center;
  margin-top: 16px;
  line-height: 1.05;
  transform: rotate(0.5deg);        /* caption itself slightly off — handwritten */
}
.polaroid:hover {
  transform: rotate(0deg) translateY(-6px);
  box-shadow: var(--shadow-elevated);
}
@media (prefers-reduced-motion: reduce) {
  .polaroid { transition: none; }
  .polaroid:hover { transform: rotate(var(--tilt)); }
}
```

Assign tilt **per instance** so no two siblings match — pass `style={{ "--tilt": "-3deg" }}`, `"2deg"`, `"-1deg"`, `"4deg"`… For the Section 2 / Section 5 polaroid groups, use the `.polaroid-scatter` nth-child rotations already in `tokens.css` so the scatter is automatic.

**Acceptance:** Every polaroid has a caption *well* (more space below the photo than above), sits at a unique angle, carries one piece of tape, and on hover straightens + lifts. Side by side they look scattered on a table, never grid-aligned.

---

# 7 · CTA buttons character pass — **P1**

**Deployed state:** Plain filled clay rectangle + plain outline rectangle. Functional, characterless — the most generic element on the page.
**PRD said (§7.1, §8.3):** Primary is magnetic (3px cursor pull, 80px radius); ghost gets a hand-drawn underline that draws in on hover; correct hover translate.

- **Primary** ("Browse upcoming Gatherings"): keep clay fill, add the magnetic effect (§8.3) and the −2px hover translate (already in `tokens.css` `.btn-primary`). Magnetic on desktop pointer only, disabled for touch + reduced-motion:

```tsx
"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function MagneticButton({ children, ...rest }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  function onMove(e: React.MouseEvent) {
    const r = ref.current!.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    if (Math.hypot(dx, dy) < 80) { x.set(dx * 0.18); y.set(dy * 0.18); }
  }
  return (
    <motion.button
      ref={ref} onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x, y }} className="btn btn-primary" {...rest}
    >
      {children}
    </motion.button>
  );
}
```

- **Secondary** ("Plan a personal Experience"): convert from a hard outline box to the **ghost + hand-underline** treatment. The underline (`HandUnderline`, clay) is hidden, then draws in on hover:

```tsx
<a className="btn-ghost-hand" href="/experience">
  Plan a personal Experience
  <HandUnderline className="btn-underline" />
</a>
```
```css
.btn-ghost-hand { position: relative; color: var(--ink); font-family: var(--font-mono);
  text-transform: uppercase; letter-spacing: .05em; padding: 14px 4px; }
.btn-underline { position: absolute; left: 0; right: 0; bottom: 2px; width: 100%;
  color: var(--clay); opacity: 0; transition: opacity .2s; }
.btn-ghost-hand:hover .btn-underline { opacity: 1; } /* the path itself animates via Motion */
```

(Keep at least one true filled button on the page for affordance — the primary. The secondary becoming a hand-underlined link is on-brand and reduces the "two boxes" generic look.)

**Acceptance:** The primary subtly leans toward the cursor near it; the secondary is no longer a boxed button but a labelled link that gets a coral hand-drawn underline sketched under it on hover. Touch + reduced-motion users get static, fully-usable fallbacks.

---

# 8 · Motion + load choreography — **P2**

**PRD said (§8.1, §8.2, §8.9):** Lenis smooth scroll; one orchestrated page-load with staggered reveals; scroll-triggered draw-ins; full `prefers-reduced-motion` support.

- **Confirm Lenis is mounted** (ease 0.08, duration 1.2) at the root. If absent, add it — the "slow" brand promise is partly carried by scroll feel.
- **Hero load sequence** (once, on first paint): eyebrow → headline line 1 → handwritten line (the §5 wipe) → paragraph → CTAs → polaroid cluster. Each step fades up 16px, 80–100ms stagger, 600ms ease `cubic-bezier(0.22,1,0.36,1)`. Use Motion `variants` with `staggerChildren`.
- **Scroll reveals:** section eyebrow + heading fade up; `HandUnderline`/`HandSquiggle`/`HandArrow` draw in (already wired via `whileInView` in §3); polaroids enter from their tilt. `viewport={{ once: true }}` so nothing re-animates on scroll-back.
- **Global reduced-motion guard** — single source of truth:

```tsx
import { MotionConfig } from "motion/react";
// app/layout.tsx → wrap children
<MotionConfig reducedMotion="user">{children}</MotionConfig>
```
Plus the CSS `@media (prefers-reduced-motion: reduce)` block already in `tokens.css`. With reduced motion: no Lenis (fall back to native scroll), fades capped at 200ms, no magnetic, no handwriting wipe, no cursor follower.

**Acceptance:** First load plays one calm, legible cascade — nothing pops or bounces. Scrolling has gentle inertia. Toggling OS "reduce motion" yields an instant, static, fully-usable site with zero layout shift.

---

# 9 · Compositional imperfection pass — **P2**

**PRD said (§5.4, §5.5):** "Asymmetry is welcomed… polaroids tilt, headlines may sit off-center, two-column blocks may be 60/40." The deployed site is too evenly aligned — everything is centered and gridded, which fights the scrapbook concept.

Final sweep across the home page:

- **Section 2 ("we curate breaks"):** make the 2×2 photo group a true `.polaroid-scatter` (overlapping, varied tilt + tape) rather than an even 2×2 grid.
- **Section 4 ("who we vibe with"):** the massive Caveat Brush headline should sit slightly off-center (left-shifted ~5%) with the tilted polaroid + tape from PRD §6.4 §4 actually present (it's a flat layout now). Wrap one rotating archetype word in `HandCircle`.
- **Section 5 ("we can plan the whole trip"):** the four service items should be tilted polaroids in a loose row (varied angles), not aligned cards.
- **Marquee strip:** style the band as a torn paper edge — add a small `clip-path` zigzag top border or a thin `--wheat` hand-squiggle rule above it — so it reads as a strip stuck on, not a div.
- **Section rhythm:** insert a centered `HandSquiggle` (`--wheat`, 30%) divider between major sections instead of relying on background-color change alone. Vary vertical padding ±16px between sections so the rhythm breathes instead of being metronomic.
- **One deliberate "off" element per section** — a caption rotated −3°, a polaroid corner bleeding past a container edge, a note set ragged-right. Controlled imperfection, never sloppiness.

**Acceptance:** Scrolling the page feels like turning pages of a journal — each section has its own slightly-off composition. Nothing is laser-centered. It still feels designed and intentional, never messy.

---

# 10 · Global QA gates (re-run from PRD §14)

After items 1–9 ship, re-verify the PRD's acceptance bars — polish must not regress these:

- [ ] Lighthouse mobile **Performance > 88** (the SVG-noise overlays are CSS data-URIs, near-zero cost — but confirm no layout shift from late-loading polaroids; reserve space with `aspect-ratio`)
- [ ] Lighthouse **Accessibility = 100** (all `Hand*` SVGs are `aria-hidden`; the handwriting line has a real text node so it's read normally; magnetic/ghost buttons remain real focusable `<button>`/`<a>`)
- [ ] **CLS < 0.05** — texture overlays are `position: fixed` and must not push content; polaroids must have reserved dimensions
- [ ] `prefers-reduced-motion` honored end to end (one `MotionConfig` + the CSS block)
- [ ] Color contrast still AA — adding grain does not change the underlying token values; re-spot-check clay-on-paper for any text
- [ ] No visible texture seam at any viewport (the `stitchTiles='stitch'` filter handles tiling)

---

# 11 · Paste-in instruction for Anti Gravity

```
Apply the attached Polish & Refinement Spec to the deployed Lost & Found site.

This is a patch list, not a redesign. The structure, copy, sitemap, and
section layout are correct and must NOT change. You are adding the
hand-made finishing layer that was specified in the PRD (§5.5, §5.7,
§7.3, §7.11, §8.8) but not built.

Work strictly in priority order:
  P0 first: (1) paper grain overlay, (2) photo treatment class,
            (3) hand-drawn SVG component library,
            (4) hero right-column scrapbook rebuild
  Then P1:  (5) hero handwriting reveal + weight,
            (6) polaroid component upgrade,
            (7) CTA character pass
  Then P2:  (8) motion/load choreography,
            (9) compositional imperfection pass

After each priority tier, stop and report with screenshots so Sapan
can review before you continue.

The code in each section is copy-paste-ready — adapt the absolute
positioning values in item 4 to the live layout, but keep the overlap
and tape logic exactly. Do not substitute libraries: use Motion
(motion/react) for all draw-ins and the magnetic button, CSS data-URI
SVG for all noise/grain (no PNG assets, no extra HTTP requests).

Re-run the §10 QA gates before declaring any tier done. Lighthouse
mobile Perf must stay >88 and A11y must stay 100.

Mark any place you need a real asset (lettered handwriting SVG, real
trip photography) with // TODO[ASSET]: and continue with the
documented fallback.
```

---

**End of Polish Spec.** Companion to `Lost-and-Found-Website-PRD.md`. The PRD remains the source of truth; this closes the delta between it and the current deployment.
