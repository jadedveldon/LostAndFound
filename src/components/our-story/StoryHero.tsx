import React from 'react';
import { SectionVisible } from '@/components/analytics/SectionVisible';

export function StoryHero() {
  return (
    <section className="bg-[var(--paper)] relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-28">
      <SectionVisible name="story_hero" />
      <div className="container max-w-3xl text-center mx-auto">
        <span className="t-eyebrow mb-5 block">OUR STORY</span>
        <h1
          className="text-[clamp(36px,6vw,72px)] font-normal text-[var(--ink)] leading-[1.05] mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Travel that gives something back
        </h1>
        <p className="t-body-lg text-[var(--ink-soft)] leading-relaxed max-w-xl mx-auto">
          Curated journeys designed to help you slow down, reconnect with what matters, and experience the world at a gentler pace.
        </p>
      </div>
    </section>
  );
}
