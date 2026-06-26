import React from 'react';
import Link from 'next/link';

const archetypes = [
  'Emotionally exhausted',
  'People in transition',
  'Over-thinkers',
  'Recovering high achievers',
  'Creatives',
  'Quiet romantics',
  'Burnt-out CEOs & Executives',
];

export function WhoWeVibeWith() {
  return (
    <section className="bg-[var(--paper-deep)] relative overflow-hidden py-10 lg:py-14">
      <div className="container flex flex-col items-center max-w-4xl relative">

        {/* Large script heading */}
        <h2
          className="text-[clamp(64px,12vw,140px)] text-[var(--clay)] text-center leading-[0.85] mb-10 relative z-20 rotate-[-1.5deg] select-none"
          style={{ fontFamily: 'var(--font-brush)' }}
        >
          who we
          <br />
          vibe with
        </h2>

        {/* Archetypes */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-4 mb-12 relative z-20 group text-center max-w-2xl px-4">
          {archetypes.map((item, idx) => (
            <React.Fragment key={idx}>
              <Link
                href={`/who-we-vibe-with#${item.replace(/[\s&]+/g, '-')}`}
                className="t-h3-italic text-[var(--denim)] text-[clamp(16px,2vw,24px)] hover:!opacity-100 group-hover:opacity-40 transition-opacity duration-fast py-1"
              >
                {item}
              </Link>
              {idx < archetypes.length - 1 && (
                <span className="t-h3-italic text-[var(--denim)] text-[clamp(16px,2vw,24px)] opacity-30 py-1 select-none">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
