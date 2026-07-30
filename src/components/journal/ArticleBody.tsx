import React from "react";
import { JournalBlock } from "@/data/journalPosts";
import { formatInline } from "@/lib/formatInline";
import { FAQAccordion } from "@/components/journal/FAQAccordion";

export function ArticleBody({ blocks }: { blocks: JournalBlock[] }) {
  return (
    <>
      {blocks.map((block, idx) => {
        const key = `block-${idx}`;
        switch (block.type) {
          case "p":
            return (
              <p
                key={key}
                className="t-body-lg text-[var(--ink)] mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {formatInline(block.text, key)}
              </p>
            );
          case "quote":
            return (
              <h3
                key={key}
                className="t-h3-italic text-[var(--denim)] text-3xl my-12 text-center max-w-xl mx-auto"
              >
                {formatInline(block.text, key)}
              </h3>
            );
          case "h2":
            return (
              <h2
                key={key}
                className="t-h2 text-[var(--ink)] mt-16 mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={key} className="t-h4 text-[var(--ink)] mt-12 mb-5">
                {block.text}
              </h3>
            );
          case "h4":
            return (
              <h4
                key={key}
                className="t-eyebrow text-[var(--clay)] mt-10 mb-4 text-sm tracking-widest uppercase"
              >
                {block.text}
              </h4>
            );
          case "list":
            return (
              <ul key={key} className="list-disc pl-6 mb-8 flex flex-col gap-2">
                {block.items.map((item, i) => (
                  <li
                    key={`${key}-${i}`}
                    className="t-body-lg text-[var(--ink)] leading-relaxed"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {formatInline(item, `${key}-${i}`)}
                  </li>
                ))}
              </ul>
            );
          case "image":
            return (
              <div key={key} className="photo-treatment w-full aspect-[16/10] overflow-hidden mb-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={block.src} alt={block.alt} className="w-full h-full object-cover" />
              </div>
            );
          case "faq":
            return <FAQAccordion key={key} items={block.items} blockKey={key} />;
          case "promo":
            return (
              <div
                key={key}
                className="p-8 bg-[var(--paper-deep)] rounded-lg mb-12 flex flex-col gap-4"
              >
                <span className="t-mono text-xs uppercase tracking-widest text-[var(--ink-soft)]">
                  Share this
                </span>
                {block.text.split("\n\n").map((para, i) => (
                  <p
                    key={`${key}-${i}`}
                    className="t-body-lg text-[var(--ink)] leading-relaxed"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {formatInline(para, `${key}-${i}`)}
                  </p>
                ))}
                <div className="flex flex-wrap gap-3 mt-2">
                  {block.hashtags.map((tag) => (
                    <span key={tag} className="t-mono text-xs text-[var(--denim)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
