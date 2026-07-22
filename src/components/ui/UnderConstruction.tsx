import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from 'next/link';

interface UnderConstructionProps {
  title: string;
  message?: string;
}

export function UnderConstruction({ title, message }: UnderConstructionProps) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <section className="pt-40 pb-32 bg-[var(--paper)] flex-1 flex items-center">
          <div className="container max-w-2xl text-center mx-auto">
            <span className="t-mono text-[10px] uppercase text-[var(--ink-mute)] tracking-widest mb-6 block">
              UNDER CONSTRUCTION
            </span>
            <h1
              className="text-[40px] md:text-[56px] leading-tight mb-6 text-[var(--denim)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h1>
            <p className="t-body-lg text-[var(--ink-soft)] mb-10 mx-auto max-w-lg">
              {message ?? "This page is still being put together. Check back soon — or reach out and we'll help in the meantime."}
            </p>
            <Link href="/">
              <Button variant="ghost" className="border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]">
                Back to Home
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
