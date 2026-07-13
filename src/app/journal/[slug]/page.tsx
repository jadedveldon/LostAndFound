import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArticleBody } from "@/components/journal/ArticleBody";
import { getJournalPost, getSortedJournalPosts } from "@/data/journalPosts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return getSortedJournalPosts().map((post) => ({ slug: post.slug }));
}

export default async function JournalArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getJournalPost(slug);

  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full bg-[var(--paper)]">

        {/* Article Header */}
        <section className="pt-32 pb-12 section">
          <div className="container max-w-3xl">
            <span className="t-mono text-[10px] text-[var(--ink-mute)] tracking-widest uppercase mb-6 block text-center">
              {post.category} · {post.date} · {post.readTime} MIN READ
            </span>
            <h1 className="text-[40px] md:text-[64px] text-[var(--ink)] text-center leading-[1.1] mb-12" style={{ fontFamily: 'var(--font-display)' }}>
              {post.title}
            </h1>

            <div className="photo-treatment w-full aspect-[16/9] overflow-hidden mb-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.heroImage}
                alt={post.heroAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="pb-24">
          <div className="container max-w-[720px]">
            <ArticleBody blocks={post.body} />

            {/* Author Block */}
            <div className="flex items-center gap-6 p-8 bg-[var(--paper-deep)] rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <span className="t-mono text-xs uppercase tracking-widest text-[var(--ink-soft)] block mb-1">WRITTEN BY</span>
                <span className="t-body-lg text-[var(--ink)] block">{post.author}</span>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/journal" className="t-body-italic text-[var(--denim)] hover:translate-x-1 inline-flex items-center gap-2 transition-transform w-fit">
                ← back to the journal
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
