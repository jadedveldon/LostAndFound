"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const leaveLines = [
  "stories,",
  "perspective,",
  "real connection,",
  "and maybe a softer relationship with life itself.",
];

export function YouLeaveWith() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="band-moss w-full py-[var(--space-24)]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">

          {/* Left column (~45%) — Headline anchor */}
          <div className="w-full lg:w-[45%]">
            <span
              className="t-eyebrow text-[var(--paper)] block mb-6"
              style={{ opacity: 0.6 }}
            >
              WHAT YOU TAKE HOME
            </span>
            <h2 className="t-display-2 text-[var(--paper)] mb-3">
              You leave with more than photos.
            </h2>
            <p className="t-body-italic text-[var(--paper)]/70">
              something no itinerary can plan.
            </p>
          </div>

          {/* Right column (~55%) — Leave-with list */}
          <div className="w-full lg:w-[55%] lg:pt-2">
            <p
              className="t-mono text-[var(--paper)] mb-4"
              style={{ opacity: 0.6 }}
            >
              You leave with:
            </p>
            <div className="flex flex-col gap-2">
              {leaveLines.map((line, idx) => (
                <motion.p
                  key={idx}
                  className="t-h3-italic text-[var(--paper)]"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: idx * 0.12 }}
                >
                  <em>{line}</em>
                </motion.p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
