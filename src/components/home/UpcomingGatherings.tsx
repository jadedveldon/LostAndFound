import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function UpcomingGatherings() {
  return (
    <section className="bg-[var(--paper)] w-full">
      <Link href="/gatherings#request-invite">
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
