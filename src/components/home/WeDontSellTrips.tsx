import React from 'react';

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

        {/* Right Column — Editorial Image Collage */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6">

          {/* Row 1 — Large image with overlay + small polaroid */}
          <div className="flex gap-5 items-start">

            {/* Large image with caption overlay */}
            <div className="relative w-[58%] rotate-[-1deg] overflow-hidden shadow-[var(--shadow-card)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=700&auto=format&fit=crop"
                alt="Quiet beach, wet hair"
                className="w-full h-[220px] sm:h-[260px] object-cover"
                style={{ filter: 'saturate(0.88) contrast(1.03) sepia(0.06)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span
                  className="text-[var(--paper)] text-base sm:text-lg leading-tight block"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  The afternoon nobody checked their phone
                </span>
              </div>
            </div>

            {/* Small polaroid-style — wine glasses */}
            <div className="w-[38%] mt-8 rotate-[3deg]">
              <div className="bg-[var(--paper-warm)] p-2.5 pb-8 shadow-[var(--shadow-polaroid)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=400&auto=format&fit=crop"
                  alt="Half-finished wine glasses"
                  className="w-full h-[120px] sm:h-[140px] object-cover"
                  style={{ filter: 'saturate(0.9) sepia(0.08)' }}
                />
              </div>
              <p
                className="text-[var(--clay)] text-sm sm:text-base mt-2 text-center leading-tight rotate-[-1deg]"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Dinner that turned into a four-hour conversation
              </p>
            </div>
          </div>

          {/* Row 2 — Train window + sleeping in car */}
          <div className="flex gap-5 items-end ml-4 sm:ml-8">

            {/* Train window — text-over-image */}
            <div className="w-[45%] relative overflow-hidden rotate-[1deg] shadow-[var(--shadow-card)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?q=80&w=500&auto=format&fit=crop"
                alt="Train window blur"
                className="w-full h-[160px] sm:h-[200px] object-cover"
                style={{ filter: 'saturate(0.75) contrast(1.05) sepia(0.1) brightness(0.9)' }}
              />
              <div className="absolute inset-0 bg-[var(--ink)]/35 flex items-center justify-center p-3">
                <span
                  className="text-[var(--paper)] text-sm sm:text-base leading-snug text-center"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  The first moment your brain finally went quiet
                </span>
              </div>
            </div>

            {/* Sleeping in a car */}
            <div className="w-[50%]">
              <div className="relative overflow-hidden rotate-[-2deg] shadow-[var(--shadow-polaroid)] bg-[var(--paper-warm)] p-2 pb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=500&auto=format&fit=crop"
                  alt="Someone asleep in a car ride"
                  className="w-full h-[140px] sm:h-[170px] object-cover"
                  style={{ filter: 'saturate(0.85) sepia(0.07)' }}
                />
              </div>
              <p
                className="text-sm sm:text-base mt-2 ml-1 leading-tight text-[var(--clay)]"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                &ldquo;The nap nobody apologised for&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
