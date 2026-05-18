import React from 'react';

const reviews = [
  {
    quote: "I didn't know how tired I was until I didn't have to plan a single thing. This was a reset I didn't know I needed.",
    name: 'Mona Champ',
    context: 'L&F Experience — Jaipur',
  },
  {
    quote: "The first trip where neither of us had to carry the mental load. We just showed up and let it happen. Pure relief.",
    name: 'Grace & Joel',
    context: 'The Slow Transit — Ahangama',
  },
  {
    quote: "They understood what we wanted before we even finished explaining it. My family is still talking about that trip.",
    name: 'Siddharth & family',
    context: 'Family Trip — Coorg',
  },
  {
    quote: "We've done corporate offsites before — nothing has come close to this. The team actually disconnected. Properly.",
    name: 'Konidela family',
    context: 'Corporate Planning — Goa',
  },
  {
    quote: "It felt like traveling with a friend who knew every right turn. Not a tourist trap in sight. Just the real thing.",
    name: 'Anonymous',
    context: 'Corporate Planning',
  },
];

export function ReviewsCarousel() {
  return (
    <section className="bg-[var(--paper)] py-20 lg:py-28 overflow-hidden">
      <div className="container mb-10 lg:mb-14">
        <span className="t-eyebrow block mb-3">EXPERIENCES</span>
        <h2
          className="text-[clamp(30px,3.5vw,48px)] font-normal text-[var(--ink)] leading-tight max-w-sm"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Words from the road
        </h2>
      </div>

      <div className="container">
        <div className="flex flex-col">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="py-8 lg:py-10 border-b border-[var(--paper-deep)] last:border-b-0 flex flex-col md:flex-row gap-4 md:gap-12 md:items-baseline"
            >
              {/* Quote */}
              <div className="flex-1">
                <p
                  className="text-[clamp(18px,1.8vw,26px)] text-[var(--ink)] leading-[1.4] italic"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="md:w-[200px] shrink-0 flex flex-col gap-0.5 md:pt-1">
                <span className="t-body font-medium text-[var(--ink)]">{rev.name}</span>
                <span className="t-mono text-[10px] text-[var(--ink-mute)] uppercase tracking-widest">{rev.context}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
