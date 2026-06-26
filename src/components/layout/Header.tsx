'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { track } from '@/lib/analytics';

const navLinks = [
  { label: 'Gatherings', href: '/gatherings' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Our Journal', href: '/journal' },
  { label: 'Why We\'re Here', href: '/our-story' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-20 md:h-24 bg-[var(--paper)]/90 backdrop-blur-md transition-colors duration-slow border-b border-[var(--paper-deep)]">
      <div className="container h-full flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex flex-col group shrink-0">
          <span className="uppercase leading-none text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', letterSpacing: '0.06em' }}>Lost &amp; Found</span>
          <span className="mt-1.5 text-[var(--ink-soft)]" style={{ fontFamily: 'var(--font-display)', fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Personal Travel Curators</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="t-eyebrow text-xs relative group py-2"
              onClick={() => track('nav_click', { nav_item: item.label.toLowerCase().replace(/[^a-z]/g, '_'), location: 'header_desktop' })}
            >
              {item.label.toUpperCase()}
              <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                <div className="w-full h-full bg-[var(--clay)] -translate-x-full group-hover:translate-x-0 transition-transform duration-medium ease-out" />
              </div>
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://calendly.com/curator-lostandfoundtravel/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--clay)] text-[var(--paper)] t-mono text-xs uppercase tracking-widest hover:bg-[var(--clay-deep)] transition-colors duration-fast"
            onClick={() => track('cta_click', { cta_name: 'plan_with_us', location: 'header_desktop' })}
          >
            Plan With Us
          </a>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`w-6 h-[1.5px] bg-[var(--ink)] block transition-all duration-medium ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-[var(--ink)] block transition-all duration-medium ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-[var(--ink)] block transition-all duration-medium ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--paper)] border-b border-[var(--paper-deep)] py-8 px-6 flex flex-col gap-6 z-50">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => { setMenuOpen(false); track('nav_click', { nav_item: item.label.toLowerCase().replace(/[^a-z]/g, '_'), location: 'header_mobile' }); }}
              className="t-eyebrow text-sm text-[var(--ink)] hover:text-[var(--clay)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/curator-lostandfoundtravel/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { setMenuOpen(false); track('cta_click', { cta_name: 'plan_with_us', location: 'header_mobile' }); }}
            className="inline-flex items-center justify-center px-5 py-3 bg-[var(--clay)] text-[var(--paper)] t-mono text-xs uppercase tracking-widest mt-2"
          >
            Plan With Us
          </a>
        </div>
      )}
    </header>
  );
}
