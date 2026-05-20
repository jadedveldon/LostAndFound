import React from 'react';
import { Button } from '../ui/Button';
import { Polaroid } from '../ui/Polaroid';
import { HandArrow, HandUnderline } from '../illustrations/hand';
import { MagneticButton } from '../ui/MagneticButton';

export function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center relative pb-20 pt-28 md:pt-32 overflow-hidden bg-[var(--paper)]">
      <div className="container flex flex-col lg:flex-row items-center gap-10 lg:gap-6">

        {/* Left Text Column */}
        <div className="w-full lg:w-[55%] flex flex-col items-start z-10">
          <span className="t-eyebrow mb-6">Personal Travel Curators · Est. 2024</span>

          <h1 className="flex flex-col mb-8">
            <span
              className="text-[clamp(36px,5vw,64px)] leading-[1.08] font-normal text-[var(--ink)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Travel that feels like
            </span>
            <span className="relative ml-0 lg:ml-8 mt-2 block w-fit">
              <span className="hero-script text-[clamp(64px,9vw,120px)] leading-[0.88] block">
                a long exhale.
              </span>
              <HandUnderline className="absolute left-0 -bottom-3 w-[260px] sm:w-[320px] lg:w-[380px] text-[var(--clay)]" />
            </span>
          </h1>

          <p className="t-body-lg text-[var(--ink-soft)] max-w-[500px] mb-10 leading-relaxed">
            Curated slow travel experiences, intimate gatherings, and restorative journeys for people who need a softer way to experience life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto mt-4">
            <MagneticButton>Explore Gatherings</MagneticButton>
            <a href="/experience" className="btn-ghost-hand">
              Plan a personal journey
              <HandUnderline className="btn-underline" />
            </a>
          </div>
        </div>

        {/* Right — Scrapbook Cluster Column */}
        <div className="w-full lg:w-[45%] mt-4 lg:mt-0">
          <div className="hero-cluster">
            {/* Polaroid A — large, rotated, with tape */}
            <Polaroid
              src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop"
              alt="Ahangama coast"
              caption="Ahangama, last spring"
              tilt="2deg"
              showTape={true}
              tapeRotate="-4deg"
              className="polaroid--lg"
              style={{ zIndex: 3 }}
            />

            {/* Polaroid B — smaller, overlapping lower-left, behind A, with tape */}
            <Polaroid
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=400&auto=format&fit=crop"
              alt="Kerala backwaters"
              caption="Kerala, monsoon"
              tilt="-5deg"
              showTape={true}
              tapeRotate="6deg"
              className="polaroid--sm"
              style={{ zIndex: 2 }}
            />

            {/* Handwritten label */}
            <p className="hero-note">
              different places,
              <br />
              one feeling.
            </p>

            {/* Curved arrow pointing from label to Polaroid B */}
            <HandArrow className="hero-arrow" />
          </div>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="w-full absolute bottom-0 left-0 marquee border-t border-b border-[var(--paper-deep)]">
        <div className="marquee-track t-mono text-xs text-[var(--ink)] tracking-wider">
          <span>SRI LANKA — RELEARN THE ART OF SLOW TRAVEL · AUG 20–26, 2026 · BLOCK YOUR SLOT NOW ✦ THE SLOW TRANSIT · AHANGAMA · 10–14 TRAVELLERS · HOSTED EXPERIENCE ✦ L&amp;F EXPERIENCE — CURATION OPEN ALL YEAR ✦ </span>
          <span>SRI LANKA — RELEARN THE ART OF SLOW TRAVEL · AUG 20–26, 2026 · BLOCK YOUR SLOT NOW ✦ THE SLOW TRANSIT · AHANGAMA · 10–14 TRAVELLERS · HOSTED EXPERIENCE ✦ L&amp;F EXPERIENCE — CURATION OPEN ALL YEAR ✦ </span>
          <span>SRI LANKA — RELEARN THE ART OF SLOW TRAVEL · AUG 20–26, 2026 · BLOCK YOUR SLOT NOW ✦ THE SLOW TRANSIT · AHANGAMA · 10–14 TRAVELLERS · HOSTED EXPERIENCE ✦ L&amp;F EXPERIENCE — CURATION OPEN ALL YEAR ✦ </span>
        </div>
      </div>
    </section>
  );
}
