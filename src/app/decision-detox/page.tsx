import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GatheringCard } from "@/components/ui/GatheringCard";
import Link from 'next/link';

export default function DecisionDetoxPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full relative">
        
        {/* Section 1 - Hero */}
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 photo-treatment">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=1600&auto=format&fit=crop" 
              alt="Low stim landscape" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="container relative z-10 text-center flex flex-col items-center">
            <span className="t-mono text-[10px] uppercase tracking-widest text-[var(--paper)]/80 mb-6 block">
              A LOST & FOUND GATHERING
            </span>
            <h1 className="text-[64px] md:text-[96px] text-[var(--paper)] leading-none mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              The Decision Detox
            </h1>
            <p className="t-body-lg italic text-[var(--paper)]/90 text-2xl max-w-xl">
              *for the burnt-out and the beautifully tired*
            </p>
          </div>
        </section>

        {/* Section 2 - The Premise */}
        <section className="py-32 bg-[var(--paper)]">
          <div className="container max-w-3xl">
            <p className="t-body-lg text-[var(--ink)] leading-relaxed mb-8">
              Decision Fatigue is one of the most underrated exhaustions of modern life. CEOs, founders, managers, and anyone carrying responsibility don't always realise how taxing it is to constantly decide. We've been quietly observing this pattern for a while.
            </p>
            <p className="t-body-lg text-[var(--ink)] leading-relaxed mb-8">
              And we tested something simple — what happens when you truly let someone else take the driver's seat for your break? In a thoughtful, curated way, where someone who understands pacing, intention, and experience plans it for you... as you.
            </p>
            <p className="t-h3-italic text-[var(--clay)] text-3xl md:text-4xl leading-snug mt-16">
              *Introducing the Decision Detox. Our response to a world that asks too much of your mind.*
            </p>
          </div>
        </section>

        {/* Section 3 - What's removed */}
        <section className="py-24 bg-[var(--paper-deep)]">
          <div className="container max-w-3xl">
            <div className="flex flex-col gap-8">
              <h3 className="t-h3-italic text-[var(--denim)] text-2xl md:text-3xl">no decisions about where to eat —</h3>
              <h3 className="t-h3-italic text-[var(--denim)] text-2xl md:text-3xl">no decisions about what to do —</h3>
              <h3 className="t-h3-italic text-[var(--denim)] text-2xl md:text-3xl">no decisions about how to get there —</h3>
              <h3 className="t-h3-italic text-[var(--denim)] text-2xl md:text-3xl">no decisions about who to talk to —</h3>
              <h3 className="t-h3-italic text-[var(--ink)] mt-8 text-3xl md:text-4xl">you wake up. you arrive. you stay.</h3>
            </div>
          </div>
        </section>

        {/* Section 4 - A day in the Detox */}
        <section className="py-32 bg-[var(--paper)]">
          <div className="container max-w-3xl">
            <span className="t-eyebrow block mb-12 text-center text-[var(--ink-soft)]">A DAY IN THE DETOX</span>
            
            <div className="flex flex-col gap-12 relative before:content-[''] before:absolute before:left-[11px] md:before:left-[19px] before:top-2 before:bottom-2 before:w-[1px] before:bg-[var(--ink)]/10">
              
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-1.5 w-6 h-6 md:w-10 md:h-10 bg-[var(--paper-deep)] rounded-full border border-[var(--ink)]/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[var(--moss)] rounded-full" />
                </div>
                <h4 className="t-mono text-xs text-[var(--ink-soft)] tracking-widest uppercase mb-2">07:00 AM</h4>
                <p className="t-body-lg text-[var(--ink)]">Wake without an alarm. Coffee is quietly brought to your door. Total silence until 10 AM.</p>
              </div>

              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-1.5 w-6 h-6 md:w-10 md:h-10 bg-[var(--paper-deep)] rounded-full border border-[var(--ink)]/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[var(--moss)] rounded-full" />
                </div>
                <h4 className="t-mono text-xs text-[var(--ink-soft)] tracking-widest uppercase mb-2">10:30 AM</h4>
                <p className="t-body-lg text-[var(--ink)]">A long, communal breakfast. No rushing. The only conversation is what's naturally happening.</p>
              </div>

              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-1.5 w-6 h-6 md:w-10 md:h-10 bg-[var(--paper-deep)] rounded-full border border-[var(--ink)]/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[var(--clay)] rounded-full" />
                </div>
                <h4 className="t-mono text-xs text-[var(--clay)] tracking-widest uppercase mb-2">01:00 PM</h4>
                <p className="t-body-lg text-[var(--ink)]">Lunch, followed by nothing scheduled. This is the hardest part for most people: allowing yourself to do nothing.</p>
              </div>

              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-1.5 w-6 h-6 md:w-10 md:h-10 bg-[var(--paper-deep)] rounded-full border border-[var(--ink)]/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[var(--denim)] rounded-full" />
                </div>
                <h4 className="t-mono text-xs text-[var(--ink-soft)] tracking-widest uppercase mb-2">05:00 PM</h4>
                <p className="t-body-lg text-[var(--ink)]">Optional gentle movement or breathwork as the sun sets.</p>
              </div>

              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-1.5 w-6 h-6 md:w-10 md:h-10 bg-[var(--paper-deep)] rounded-full border border-[var(--ink)]/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[var(--ink)] rounded-full" />
                </div>
                <h4 className="t-mono text-xs text-[var(--ink-soft)] tracking-widest uppercase mb-2">08:00 PM</h4>
                <p className="t-body-lg text-[var(--ink)]">Dinner under the stars. The wine is poured. We handle the rest.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5 - Upcoming Cohorts */}
        <section className="py-24 bg-[var(--paper-deep)] border-t border-[var(--paper)]">
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="t-display-2 text-[var(--ink)]">Next Cohorts</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-full max-w-[360px]">
                <GatheringCard 
                  title="The Decision Detox"
                  location="Goa, India"
                  dates="Oct 10–15, 2026"
                  price="From INR 85,000"
                  imageSrc="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop"
                  isSoldOut={false}
                />
              </div>
              <div className="w-full max-w-[360px]">
                <GatheringCard 
                  title="The Decision Detox"
                  location="Kodaikanal, India"
                  dates="Dec 04–09, 2026"
                  price="From INR 85,000"
                  imageSrc="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop"
                  isSoldOut={false}
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
