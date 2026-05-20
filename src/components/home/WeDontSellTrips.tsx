import React from 'react';
import { Polaroid } from '../ui/Polaroid';

export function WeDontSellTrips() {
  return (
    <section className="bg-[var(--paper)] relative overflow-hidden py-20 lg:py-28">
      <div className="container flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* Left Column — Text */}
        <div className="w-full lg:w-[45%] flex flex-col">
          <span className="t-eyebrow mb-4">THE PHILOSOPHY</span>

          <div className="mb-8">
            <h3 className="t-h3-italic mb-1">We Don&apos;t Sell Trips —</h3>
            <h2
              className="text-[clamp(32px,4vw,52px)] font-normal text-[var(--ink)] leading-[1.05]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              We Curate Breaks
            </h2>
          </div>

          <p className="t-body-lg text-[var(--ink)] leading-relaxed mb-5 max-w-[500px]">
            Decision fatigue is one of the quietest exhaustions of modern life. Founders, creatives, managers, people constantly carrying responsibilities — we&apos;ve seen how tiring it becomes to always be &ldquo;on.&rdquo; Always deciding.
          </p>
          <p className="t-body-lg text-[var(--ink)] leading-relaxed mb-5 max-w-[500px]">
            So we wondered: What happens when someone else takes the driver&apos;s seat for your break? Someone who understands pacing, intention, and the kind of experiences that don&apos;t just look good, they feel good too.
          </p>
          <p className="t-body-lg text-[var(--ink)] leading-relaxed mb-8 max-w-[500px]">
            So we created journeys where the mental load softens, the pace slows, and all you really have to do… is arrive.
          </p>

          <span className="t-mono text-[var(--ink-mute)] tracking-widest uppercase text-xs">
            — Tanya &amp; Keerthi, Founders
          </span>
        </div>

        {/* Right Column — Editorial Polaroid Scatter */}
        <div className="w-full lg:w-[55%] flex flex-col gap-10">

          {/* Row 1 — Two side-by-side Polaroids */}
          <div className="flex gap-6 items-start justify-center sm:justify-start">
            
            {/* Polaroid A */}
            <div className="w-[52%]">
              <Polaroid
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=700&auto=format&fit=crop"
                alt="Quiet beach, wet hair"
                caption="The afternoon nobody checked their phone"
                tilt="-2deg"
                showTape={true}
                tapeRotate="-4deg"
                className="w-full shadow-elevated"
              />
            </div>

            {/* Polaroid B */}
            <div className="w-[44%] mt-8">
              <Polaroid
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=400&auto=format&fit=crop"
                alt="Half-finished wine glasses"
                caption="Dinner that turned into a four-hour conversation"
                tilt="4deg"
                className="w-full shadow-elevated"
              />
            </div>
          </div>

          {/* Row 2 — Two side-by-side Polaroids */}
          <div className="flex gap-6 items-start justify-center sm:justify-start ml-4 sm:ml-12">

            {/* Polaroid C */}
            <div className="w-[45%]">
              <Polaroid
                src="https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?q=80&w=500&auto=format&fit=crop"
                alt="Train window blur"
                caption="The first moment your brain finally went quiet"
                tilt="1deg"
                showTape={true}
                tapeRotate="5deg"
                className="w-full shadow-elevated"
              />
            </div>

            {/* Polaroid D */}
            <div className="w-[47%] mt-4">
              <Polaroid
                src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=500&auto=format&fit=crop"
                alt="Someone asleep in a car ride"
                caption="The nap nobody apologised for"
                tilt="-3deg"
                className="w-full shadow-elevated"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
