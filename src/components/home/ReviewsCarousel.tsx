import React from 'react';
import Image from 'next/image';
import { SectionVisible } from '@/components/analytics/SectionVisible';

const reviews = [
  {
    quote: "I didn't know how tired I was until I didn't have to plan a single thing. This was a reset I didn't know I needed.",
    name: 'Mona & Champ',
    context: 'L&F Experience — Jaipur',
    image: null,
  },
  {
    quote: "The first trip where neither of us had to carry the mental load. We just showed up and let it happen. Pure relief.",
    name: 'Grace & Joel',
    context: 'The Slow Transit — Ahangama',
    image: null,
  },
  {
    quote: "They understood what we wanted before we even finished explaining it. My family is still talking about that trip.",
    name: 'Siddharth & family',
    context: 'Family Trip — Coorg',
    image: null,
  },
  {
    quote: "We've done corporate offsites before — nothing has come close to this. The team actually disconnected. Properly.",
    name: 'Konidela family',
    context: 'Corporate Planning — Goa',
    image: null,
  },
  {
    quote: "It felt like traveling with a friend who knew every right turn. Not a tourist trap in sight. Just the real thing.",
    name: 'Anonymous',
    context: 'Corporate Planning',
    image: null,
  },
];

export function ReviewsCarousel() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden relative" style={{ backgroundColor: '#eae9e3' }}>
      <SectionVisible name="testimonials" />
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
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col border overflow-hidden"
              style={{
                backgroundColor: 'var(--paper-deep)',
                borderColor: 'rgba(0,0,0,0.08)',
              }}
            >
              {/* Photo area */}
              <div
                className="w-full aspect-[4/3] relative overflow-hidden"
                style={{ backgroundColor: 'rgba(0,0,0,0.07)' }}
              >
                {rev.image ? (
                  <Image
                    src={rev.image}
                    alt={rev.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <rect x="4" y="4" width="40" height="40" rx="2" stroke="rgba(0,0,0,0.2)" strokeWidth="2" strokeDasharray="4 3" fill="none" />
                      <circle cx="24" cy="19" r="7" fill="rgba(0,0,0,0.15)" />
                      <ellipse cx="24" cy="38" rx="13" ry="8" fill="rgba(0,0,0,0.15)" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="p-8 flex flex-col flex-1">
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

                {/* Quote body */}
                <p
                  className="flex-1 italic text-[var(--ink)] leading-[1.6] mb-6"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(16px, 1.15vw, 18px)',
                  }}
                >
                  {rev.quote}
                </p>

                {/* Attribution */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
