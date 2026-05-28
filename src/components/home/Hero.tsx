import React from 'react';
import Image from 'next/image';
import { HandUnderline } from '../illustrations/hand';
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
              className="text-[clamp(70px,3.2vw,80px)] leading-[1.05] text-[var(--ink)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Travel that
            </span>
            <span
              className="text-[clamp(70px,3.2vw,80px)] leading-[1.05] text-[var(--ink)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              feels like
            </span>
            <span className="block w-fit">
              <span
                className="hero-script leading-[0.88] block"
                style={{ fontSize: 'clamp(72px, 11.5vw, 165px)', paddingLeft: '0.88em', margin: '-0.31em' }}
              >
                a long exhale
              </span>
            </span>
          </h1>

          <p className="t-body-lg text-[var(--ink-soft)] max-w-[500px] mb-10 leading-relaxed">
            Curated slow travel experiences, intimate gatherings, and restorative journeys for people who need a softer way to experience life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto mt-4">
            <a href="/experiences"><MagneticButton>Explore Gatherings</MagneticButton></a>
            <a href="/plan-with-us" className="btn-ghost-hand">
              Plan a personal journey
              <HandUnderline className="btn-underline" />
            </a>
          </div>
        </div>

        {/* Right — Hero Image */}
        <div className="w-full lg:w-[45%] mt-4 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src="/images/hero.png"
            alt="Lost & Found travel"
            width={600}
            height={615}
            className="w-full max-w-[600px] h-auto"
            priority
          />
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
