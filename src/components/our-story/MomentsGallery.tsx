'use client';

import React, { useState } from 'react';
import { SectionVisible } from '@/components/analytics/SectionVisible';

const galleryItems = [
  { src: '/images/stayImages/1.jpg', alt: 'A moment from a Lost & Found journey' },
  { src: '/images/stayImages/2.jpg', alt: 'A moment from a Lost & Found journey' },
  { src: '/images/stayImages/3.jpg', alt: 'A moment from a Lost & Found journey' },
  { src: '/images/stayImages/4.jpg', alt: 'A moment from a Lost & Found journey' },
  { src: '/images/stayImages/8.jpg', alt: 'A moment from a Lost & Found journey' },
  { src: '/images/stayImages/11.jpg', alt: 'A moment from a Lost & Found journey' },
  { src: '/images/stayImages/15.jpg', alt: 'A moment from a Lost & Found journey' },
  { src: '/images/stayImages/18.jpg', alt: 'A moment from a Lost & Found journey' },
];

export function MomentsGallery() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-[var(--paper-deep)] relative overflow-hidden py-20 lg:py-28">
      <SectionVisible name="moments_gallery" />
      <div className="container mb-10">
        <span className="t-eyebrow mb-4 block">A FEW MOMENTS WE&apos;RE PROUD OF</span>
        <h2
          className="text-[clamp(28px,4vw,44px)] font-normal text-[var(--ink)] leading-[1.15] mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Rather than showing destinations, we&apos;d rather show what travel actually feels like.
        </h2>
      </div>

      {/* Accordion gallery — desktop */}
      <div
        className="hidden md:flex w-full"
        onMouseLeave={() => setHoveredIdx(null)}
        style={{ height: 440 }}
      >
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            className="photo-treatment"
            style={{
              flex: hoveredIdx === idx ? 3 : 1,
              minWidth: 0,
              transition: 'flex 0.45s cubic-bezier(0.22,1,0.36,1)',
              overflow: 'hidden',
              height: 440,
              position: 'relative',
              cursor: 'pointer',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </div>

      {/* Horizontal scroll strip — mobile */}
      <div
        className="flex md:hidden"
        style={{
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          gap: 8,
          paddingLeft: 'var(--gutter-mobile)',
          paddingRight: 'var(--gutter-mobile)',
        }}
      >
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="photo-treatment"
            style={{ width: '80vw', height: 260, flexShrink: 0, position: 'relative', overflow: 'hidden' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
