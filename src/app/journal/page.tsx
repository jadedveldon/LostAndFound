import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from 'next/link';

export default function JournalIndex() {
  const articles = [
    {
      title: "Why we stopped selling itineraries",
      excerpt: "The truth about decision fatigue, and why knowing what happens at 2 PM on a Tuesday ruins the magic of traveling.",
      date: "MAY 12, 2026",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=600&auto=format&fit=crop",
      slug: "why-we-stopped-selling-itineraries"
    },
    {
      title: "Notes from Spiti Valley",
      excerpt: "What happens when you spend five days at 12,000 feet with no cell reception and strangers who brought their journals.",
      date: "APR 04, 2026",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
      slug: "notes-from-spiti-valley"
    },
    {
      title: "How to pack for a slow trip",
      excerpt: "Leave the 'just in case' outfits. Bring the book you've been trying to finish for three years. Our definitive packing philosophy.",
      date: "MAR 18, 2026",
      img: "https://images.unsplash.com/photo-1512413914565-d0506eb365fb?q=80&w=600&auto=format&fit=crop",
      slug: "how-to-pack-for-a-slow-trip"
    },
    {
      title: "The Art of Doing Nothing",
      excerpt: "We've gamified rest to the point where even our vacations feel like productivity contests. Here is how to actually stop.",
      date: "FEB 22, 2026",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
      slug: "the-art-of-doing-nothing"
    }
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full bg-[var(--paper)]">
        
        {/* Header */}
        <section className="pt-32 pb-16 section border-b border-[var(--ink)]/10">
          <div className="container max-w-3xl text-center">
            <h1 className="t-display-1 text-[var(--clay)] mb-6" style={{ fontFamily: 'var(--font-script)' }}>the journal</h1>
            <p className="t-body-lg text-[var(--ink-soft)] italic">
              *slow letters, field notes, and thoughts on traveling differently.*
            </p>
          </div>
        </section>

        {/* List */}
        <section className="py-24">
          <div className="container max-w-4xl flex flex-col gap-16">
            {articles.map((article, idx) => (
              <Link href={`/journal/${article.slug}`} key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[var(--ink)]/10 pb-16 last:border-0 last:pb-0">
                <div className="md:col-span-5 photo-treatment aspect-[4/3] overflow-hidden order-2 md:order-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={article.img} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slower ease-out"
                  />
                </div>
                <div className="md:col-span-7 flex flex-col order-1 md:order-2">
                  <span className="t-mono text-[10px] text-[var(--ink-mute)] tracking-widest uppercase mb-4">
                    {article.date}
                  </span>
                  <h2 className="t-h2 text-[var(--ink)] group-hover:text-[var(--clay)] transition-colors mb-4">
                    {article.title}
                  </h2>
                  <p className="t-body-lg text-[var(--ink-soft)] mb-8">
                    {article.excerpt}
                  </p>
                  <span className="t-body-italic text-[var(--denim)] flex items-center gap-2 group-hover:translate-x-2 transition-transform w-fit">
                    read entry →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
