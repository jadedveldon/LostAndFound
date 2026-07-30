import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SectionVisible } from '@/components/analytics/SectionVisible';

export function StoryContactCTA() {
  return (
    <section className="bg-[var(--paper)] relative overflow-hidden py-20 lg:py-28">
      <SectionVisible name="story_contact_cta" />
      <div className="container max-w-2xl text-center mx-auto">
        <h2
          className="text-[clamp(28px,4vw,44px)] font-normal text-[var(--ink)] leading-[1.15] mb-5"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Got a question, an idea, or just want to say hi?
        </h2>
        <p className="t-body-lg text-[var(--ink-soft)] mb-10 max-w-lg mx-auto">
          We&apos;d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button variant="primary">Contact Us</Button>
          </Link>
          <a
            href="mailto:curator@lostandfoundtravel.in"
            className="t-body italic text-[var(--denim)] hover:text-[var(--denim-deep)] transition-colors"
          >
            curator@lostandfoundtravel.in
          </a>
        </div>
      </div>
    </section>
  );
}
