import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full bg-[var(--paper-deep)] min-h-screen">
        
        {/* Dashboard Header */}
        <section className="pt-32 pb-12 section border-b border-[var(--ink)]/10 bg-[var(--paper)]">
          <div className="container max-w-5xl">
            <span className="t-mono text-[10px] text-[var(--ink-mute)] tracking-widest uppercase mb-4 block">
              GUEST PORTAL
            </span>
            <h1 className="t-display-2 text-[var(--ink)] mb-2">Welcome, Rohan.</h1>
            <p className="t-body-lg text-[var(--ink-soft)]">
              Here is everything you need for your upcoming trip.
            </p>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-16">
          <div className="container max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Col - Trip Overview */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="bg-[var(--paper)] p-8 rounded-lg shadow-sm border border-[var(--ink)]/5">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="t-h3 text-[var(--ink)] mb-2">Ahangama, Sri Lanka</h2>
                    <p className="t-body-italic text-[var(--denim)]">Aug 20–26, 2026 · 6 Days</p>
                  </div>
                  <span className="bg-[var(--moss)]/10 text-[var(--moss)] t-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    UPCOMING
                  </span>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between border-b border-[var(--ink)]/5 pb-4">
                    <span className="t-body text-[var(--ink-soft)]">Balance Due (July 20)</span>
                    <span className="t-mono text-sm">INR 80,000</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[var(--ink)]/5 pb-4">
                    <span className="t-body text-[var(--ink-soft)]">Pre-departure Form</span>
                    <span className="t-mono text-[10px] text-[var(--clay)] uppercase">Action Required</span>
                  </div>
                  <div className="flex items-center justify-between pb-4">
                    <span className="t-body text-[var(--ink-soft)]">Flight Details</span>
                    <span className="t-mono text-[10px] text-[var(--ink-mute)] uppercase">Not Provided</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--ink)]/10 flex gap-4">
                  <Button variant="primary" className="bg-[var(--ink)] text-[var(--paper)]">
                    Pay Balance
                  </Button>
                  <Button variant="ghost">
                    View Full Itinerary
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Col - Host & Resources */}
            <div className="flex flex-col gap-8">
              <div className="bg-[var(--paper)] p-8 rounded-lg shadow-sm border border-[var(--ink)]/5">
                <h3 className="t-mono text-xs text-[var(--ink-soft)] tracking-widest uppercase mb-6">Your Host</h3>
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" 
                    alt="Tanya" 
                    className="w-16 h-16 rounded-full object-cover" 
                  />
                  <div>
                    <span className="t-body-lg block text-[var(--ink)]">Tanya</span>
                    <a href="mailto:tanya@lostandfound.com" className="t-body-sm text-[var(--denim)] hover:underline">
                      Message Tanya
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--paper)] p-8 rounded-lg shadow-sm border border-[var(--ink)]/5">
                <h3 className="t-mono text-xs text-[var(--ink-soft)] tracking-widest uppercase mb-6">Reading List</h3>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href="#" className="t-body-italic text-[var(--denim)] hover:underline">
                      How to pack for the tropics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="t-body-italic text-[var(--denim)] hover:underline">
                      A brief history of Ahangama
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
