import React from 'react';
import Image from 'next/image';

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

        {/* Right Column — Philosophy Image */}
        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
          <Image
            src="/images/philosophy.png"
            alt="Lost & Found philosophy"
            width={730}
            height={580}
            className="w-full max-w-[730px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
