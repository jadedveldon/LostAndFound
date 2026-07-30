"use client";

import React, { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { formatInline } from "@/lib/formatInline";

interface FAQAccordionProps {
  items: { q: string; a: string }[];
  blockKey: string;
}

export function FAQAccordion({ items, blockKey }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="flex flex-col mt-4 mb-12 border-t border-[var(--ink)]/10">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        const panelId = `${blockKey}-panel-${i}`;
        return (
          <div key={`${blockKey}-${i}`} className="border-b border-[var(--ink)]/10">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left"
            >
              <span className="t-h4 text-[var(--ink)]">{item.q}</span>
              <CaretDown
                size={18}
                className="shrink-0 text-[var(--ink-mute)] transition-transform duration-medium"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            <div
              id={panelId}
              className="grid transition-all duration-medium ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className="t-body-lg text-[var(--ink-soft)] leading-relaxed pb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {formatInline(item.a, `${blockKey}-${i}-a`)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
