"use client";

import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GatheringCard } from "@/components/ui/GatheringCard";
import Link from 'next/link';

const filters = [
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'sold-out', label: 'Sold out' },
  { id: 'themed', label: 'Themed (Decision Detox)' },
  { id: 'solo', label: 'Solo-friendly' },
  { id: 'international', label: 'International' },
];

const allGatherings = [
  {
    title: 'The Slow Transit',
    location: 'Ahangama, Sri Lanka',
    dates: 'Aug 20–26, 2026',
    price: 'From INR 95,000',
    imageSrc: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop',
    isSoldOut: false,
    tags: ['upcoming', 'international', 'solo'],
    slug: 'the-slow-transit',
  },
  {
    title: 'The Decision Detox',
    location: 'Goa, India',
    dates: 'Oct 10–15, 2026',
    price: 'From INR 85,000',
    imageSrc: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop',
    isSoldOut: false,
    tags: ['upcoming', 'themed', 'solo'],
    slug: 'decision-detox-goa',
  },
  {
    title: 'Winter Quiet',
    location: 'Spiti Valley, India',
    dates: 'Jan 10–16, 2027',
    price: 'From INR 1,15,000',
    imageSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop',
    isSoldOut: true,
    tags: ['sold-out', 'solo'],
    slug: 'winter-quiet-spiti',
  },
  {
    title: 'Monsoon Reading Retreat',
    location: 'Kerala, India',
    dates: 'Jul 05–10, 2026',
    price: 'From INR 75,000',
    imageSrc: 'https://images.unsplash.com/photo-1596423735880-530089e5f4d1?q=80&w=600&auto=format&fit=crop',
    isSoldOut: false,
    tags: ['upcoming', 'themed', 'solo'],
    slug: 'monsoon-reading-kerala',
  },
];

export function ExperiencesCatalogue() {
  const [activeFilter, setActiveFilter] = useState('upcoming');
  const filteredGatherings = allGatherings.filter(g => g.tags.includes(activeFilter));

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full overflow-hidden">

        {/* Hero Section */}
        <section className="pt-32 pb-16 section bg-[var(--paper)]">
          <div className="container max-w-4xl text-center">
            <span className="t-eyebrow block mb-6">L&amp;F EXPERIENCES · 2026 · 2027</span>
            <h1 className="t-display-1 text-[var(--ink)] mb-6 leading-tight">Small trips, with strangers who become friends.</h1>
            <p className="t-body-lg italic text-[var(--denim)]">
              *10 to 14 seats per cohort. Hosted by us. All-inclusive.*
            </p>
          </div>

          {/* Filters */}
          <div className="container mt-16 flex flex-wrap justify-center gap-3">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full border transition-colors t-mono text-xs uppercase tracking-widest ${
                  activeFilter === filter.id
                    ? 'bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]'
                    : 'bg-transparent text-[var(--ink-soft)] border-[var(--ink-mute)] hover:border-[var(--ink)] hover:text-[var(--ink)]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* Grid Section */}
        <section className="section bg-[var(--paper-deep)] py-24 min-h-[50vh]">
          <div className="container">
            {filteredGatherings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 justify-items-center">
                {filteredGatherings.map((g, idx) => (
                  <Link key={idx} href={`/experiences/${g.slug}`} className="w-full max-w-[360px]">
                    <GatheringCard
                      title={g.title}
                      location={g.location}
                      dates={g.dates}
                      price={g.price}
                      imageSrc={g.imageSrc}
                      isSoldOut={g.isSoldOut}
                    />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="t-body-lg text-[var(--ink-soft)] mb-6">
                  No trips match — but the next cohort is always one we&apos;re planning.
                </p>
                <p className="t-body-italic text-[var(--denim)]">
                  *Subscribe to know first.*
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Band */}
        <section className="w-full py-16 text-center border-t border-[var(--paper-deep)]">
          <p className="t-body mb-4 text-[var(--ink-soft)]">Don&apos;t see the right one?</p>
          <Link href="/plan-with-us" className="t-h3-italic text-[var(--clay)] hover:text-[var(--clay-deep)] transition-colors">
            Plan a personal Experience →
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
