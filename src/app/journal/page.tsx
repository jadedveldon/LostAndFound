import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from 'next/link';
import { getSortedJournalPosts } from "@/data/journalPosts";

export default function JournalIndex() {
  const articles = getSortedJournalPosts();

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
            {articles.map((article) => (
              <Link href={`/journal/${article.slug}`} key={article.slug} className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[var(--ink)]/10 pb-16 last:border-0 last:pb-0">
                <div className="md:col-span-5 photo-treatment aspect-[4/3] overflow-hidden order-2 md:order-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.heroImage}
                    alt={article.heroAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slower ease-out"
                  />
                </div>
                <div className="md:col-span-7 flex flex-col order-1 md:order-2">
                  <span className="t-mono text-[10px] text-[var(--ink-mute)] tracking-widest uppercase mb-4">
                    {article.category} · {article.date}
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
