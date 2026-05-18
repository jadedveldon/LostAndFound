'use client';

import React from 'react';
import Link from 'next/link';

const categories = [
  'Slow Travel',
  'Emotional Geography',
  'Travel & Burnout',
  "Founder's Notes",
  'Rituals & Rest',
  'Gathering Diaries',
];

const articles = [
  {
    title: 'Why we stopped selling itineraries',
    excerpt: 'The truth about decision fatigue, and why knowing what happens at 2 PM on a Tuesday ruins the magic of traveling.',
    date: 'MAY 12, 2026',
    category: "Founder's Notes",
    img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop',
    slug: 'why-we-stopped-selling-itineraries',
  },
  {
    title: 'Notes from Spiti Valley',
    excerpt: 'What happens when you spend five days at 12,000 feet with no cell reception and strangers who brought their journals.',
    date: 'APR 04, 2026',
    category: 'Gathering Diaries',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop',
    slug: 'notes-from-spiti-valley',
  },
  {
    title: 'How to pack for a slow trip',
    excerpt: "Leave the 'just in case' outfits. Bring the book you've been trying to finish for three years.",
    date: 'MAR 18, 2026',
    category: 'Slow Travel',
    img: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=600&auto=format&fit=crop',
    slug: 'how-to-pack-for-a-slow-trip',
  },
];

export function JournalPreview() {
  return (
    <section className="bg-[var(--paper-deep)] py-20 pb-24 lg:py-28 lg:pb-32">
      {/* Header */}
      <div className="container mb-10">
        <span className="t-eyebrow block mb-5">FROM THE JOURNAL</span>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/journal?category=${cat.toLowerCase().replace(/[\s&']+/g, '-')}`}
              className="px-3 py-1.5 border border-[var(--ink)]/12 t-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)] hover:border-[var(--clay)] hover:text-[var(--clay)] transition-colors duration-fast"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {articles.map((article, idx) => (
          <Link key={idx} href={`/journal/${article.slug}`} className="flex flex-col group">
            <div className="photo-treatment w-full aspect-[4/3] mb-4 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slower ease-out"
              />
            </div>
            <span className="t-mono text-[10px] text-[var(--clay)] uppercase tracking-widest mb-1.5">{article.category}</span>
            <h4 className="t-h4 text-[var(--ink)] mb-2 group-hover:text-[var(--clay)] transition-colors line-clamp-2">
              {article.title}
            </h4>
            <p className="t-body-sm text-[var(--ink-soft)] mb-5 line-clamp-2 flex-1">{article.excerpt}</p>
            <div className="flex items-center justify-between pt-3 border-t border-[var(--paper)]">
              <span className="t-mono text-[10px] text-[var(--ink-mute)] tracking-widest uppercase">{article.date}</span>
              <span className="t-body-italic text-[var(--denim)] group-hover:text-[var(--denim-deep)] text-sm">read →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter Band */}
      <div className="container mt-16 lg:mt-20">
        <div className="bg-[var(--moss)] px-6 py-8 pb-10 sm:px-10 sm:py-10 md:px-12 md:py-12">
          <h3
            className="text-[clamp(20px,2.5vw,32px)] leading-tight mb-2 italic"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--paper)' }}
          >
            &ldquo;Slow letters, once a fortnight.&rdquo;
          </h3>
          <p className="text-sm sm:text-base max-w-lg mb-6" style={{ fontFamily: 'var(--font-body)', color: 'rgba(242,235,221,0.8)' }}>
            Thoughts from the road, notes on rest, places we can&apos;t stop thinking about &amp; some more love.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 sm:gap-0 max-w-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="journal-newsletter-email" className="sr-only">Email address</label>
            <input
              id="journal-newsletter-email"
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent px-4 py-3 focus:outline-none italic text-sm"
              style={{
                border: '1px solid rgba(242,235,221,0.3)',
                color: 'var(--paper)',
                fontFamily: 'var(--font-body)',
              }}
            />
            <button
              type="submit"
              className="px-5 py-3 t-mono text-xs uppercase tracking-widest shrink-0"
              style={{
                backgroundColor: 'var(--paper)',
                color: 'var(--moss)',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
