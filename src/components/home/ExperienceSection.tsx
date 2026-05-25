import React from 'react';
import Link from 'next/link';

const services = [
  'Complete personal itinerary design',
  'Local experiences',
  'Restaurant & local activity recommendations',
  'Stays',
  'Honeymoons',
  'Corporate Events',
  'Family Trips',
  'Friends Trip — Guided / Non-guided',
];

export function ExperienceSection() {
  return (
    <section className="bg-[var(--paper-deep)] relative overflow-hidden py-24 lg:py-32">
      <div className="container flex flex-col items-center max-w-4xl relative">

        {/* Eyebrow */}
        <span className="t-eyebrow mb-6 text-center text-[var(--ink-mute)]">THE EXPERIENCE</span>

        {/* Large display heading */}
        <h2
          className="text-[clamp(40px,8vw,100px)] text-[var(--clay)] text-center leading-[0.9] mb-10 relative z-20 rotate-[-1deg] select-none"
          style={{ fontFamily: 'var(--font-brush)' }}
        >
          We can plan the whole trip, or just the parts you want to remember forever
        </h2>

        {/* Services list */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-4 mb-12 relative z-20 group text-center max-w-2xl px-4">
          {services.map((item, idx) => (
            <React.Fragment key={idx}>
              <span
                className="t-h3-italic text-[var(--denim)] text-[clamp(16px,2vw,24px)] hover:!opacity-100 group-hover:opacity-40 transition-opacity duration-fast py-1"
              >
                {item}
              </span>
              {idx < services.length - 1 && (
                <span className="t-h3-italic text-[var(--denim)] text-[clamp(16px,2vw,24px)] opacity-30 py-1 select-none">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Sub-line */}
        <p
          className="text-[var(--ink-soft)] italic text-center relative z-20 text-[clamp(16px,1.3vw,20px)] mb-8"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          what are you looking to take off your plate?
        </p>

        {/* Bottom link */}
        <Link
          href="/experience"
          className="t-h3-italic text-[var(--denim)] text-[clamp(16px,2vw,24px)] hover:text-[var(--denim-deep)] transition-colors relative z-20"
        >
          Learn how it works ↗
        </Link>

      </div>
    </section>
  );
}
