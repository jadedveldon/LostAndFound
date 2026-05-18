import React from 'react';
import { Button } from '../ui/Button';

export function ForTeamsBand() {
  return (
    <section className="w-full band-moss py-32 relative overflow-hidden">
      <div className="container flex flex-col items-center text-center max-w-3xl relative z-10">
        <span className="t-eyebrow text-[var(--paper)]/80 mb-6 uppercase tracking-widest">
          FOR FOUNDERS, P&C LEADS, FOUNDER'S OFFICES
        </span>
        <h2 className="t-h1 text-[var(--paper)] mb-8">
          Plan an offsite that doesn't feel like an offsite.
        </h2>
        <p className="t-body-lg text-[var(--paper)]/90 mb-12 max-w-xl">
          We design custom retreats for teams of 8–30, in places your team will remember more than the slide deck.
        </p>
        <Button variant="primary" className="bg-[var(--clay)] text-[var(--paper)] hover:bg-[var(--clay-deep)] border-none">
          Tell us about your team
        </Button>
      </div>

      {/* Decorative texture overlay */}
      <div className="absolute inset-0 paper-texture opacity-30 mix-blend-multiply pointer-events-none" />
      
      {/* Hand-drawn squiggle */}
      <svg className="absolute bottom-12 right-[10%] text-[var(--wheat)] opacity-80 w-24 h-6 rotate-[-5deg]" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 10 Q 20 0, 35 15 T 65 5 T 95 15" />
      </svg>
    </section>
  );
}
