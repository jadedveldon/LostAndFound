import React from 'react';
import Link from 'next/link';

const archetypes = [
  'emotionally exhausted',
  'people in transition',
  'over-thinkers',
  'recovering high achievers',
  'creatives',
  'quiet romantics',
  'burnt-out CEOs & executives',
];

export function WhoWeVibeWith() {
  return (
    <section className="bg-[var(--paper-deep)] relative overflow-hidden py-24 lg:py-32">
      <div className="container flex flex-col items-center max-w-4xl relative">

        {/* Eyebrow */}
        <span className="t-eyebrow mb-6 text-center text-[var(--ink-mute)]">WHO WE VIBE WITH</span>

        {/* Large script heading */}
        <h2
          className="text-[clamp(64px,12vw,140px)] text-[var(--clay)] text-center leading-[0.85] mb-10 relative z-20 rotate-[-1.5deg] select-none"
          style={{ fontFamily: 'var(--font-script)' }}
        >
          who we
          <br />
          vibe with
        </h2>

        {/* Archetypes */}
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 mb-12 relative z-20 group text-center max-w-2xl px-4">
          {archetypes.map((item, idx) => (
            <React.Fragment key={idx}>
              <Link
                href={`/who-we-vibe-with#${item.replace(/[\s&]+/g, '-')}`}
                className="t-h3-italic text-[var(--denim)] text-[clamp(16px,2vw,24px)] hover:!opacity-100 group-hover:opacity-40 transition-opacity duration-fast py-1"
              >
                {item}
              </Link>
              {idx < archetypes.length - 1 && (
                <span className="t-h3-italic text-[var(--denim)] text-[clamp(16px,2vw,24px)] opacity-30 py-1">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Sub-line */}
        <p
          className="text-[var(--ink-soft)] italic text-center relative z-20 text-[clamp(16px,1.3vw,20px)]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          What are you craving more of lately?
        </p>

      </div>
    </section>
  );
}
