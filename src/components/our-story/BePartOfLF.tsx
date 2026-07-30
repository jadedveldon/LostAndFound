import React from 'react';
import { TrackableLink } from '@/components/ui/TrackableLink';
import { SectionVisible } from '@/components/analytics/SectionVisible';

const collaborators = [
  'a local artist or maker',
  'a boutique hotel',
  'a café owner',
  'a chef',
  'a photographer',
  'a storyteller',
  'a wellness practitioner',
  'a creator',
  'or simply someone who loves bringing people together',
];

export function BePartOfLF() {
  return (
    <section className="bg-[var(--paper)] relative overflow-hidden py-20 lg:py-28">
      <SectionVisible name="be_part_of_lf" />
      <div className="container max-w-3xl mx-auto">
        <span className="t-eyebrow mb-4 block">BE PART OF LOST &amp; FOUND</span>
        <h2
          className="text-[clamp(28px,4vw,44px)] font-normal text-[var(--ink)] leading-[1.15] mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          This is a community as much as it is a travel company.
        </h2>

        <p className="t-body-lg text-[var(--ink)] leading-relaxed mb-6">
          We&apos;re always looking to meet people who believe travel can be slower, kinder, and more meaningful.
        </p>

        <p className="t-body-lg text-[var(--ink)] leading-relaxed mb-4">Whether you&apos;re:</p>

        <ul className="flex flex-col gap-2 mb-6">
          {collaborators.map((item) => (
            <li key={item} className="t-h3-italic text-[var(--denim)]">
              {item}
            </li>
          ))}
        </ul>

        <p className="t-body-lg text-[var(--ink)] leading-relaxed mb-6">
          we&apos;d love to hear from you. The best experiences are always created together.
        </p>

        <p className="t-body-lg text-[var(--ink)] leading-relaxed font-semibold mb-10">
          Let&apos;s build them together.
        </p>

        <TrackableLink
          href="mailto:curator@lostandfoundtravel.in?subject=I'd%20like%20to%20collaborate"
          className="btn btn-primary inline-flex"
          eventName="cta_click"
          eventParams={{ cta_name: 'become_a_collaborator', location: 'our_story' }}
        >
          Become a Collaborator
        </TrackableLink>
      </div>
    </section>
  );
}
