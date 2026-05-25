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
    <section className="py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: '#eae9e3' }}>
      <div className="container mb-10 lg:mb-14">
        <span className="t-eyebrow block mb-3">TESTIMONIALS</span>
        <h2
          className="text-[clamp(30px,3.5vw,48px)] font-normal text-[var(--ink)] leading-tight max-w-sm"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Words from the road
        </h2>
      </div>

      <div className="container">
        {/* Responsive card grid: 1 col → 2 col (md) → 3 col (lg).
            flex-wrap with a fixed item width gives us "justify-center" so
            any orphan cards on the last row are automatically centered. */}
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8 flex flex-col border"
              style={{
                backgroundColor: 'var(--paper-deep)',
                borderColor: 'rgba(0,0,0,0.08)',
              }}
            >
              {/* Decorative opening quote mark */}
              <div
                className="mb-4 leading-none select-none"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '48px',
                  color: 'var(--clay)',
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                &#10077;
              </div>

              {/* Quote body — grows to fill available space */}
              <p
                className="flex-1 italic text-[var(--ink)] leading-[1.6] mb-6"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(16px, 1.15vw, 18px)',
                }}
              >
                {rev.quote}
              </p>

              {/* Attribution — pinned to bottom, separated by a thin rule */}
              <div
                className="pt-5 flex flex-col gap-1"
                style={{ borderTop: '1px solid rgba(0,0,0,0.10)' }}
              >
                <span
                  className="font-semibold text-[var(--ink)]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(14px,1vw,15px)' }}
                >
                  {rev.name}
                </span>
                <span className="t-mono text-[var(--ink-mute)] uppercase">
                  {rev.context}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
