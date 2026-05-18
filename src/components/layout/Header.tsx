'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Gatherings', href: '/gatherings' },
  { label: 'Experiences', href: '/experience' },
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
          <span className="uppercase tracking-[0.05em] leading-none text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)', fontSize: '22px' }}>Lost&amp;Found</span>
          <span className="t-eyebrow text-[10px] mt-1.5 tracking-widest text-[var(--ink-soft)]">Personal Travel Curators</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="t-eyebrow text-xs relative group py-2"
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
          <Link
            href="/experience"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--clay)] text-[var(--paper)] t-mono text-xs uppercase tracking-widest hover:bg-[var(--clay-deep)] transition-colors duration-fast"
          >
            Plan With Us
          </Link>

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
              onClick={() => setMenuOpen(false)}
              className="t-eyebrow text-sm text-[var(--ink)] hover:text-[var(--clay)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/experience"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 bg-[var(--clay)] text-[var(--paper)] t-mono text-xs uppercase tracking-widest mt-2"
          >
            Plan With Us
          </Link>
        </div>
      )}
    </header>
  );
}
