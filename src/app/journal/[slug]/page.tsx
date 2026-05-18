import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function JournalArticle() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full bg-[var(--paper)]">
        
        {/* Article Header */}
        <section className="pt-32 pb-12 section">
          <div className="container max-w-3xl">
            <span className="t-mono text-[10px] text-[var(--ink-mute)] tracking-widest uppercase mb-6 block text-center">
              MAY 12, 2026 · 4 MIN READ
            </span>
            <h1 className="text-[48px] md:text-[64px] text-[var(--ink)] text-center leading-[1.1] mb-12" style={{ fontFamily: 'var(--font-display)' }}>
              Why we stopped selling itineraries
            </h1>
            
            <div className="photo-treatment w-full aspect-[16/9] overflow-hidden mb-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=1200&auto=format&fit=crop" 
                alt="Journal header" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="pb-24">
          <div className="container max-w-[720px]">
            <p className="t-body-lg text-[var(--ink)] mb-8 leading-relaxed">
              We live in an era where optimization has infected everything, including rest. The modern vacation often resembles a military operation: spreadsheets color-coded by neighborhood, dinner reservations made 60 days in advance, and a step count that would make a marathoner blush.
            </p>
            
            <h3 className="t-h3-italic text-[var(--denim)] text-3xl my-12 text-center max-w-xl mx-auto">
              *When you know exactly what happens at 2 PM on a Tuesday, you ruin the magic of traveling.*
            </h3>
            
            <p className="t-body-lg text-[var(--ink)] mb-8 leading-relaxed">
              Decision Fatigue is one of the most underrated exhaustions of modern life. We're constantly choosing. What to eat, what to watch, what to wear, how to reply to that email. When you apply that same cognitive load to a trip meant for recovery, you return home needing another vacation.
            </p>

            <p className="t-body-lg text-[var(--ink)] mb-12 leading-relaxed">
              That's why we stopped selling "itineraries" and started curating rhythm. We want you to wake up and not know where breakfast is coming from, only that it will be good, and that it will be ready when you are.
            </p>

            {/* Author Block */}
            <div className="flex items-center gap-6 p-8 bg-[var(--paper-deep)] rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" 
                alt="Tanya" 
                className="w-16 h-16 rounded-full object-cover" 
              />
              <div>
                <span className="t-mono text-xs uppercase tracking-widest text-[var(--ink-soft)] block mb-1">WRITTEN BY</span>
                <span className="t-body-lg text-[var(--ink)] block">Tanya, L&F Founder</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
