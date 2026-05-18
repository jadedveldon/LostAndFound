import React from 'react';
import { Polaroid } from '../ui/Polaroid';
import { Button } from '../ui/Button';

export function DecisionDetoxBand() {
  return (
    <section className="w-full band-clay py-32 relative overflow-hidden">
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Text */}
        <div className="w-full lg:w-[55%] flex flex-col items-start z-10">
          <h2 className="t-h1 mb-8 text-[var(--paper)]">Introducing — The Decision Detox</h2>
          <p className="t-body-lg text-[var(--paper)]/90 mb-10 max-w-lg leading-relaxed">
            Our response to a world that asks too much of your mind. Five days where every decision has been made for you. Where to wake. What to eat. Where to walk. The only thing left for you is to be there.
          </p>
          <Button variant="secondary" className="border-[var(--paper)] text-[var(--paper)] hover:bg-[var(--paper)] hover:text-[var(--clay)]">
            Read about the Detox
          </Button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10">
          <Polaroid 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"
            alt="Quiet beach moment"
            tilt={-3}
            className="w-[280px] sm:w-[320px] shadow-elevated"
          />
        </div>
      </div>

      {/* Decorative texture to prevent flat color */}
      <div className="absolute inset-0 paper-texture opacity-20 mix-blend-multiply pointer-events-none" />
    </section>
  );
}
