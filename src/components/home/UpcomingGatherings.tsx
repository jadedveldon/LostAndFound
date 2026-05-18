import React from 'react';
import Link from 'next/link';

export function UpcomingGatherings() {
  return (
    <section className="bg-[var(--paper)] pt-20 pb-20 lg:pt-28 lg:pb-28">

      {/* Section Header */}
      <div className="container mb-12 lg:mb-16">
        <span className="t-eyebrow block mb-4">UPCOMING GATHERINGS · 2026</span>
        <p className="t-h3-italic text-[var(--denim)] max-w-lg text-[clamp(18px,2vw,26px)] leading-snug">
          For people craving slower mornings, good company, and a few days away from constantly holding everything together.
        </p>
      </div>

      {/* Cinematic Editorial Feature — stacked on mobile, side-by-side on desktop */}
      <div className="container">
        {/* Mobile: stacked. Desktop: side-by-side via flex */}
        <div className="flex flex-col lg:flex-row">

          {/* Left — Image */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?q=80&w=1200&auto=format&fit=crop"
              alt="Ahangama, Sri Lanka coastline"
              className="w-full h-[300px] sm:h-[380px] lg:h-full object-cover block"
              style={{ filter: 'saturate(0.9) contrast(1.03) sepia(0.05)' }}
            />
          </div>

          {/* Right — Content */}
          <div className="w-full lg:w-1/2 bg-[var(--paper-deep)] px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-14 flex flex-col justify-center">

            <span className="t-mono text-[10px] uppercase tracking-[0.2em] text-[var(--clay)] mb-3 block">
              AHANGAMA, SRI LANKA
            </span>

            <h2
              className="text-[clamp(28px,3vw,48px)] leading-[1.08] font-normal text-[var(--ink)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The Slow Transit
            </h2>

            <p className="t-body text-[var(--ink-soft)] mb-5 leading-relaxed max-w-[380px]">
              6 days of slow travel, shared meals, ocean air, thoughtful conversations, and the kind of rest that doesn&apos;t end when the trip does.
            </p>

            {/* Dates + Price */}
            <div className="flex gap-6 mb-5 border-t border-[var(--ink)]/10 pt-4">
              <div className="flex flex-col">
                <span className="t-mono text-[10px] uppercase tracking-widest text-[var(--ink-mute)] mb-0.5">Dates</span>
                <span className="t-body text-[var(--ink)]">Aug 20–26, 2026</span>
              </div>
              <div className="flex flex-col">
                <span className="t-mono text-[10px] uppercase tracking-widest text-[var(--ink-mute)] mb-0.5">From</span>
                <span className="t-body text-[var(--ink)]">INR 95,000</span>
              </div>
            </div>

            {/* "For" */}
            <div className="mb-4">
              <span className="t-mono text-[10px] uppercase tracking-widest text-[var(--ink-mute)] block mb-1">For</span>
              <p className="t-body-italic text-[var(--denim)] text-sm">
                creatives / founders / over-thinkers / people in transition
              </p>
            </div>

            {/* Cohort info */}
            <p className="t-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)] mb-5">
              10–14 travellers · hosted experience
            </p>

            {/* CTA */}
            <Link
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--clay)] text-[var(--paper)] t-mono text-xs uppercase tracking-widest hover:bg-[var(--clay-deep)] transition-colors duration-fast w-fit group"
            >
              Reserve Your Seat
              <span className="group-hover:translate-x-1 transition-transform duration-fast">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
