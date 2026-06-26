'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionVisible } from '@/components/analytics/SectionVisible';
import { track } from '@/lib/analytics';

export function UpcomingGatherings() {
  return (
    <section className="bg-[var(--paper)] w-full relative">
      <SectionVisible name="upcoming_gatherings" />
      <Link
        href="/gatherings#request-invite"
        onClick={() => track('cta_click', { cta_name: 'sri_lanka_banner', location: 'upcoming_gatherings' })}
      >
        <Image
          src="/images/srilanka.png"
          alt="Sri Lanka — The Slow Transit"
          width={1568}
          height={396}
          className="w-full h-auto block cursor-pointer"
          priority
        />
      </Link>
    </section>
  );
}
