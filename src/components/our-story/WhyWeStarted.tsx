import React from 'react';
import { SectionVisible } from '@/components/analytics/SectionVisible';

export function WhyWeStarted() {
  return (
    <section className="bg-[var(--paper-deep)] relative overflow-hidden py-20 lg:py-28">
      <SectionVisible name="why_we_started" />
      <div className="container max-w-3xl mx-auto">
        <span className="t-eyebrow mb-4 block">WHY WE STARTED</span>
        <h2
          className="text-[clamp(28px,4vw,44px)] font-normal text-[var(--ink)] leading-[1.15] mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Somewhere along the way, travel became another checklist, and that&rsquo;s not okay.
        </h2>

        <div className="flex flex-col gap-5">
          <p className="t-body-lg text-[var(--ink)] leading-relaxed">
            We realised that most people weren&apos;t coming back from holidays feeling rested.
          </p>
          <p className="t-body-lg text-[var(--ink)] leading-relaxed">
            They were coming back with incredible photos, but very little space to remember what the trip actually felt like.
          </p>
          <p className="t-body-lg text-[var(--ink)] leading-relaxed">
            Travel had become another project.
          </p>
          <p className="t-body-lg text-[var(--ink)] leading-relaxed">
            Research the flights. Compare twenty hotels. Build the perfect itinerary. Book the &ldquo;must-do&rdquo; experiences. Try to see everything. And somewhere in between,{' '}
            <em className="text-[var(--denim)] italic">
              people stopped experiencing the place they had travelled so far to visit.
            </em>
          </p>
          <p className="t-body-lg text-[var(--ink)] leading-relaxed">
            Lost &amp; Found was born from a simple belief:{' '}
            <strong className="font-semibold">
              Travel shouldn&apos;t feel like a stressful project you have to excel in.
            </strong>{' '}
            It should help you slow down.
          </p>
          <p className="t-body-lg text-[var(--ink)] leading-relaxed">
            Think clearly. Meet wonderful people. Learn from different cultures. And return home feeling a little lighter than when you left.
          </p>
        </div>
      </div>
    </section>
  );
}
