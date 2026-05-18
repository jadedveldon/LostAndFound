import React from 'react';
import Link from 'next/link';

const services = [
  { id: '01', name: 'Complete personal itinerary design' },
  { id: '02', name: 'Local experiences' },
  { id: '03', name: 'Restaurant & local activity recommendations' },
  { id: '04', name: 'Stays' },
  { id: '05', name: 'Honeymoons' },
  { id: '06', name: 'Corporate Events' },
  { id: '07', name: 'Family Trips' },
  { id: '08', name: 'Friends Trip — Guided / Non-guided' },
];

export function ModularCuration() {
  return (
    <section className="bg-[var(--paper-deep)] py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Left — Text */}
          <div className="w-full lg:w-[36%] flex flex-col">
            <span className="t-eyebrow mb-4">THE EXPERIENCE</span>
            <h2
              className="text-[clamp(28px,3.2vw,44px)] leading-[1.12] font-normal text-[var(--ink)] mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              We can plan the whole trip, or just the parts you want to remember forever
            </h2>
            <p className="t-h3-italic text-[var(--denim)] mb-8 text-[clamp(16px,1.4vw,20px)]">
              what we take off your plate →
            </p>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 t-body-italic text-[var(--denim)] hover:text-[var(--denim-deep)] transition-colors w-fit group"
            >
              Learn how it works
              <span className="group-hover:translate-x-1 transition-transform duration-fast">↗</span>
            </Link>
          </div>

          {/* Right — Services Grid */}
          <div className="w-full lg:w-[64%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-[var(--ink)]/8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-[var(--paper-deep)] hover:bg-[var(--paper)] transition-colors duration-medium group flex items-start gap-4 p-6 sm:p-7 cursor-default"
                >
                  <span className="t-mono text-[10px] text-[var(--clay)] uppercase tracking-widest shrink-0 mt-0.5">
                    {service.id}
                  </span>
                  <span
                    className="text-[var(--ink)] text-base sm:text-lg leading-snug group-hover:text-[var(--clay)] transition-colors duration-fast"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
