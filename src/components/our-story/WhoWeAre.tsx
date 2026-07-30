import React from 'react';
import { SectionVisible } from '@/components/analytics/SectionVisible';

export function WhoWeAre() {
  return (
    <section className="bg-[var(--paper)] relative overflow-hidden py-20 lg:py-28">
      <SectionVisible name="who_we_are" />
      <div className="container max-w-3xl mx-auto">
        <span className="t-eyebrow mb-4 block">WHO WE ARE</span>
        <h2
          className="text-[clamp(28px,4vw,44px)] font-normal text-[var(--ink)] leading-[1.15] mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          We&rsquo;re not travel agents. We&rsquo;re experience designers.
        </h2>

        <div className="flex flex-col gap-5">
          <p className="t-h3-italic">
            Every journey we create starts with one question:{' '}
            <em>How do you want to feel when you come back home?</em>
          </p>
          <p className="t-body-lg text-[var(--ink)] leading-relaxed">
            Some people need rest. Some need perspective. Some want to celebrate a new chapter. Others simply want someone else to make the decisions for once.
          </p>
          <p className="t-body-lg text-[var(--ink)] leading-relaxed font-semibold">
            Whether it&apos;s a honeymoon, a solo escape, a family holiday, a workcation, or one of our community gatherings, every experience is designed around people, not just places.
          </p>
          <p className="t-body-lg text-[var(--ink)] leading-relaxed">
            Because the destination is only half the story.
          </p>
        </div>
      </div>
    </section>
  );
}
