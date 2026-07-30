import React from 'react';
import { TreatedImage } from '@/components/ui/TreatedImage';
import { SectionVisible } from '@/components/analytics/SectionVisible';

export function Philosophy() {
  return (
    <section className="bg-[var(--paper-deep)] relative overflow-hidden py-20 lg:py-28">
      <SectionVisible name="our_philosophy" />
      <div className="container flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* Left column — Philosophy text + note */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <span className="t-eyebrow mb-4">OUR PHILOSOPHY</span>
          <h3 className="t-h3-italic mb-6">A different philosophy of travel.</h3>

          <p className="t-body-lg text-[var(--ink)] leading-relaxed mb-6 max-w-[520px]">
            Modern life asks us to make hundreds of decisions every day. We believe travel should be the opposite. A chance to slow down, hand over the planning, and simply experience what&apos;s in front of you. Whether it&apos;s sharing a meal with locals, discovering a hidden corner of a city, or spending an afternoon doing absolutely nothing, the best journeys aren&apos;t built around ticking off attractions, they&apos;re built around moments that make you feel more connected to the world, the people around you, and yourself.
          </p>

          <p className="t-h3-italic mb-10 max-w-[520px]">
            Every destination has a rhythm of its own. We believe the best way to experience it is to slow down enough to notice it.
          </p>

          {/* A Note From Us */}
          <div className="border-t border-[var(--ink)]/10 pt-8">
            <span className="t-eyebrow mb-4 block">A NOTE FROM US</span>
            <blockquote className="flex flex-col gap-4">
              <p className="t-body-lg italic text-[var(--ink)] leading-relaxed max-w-[520px]">
                &ldquo;We started Lost &amp; Found because we realised the best parts of our lives always happened when we stepped away from routine. Not because we travelled far, but because travel reminded us how we wanted to live.
              </p>
              <p className="t-body-lg italic text-[var(--ink)] leading-relaxed max-w-[520px]">
                Today, everything we build is designed around that feeling. Less rush. More presence. Better conversations. And journeys that stay with you long after you&apos;ve unpacked your bags.
              </p>
              <p className="t-body-lg italic text-[var(--ink)] leading-relaxed max-w-[520px]">
                I hope you find a little bit of yourself along the way too.&rdquo;
              </p>
            </blockquote>
            <span className="t-mono text-[var(--ink-mute)] tracking-widest uppercase text-xs mt-5 block">
              — Tanya &amp; Keerthi, Co-Founders
            </span>
          </div>
        </div>

        {/* Right column — Founder image */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:sticky lg:top-32">
          <TreatedImage
            src="/images/Tanya.png"
            alt="Tanya, co-founder of Lost & Found"
            style={{ aspectRatio: '4 / 5', objectFit: 'cover', height: undefined }}
            className="w-full max-w-[420px]"
          />
          <p
            className="text-[var(--ink-mute)] text-sm text-center mt-3"
            style={{ fontFamily: 'var(--font-brush)' }}
          >
            tanya &amp; keerthi &mdash; co-founders
          </p>
        </div>
      </div>
    </section>
  );
}
