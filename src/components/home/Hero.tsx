import React from 'react';
import { Button } from '../ui/Button';
import { Polaroid } from '../ui/Polaroid';

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
            <span
              className="text-[clamp(64px,9vw,120px)] leading-[0.88] text-[var(--clay)] ml-0 lg:ml-8 rotate-[-2deg] block mt-1"
              style={{ fontFamily: 'var(--font-script)' }}
            >
              a long exhale.
            </span>
          </h1>

          <p className="t-body-lg text-[var(--ink-soft)] max-w-[500px] mb-10 leading-relaxed">
            Curated slow travel experiences, intimate gatherings, and restorative journeys for people who need a softer way to experience life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary">Explore Gatherings</Button>
            <Button variant="secondary">Plan a personal journey</Button>
          </div>
        </div>

        {/* Right — Mixed Image Collage */}
        <div className="w-full lg:w-[45%] relative h-[350px] sm:h-[400px] lg:h-[480px] mt-4 lg:mt-0">

          {/* Large polaroid — Sri Lanka */}
          <div className="absolute right-[8%] top-[5%] z-20">
            <Polaroid
              src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop"
              alt="Ahangama coast"
              caption="Ahangama, last spring"
              tilt={-3}
              className="w-[170px] sm:w-[200px] lg:w-[220px]"
            />
          </div>

          {/* Small raw image — slow morning */}
          <div className="absolute left-[2%] top-[18%] z-10 w-[120px] sm:w-[140px] lg:w-[150px] photo-treatment shadow-[var(--shadow-card)] rotate-[2deg]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&auto=format&fit=crop"
              alt="Quiet morning meditation"
              className="w-full h-auto"
            />
          </div>

          {/* Text-over-image — Kerala */}
          <div className="absolute right-[4%] bottom-[12%] z-30 w-[140px] sm:w-[160px] lg:w-[170px] rotate-[1deg] overflow-hidden shadow-[var(--shadow-polaroid)]">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=400&auto=format&fit=crop"
                alt="Kerala backwaters"
                className="w-full h-[100px] sm:h-[110px] object-cover"
                style={{ filter: 'saturate(0.85) contrast(1.05) sepia(0.08)' }}
              />
              <div className="absolute inset-0 bg-[var(--ink)]/40 flex items-end p-2">
                <span className="text-[var(--paper)] text-sm leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Kerala, monsoon
                </span>
              </div>
            </div>
          </div>

          {/* Handwritten label */}
          <div className="absolute left-[18%] bottom-[6%] z-30 rotate-[-4deg]">
            <span className="text-[var(--clay)] text-lg lg:text-xl" style={{ fontFamily: 'var(--font-script)' }}>
              different places,
            </span>
            <br />
            <span className="text-[var(--clay)] text-lg lg:text-xl" style={{ fontFamily: 'var(--font-script)' }}>
              one feeling.
            </span>
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
