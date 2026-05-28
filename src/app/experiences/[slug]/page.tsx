import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Polaroid } from "@/components/ui/Polaroid";
import Link from 'next/link';

export default function ExperienceDetail() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full relative">

        {/* Section 1 - Hero */}
        <section className="relative w-full h-[60vh] min-h-[500px]">
          <div className="absolute inset-0 photo-treatment">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1600&auto=format&fit=crop"
              alt="Ahangama Gathering"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="container relative h-full flex flex-col justify-between pt-24 pb-12 z-10">
            <span className="t-mono text-xs uppercase tracking-widest text-[var(--paper)]">L&F GATHERING · No. 07</span>
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
              <div>
                <h1 className="t-display-1 text-[var(--paper)] leading-none mb-2">Ahangama</h1>
                <p className="t-body-italic text-[var(--paper)]/80 text-xl">Aug 20–26, 2026</p>
              </div>
              <span className="t-mono text-sm text-[var(--paper)] uppercase tracking-wider mb-2 border border-[var(--paper)]/30 px-4 py-2 rounded-full backdrop-blur-sm">
                From INR 95,000 / person
              </span>
            </div>
          </div>
        </section>

        {/* Section 1 Sub */}
        <section className="py-12 bg-[var(--paper)] text-center px-4">
          <p className="t-h3-italic text-[var(--denim)] max-w-3xl mx-auto text-2xl md:text-3xl">
            *A week to rediscover travel differently.*
          </p>
        </section>

        {/* Section 2 - At a glance */}
        <section className="py-16 bg-[var(--paper-deep)] border-y border-[var(--ink)]/5">
          <div className="container max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div className="flex flex-col border-l border-[var(--ink)]/20 pl-6">
                <span className="t-mono text-[10px] uppercase text-[var(--ink-mute)] mb-2">Duration</span>
                <span className="t-body-lg text-[var(--ink)]">6 days, 5 nights</span>
              </div>
              <div className="flex flex-col border-l border-[var(--ink)]/20 pl-6">
                <span className="t-mono text-[10px] uppercase text-[var(--ink-mute)] mb-2">Cohort</span>
                <span className="t-body-lg text-[var(--ink)]">12 travellers maximum</span>
              </div>
              <div className="flex flex-col border-l border-[var(--ink)]/20 pl-6">
                <span className="t-mono text-[10px] uppercase text-[var(--ink-mute)] mb-2">Host</span>
                <div className="flex items-center gap-4 mt-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="Tanya" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <span className="t-body-lg block">Tanya</span>
                    <span className="t-body-sm text-[var(--ink-soft)]">L&F Founder</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-8 border-t border-[var(--ink)]/10">
              {['Stay included', 'Most meals included', 'Local experiences included', 'Airport pickups included', 'Flights NOT included'].map((item, i) => (
                <span key={i} className="t-mono text-[10px] uppercase text-[var(--ink-soft)] tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--clay)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - The Story */}
        <section className="py-24 bg-[var(--paper)]">
          <div className="container max-w-3xl">
            <h3 className="t-h3-italic text-[var(--denim)] mb-8">What this trip is</h3>
            <p className="t-body-lg text-[var(--ink-soft)] mb-8">
              Ahangama isn&apos;t where you go to tick boxes. It&apos;s a surf town on the southern coast of Sri Lanka that still feels like a secret, even though it isn&apos;t anymore. We built this week around the idea of slowness.
            </p>
            <p className="t-body-lg text-[var(--ink-soft)] mb-16">
              You&apos;ll wake up to the sound of the ocean, eat breakfast that took two hours to prepare, and spend the afternoon doing absolutely nothing if you choose to. Or you can surf. Or you can read. The point is, nobody is hurrying you.
            </p>

            <Polaroid
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
              alt="Quiet beach"
              caption="the southern coast"
              tilt={2}
              className="w-full md:w-[120%] md:-ml-[10%] mb-16"
            />

            <h3 className="t-h3-italic text-[var(--denim)] mb-8">Who comes on these</h3>
            <p className="t-body-lg text-[var(--ink-soft)] mb-8">
              People who are tired of making decisions. People who want to travel with a group but hate the idea of a &apos;tour group&apos;. Solo travellers who want community at dinner but silence in the morning.
            </p>

            <h3 className="t-h3-italic text-[var(--denim)] mb-8">Who shouldn&apos;t come</h3>
            <p className="t-body-lg text-[var(--ink-soft)] mb-8">
              If you want to see 12 temples in 5 days, this will bore you. If you need a perfectly curated luxury resort where everything is polished to a shine, this isn&apos;t it. We embrace the sand, the sudden rain, and the slow service.
            </p>
          </div>
        </section>

        {/* Section 4 - Itinerary */}
        <section className="py-24 bg-[var(--paper-deep)]">
          <div className="container max-w-3xl">
            <div className="text-center mb-16">
              <span className="t-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)] block mb-4">
                *This is a guide, not a contract. We hold space for serendipity.*
              </span>
              <h2 className="t-display-2 text-[var(--ink)]">The Rhythm</h2>
            </div>

            <div className="flex flex-col gap-8">
              {[1, 2, 3, 4, 5, 6].map((day) => (
                <div key={day} className="border-t border-[var(--ink)]/10 pt-6">
                  <span className="t-mono text-[10px] text-[var(--clay)] mb-2 block uppercase">Day 0{day}</span>
                  <div className="flex justify-between items-center cursor-pointer group">
                    <h3 className="t-h4 text-[var(--ink)] group-hover:text-[var(--clay)] transition-colors">
                      {day === 1 ? 'Arrival & The Long Dinner' :
                       day === 2 ? 'Surf, Read, Repeat' :
                       day === 6 ? 'Departures' : 'Slow mornings'}
                    </h3>
                    <span className="text-[var(--ink-mute)]">+</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 - What's included / not */}
        <section className="py-24 bg-[var(--paper)]">
          <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="t-h3-italic text-[var(--moss)] mb-8">included</h3>
              <ul className="flex flex-col gap-4">
                {['5 nights in a boutique villa', 'All breakfasts & 3 dinners', 'Airport transfers from CMB', 'Two surf lessons', 'One deep tissue massage'].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-[var(--moss)] mt-1 font-bold">✓</span>
                    <span className="t-body text-[var(--ink)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="t-h3-italic text-[var(--clay)] mb-8">not included</h3>
              <ul className="flex flex-col gap-4">
                {['International flights to CMB', 'Visa fees', 'Lunches & 2 dinners', 'Alcohol & personal expenses', 'Travel insurance (mandatory)'].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-[var(--clay)] mt-1 font-bold">✕</span>
                    <span className="t-body text-[var(--ink)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7 - Sticky Booking Band */}
        <div className="sticky bottom-0 left-0 w-full bg-[var(--paper)] border-t border-[var(--paper-deep)] shadow-elevated z-40 py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="t-h4 text-[var(--ink)] mb-1">Ahangama</h4>
            <p className="t-mono text-[10px] text-[var(--ink-mute)] uppercase tracking-wider">Aug 20–26 · INR 95,000</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
            <Link href="/checkout" className="btn btn-primary w-full md:w-auto">
              Reserve your seat — INR 15,000 deposit
            </Link>
            <Link href="/contact" className="t-body-italic text-sm text-[var(--denim)] hover:text-[var(--denim-deep)]">
              Have a question? Write to us →
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
