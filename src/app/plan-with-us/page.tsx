import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Polaroid } from "@/components/ui/Polaroid";
import Link from 'next/link';

export default function PlanWithUsPage() {
  const steps = [
    { title: "we have a chat", num: "01", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400&auto=format&fit=crop" },
    { title: "we sketch it", num: "02", img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=400&auto=format&fit=crop" },
    { title: "we refine together", num: "03", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop" },
    { title: "you arrive", num: "04", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop" }
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full overflow-hidden">

        {/* Section 1 - Hero */}
        <section className="pt-32 pb-24 section bg-[var(--paper)] paper-texture overflow-hidden">
          <div className="container flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
              <span className="t-mono text-[10px] uppercase text-[var(--ink-mute)] tracking-widest mb-4">
                THE L&F EXPERIENCE
              </span>
              <h1 className="text-[56px] md:text-[72px] leading-[1.1] mb-6 text-[var(--denim)]" style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>
                *planned for you, as you*
              </h1>
              <p className="t-body-lg text-[var(--ink-soft)] mb-8 max-w-lg">
                A trip designed entirely around how you travel. Where you want to go. How fast. With whom. We curate, you arrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" className="bg-[var(--clay)] text-[var(--paper)] hover:bg-[var(--clay-deep)] border-none">
                  Tell us about your trip →
                </Button>
                <Button variant="ghost" className="border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]">
                  Read past Experiences
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative h-[400px]">
              <div className="absolute right-[20%] top-[10%] z-10">
                <Polaroid
                  src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=400&auto=format&fit=crop"
                  alt="Trip 1" tilt={-5} className="w-48 md:w-56 shadow-lg"
                />
              </div>
              <div className="absolute right-[5%] top-[20%] z-20">
                <Polaroid
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&auto=format&fit=crop"
                  alt="Trip 2" tilt={8} className="w-48 md:w-56 shadow-lg"
                />
              </div>
              <div className="absolute right-[15%] top-[40%] z-30">
                <Polaroid
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=400&auto=format&fit=crop"
                  alt="Trip 3" tilt={-2} className="w-48 md:w-56 shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - How it works */}
        <section className="py-24 bg-[var(--paper-deep)]">
          <div className="container mb-16 text-center">
            <h2 className="t-h3-italic text-[var(--denim)] text-4xl mb-4">How it works</h2>
          </div>
          <div className="w-full overflow-x-auto pb-12 hide-scrollbar px-4 lg:px-12">
            <div className="flex gap-8 w-max mx-auto px-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center w-[240px]">
                  <span className="t-mono text-[var(--ink-mute)] text-xl mb-4">{step.num}</span>
                  <Polaroid
                    src={step.img}
                    alt={step.title}
                    tilt={idx % 2 === 0 ? 3 : -3}
                    className="w-full mb-6"
                  />
                  <span className="text-[var(--clay)] text-3xl" style={{ fontFamily: 'var(--font-script)' }}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 - Pricing transparency */}
        <section className="py-24 bg-[var(--paper)]">
          <div className="container max-w-4xl text-center">
            <h2 className="t-display-2 text-[var(--ink)] mb-8" style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>*how we charge*</h2>
            <p className="t-body-lg text-[var(--ink-soft)] mb-6 mx-auto">
              *we charge a curation fee, then book everything for you at cost — no markups*
            </p>
            <p className="t-body-lg text-[var(--ink-soft)] mx-auto mb-12">
              OR *we offer all-in package pricing if you prefer*
            </p>
            <div className="inline-block border border-[var(--ink)]/10 px-8 py-6 rounded-lg bg-[var(--paper-deep)]">
              <span className="t-mono text-sm uppercase tracking-widest text-[var(--ink)]">
                Curation fees from INR 25,000. Trip costs vary by destination.
              </span>
            </div>
          </div>
        </section>

        {/* Section 7 - Inquiry CTA band */}
        <section className="w-full band-clay py-24 text-center">
          <div className="container max-w-2xl">
            <h2 className="t-h2 text-[var(--paper)] mb-8">Ready to think about your next trip?</h2>
            <Link href="/inquire">
              <Button variant="secondary" className="bg-transparent border border-[var(--paper)] text-[var(--paper)] hover:bg-[var(--paper)] hover:text-[var(--clay)]">
                Tell us about it →
              </Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
