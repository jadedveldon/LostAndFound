import React from 'react';
import Image from 'next/image';

export function UpcomingGatherings() {
  return (
    <section className="bg-[var(--paper)] w-full">
      <Image
        src="/images/srilanka.png"
        alt="Sri Lanka — The Slow Transit"
        width={1568}
        height={396}
        className="w-full h-auto block"
        priority
      />
    </section>
  );
}
