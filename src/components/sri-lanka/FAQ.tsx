"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const FAQS = [
  {
    question: "Is this a retreat?",
    answer:
      "Not in the traditional sense. This is a curated slow-travel gathering focused on culture, connection, rest, and meaningful experiences.",
  },
  {
    question: "Can I come alone?",
    answer: "Absolutely. Most people joining are solo travelers.",
  },
  {
    question: "What's the age group?",
    answer: "Typically 25–38. But emotional alignment matters more than age.",
  },
  {
    question: "Is this wellness-focused?",
    answer:
      "Not in a rigid or performative way. Movement, rest, nature, food, and community are integrated naturally into the experience.",
  },
  {
    question: "How many people are joining?",
    answer: "12 selected travellers",
  },
  {
    question: "What's the payment structure?",
    answer: "30% deposit now. 30% one month before the trip. Remaining payment due 15 days before departure.",
  },
];

export function FAQ() {
  const shouldReduceMotion = useReducedMotion();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  function toggle(idx: number) {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  }

  return (
    <section className="bg-[var(--paper)] w-full py-[var(--space-24)]">
      <div className="container max-w-[720px] mx-auto">

        {/* Section header */}
        <div className="mb-10">
          <span className="t-eyebrow text-[var(--ink-mute)] block mb-4">
            QUESTIONS
          </span>
          <h2 className="t-display-2 text-[var(--ink)]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div>
          {FAQS.map((faq, idx) => (
            <div key={idx}>
              {/* Question button */}
              <button
                type="button"
                className="w-full flex justify-between items-center py-5 border-b border-[var(--ink)]/10 text-left"
                onClick={() => toggle(idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="t-body-lg text-[var(--ink)] font-medium">
                  {faq.question}
                </span>
                <span
                  className="t-mono text-[var(--ink-mute)] text-lg ml-4 shrink-0"
                  aria-hidden="true"
                >
                  {openIdx === idx ? "−" : "+"}
                </span>
              </button>

              {/* Answer panel */}
              <div style={{ overflow: "hidden" }}>
                <AnimatePresence initial={false}>
                  {openIdx === idx && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                      }
                    >
                      <p className="t-body text-[var(--ink-soft)] pb-5 leading-[1.7]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
