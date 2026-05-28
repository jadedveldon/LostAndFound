import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full relative border-t border-[var(--paper-deep)]">
      {/* Footer Links */}
      <div className="w-full bg-[var(--paper)] py-14 lg:py-20 relative overflow-hidden">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">

          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="uppercase tracking-[0.05em] leading-none text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)', fontSize: '28px' }}>Lost&amp;Found</span>
              <span className="t-eyebrow text-[10px] mt-1.5 tracking-widest text-[var(--ink-soft)]">Personal Travel Curators</span>
            </div>
            <p className="t-body-sm mb-6 max-w-[220px]">Designing slow trips for people in transition.</p>
            <div className="flex gap-3">
              <span className="w-8 h-8 rounded-full border border-[var(--ink)]/30 flex items-center justify-center text-xs text-[var(--ink-soft)]">Ig</span>
              <span className="w-8 h-8 rounded-full border border-[var(--ink)]/30 flex items-center justify-center text-xs text-[var(--ink-soft)]">Yt</span>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="t-eyebrow mb-4 text-[var(--ink-mute)]">Trips</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/gatherings" className="t-body-sm text-[var(--ink-soft)] hover:text-[var(--clay)] transition-colors">Gatherings</Link></li>
              <li><Link href="/plan-with-us" className="t-body-sm text-[var(--ink-soft)] hover:text-[var(--clay)] transition-colors">Plan With Us</Link></li>
              <li><Link href="/decision-detox" className="t-body-sm text-[var(--ink-soft)] hover:text-[var(--clay)] transition-colors">Decision Detox</Link></li>
              <li><Link href="/a-la-carte" className="t-body-sm text-[var(--ink-soft)] hover:text-[var(--clay)] transition-colors">A La Carte</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="t-eyebrow mb-4 text-[var(--ink-mute)]">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/our-story" className="t-body-sm text-[var(--ink-soft)] hover:text-[var(--clay)] transition-colors">Our Story</Link></li>
              <li><Link href="/journal" className="t-body-sm text-[var(--ink-soft)] hover:text-[var(--clay)] transition-colors">Journal</Link></li>
              <li><Link href="/reviews" className="t-body-sm text-[var(--ink-soft)] hover:text-[var(--clay)] transition-colors">Reviews</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="t-eyebrow mb-4 text-[var(--ink-mute)]">Help</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/contact" className="t-body-sm text-[var(--ink-soft)] hover:text-[var(--clay)] transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="t-body-sm text-[var(--ink-soft)] hover:text-[var(--clay)] transition-colors">FAQ</Link></li>
              <li><Link href="/legal/cancellation" className="t-body-sm text-[var(--ink-soft)] hover:text-[var(--clay)] transition-colors">Cancellation</Link></li>
              <li><Link href="/legal/privacy" className="t-body-sm text-[var(--ink-soft)] hover:text-[var(--clay)] transition-colors">Privacy &amp; Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container mt-12 pt-6 border-t border-[var(--paper-deep)] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="t-mono text-[10px] text-[var(--ink-mute)] uppercase tracking-widest">© Lost &amp; Found, 2026 · made with care in India</p>
          <span className="t-mono text-[10px] text-[var(--ink-mute)] cursor-pointer uppercase tracking-widest">INR / USD</span>
        </div>

        {/* Decorative squiggle */}
        <svg className="absolute bottom-0 left-0 w-full text-[var(--wheat)] opacity-20 pointer-events-none" height="16" preserveAspectRatio="none" viewBox="0 0 100 20">
          <path d="M0 10 Q 5 0, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10 T 70 10 T 80 10 T 90 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </footer>
  );
}
