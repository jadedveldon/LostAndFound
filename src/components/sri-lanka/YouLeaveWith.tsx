"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HandSquiggle } from "@/components/illustrations/hand";

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
      <div className="container max-w-[720px] mx-auto px-6 lg:px-16">

        <span className="t-eyebrow text-[var(--paper)] block mb-6" style={{ opacity: 0.6 }}>
          WHAT YOU TAKE HOME
        </span>

        <h2 className="t-display-2 text-[var(--paper)] mb-10">
          You leave with more than photos.
        </h2>

        <p className="t-h3-italic text-[var(--paper)] mb-4">
          <em>You leave with:</em>
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

        <div className="flex justify-center mt-16 opacity-40">
          <HandSquiggle className="text-[var(--wheat)] w-24 h-5" />
        </div>

      </div>
    </section>
  );
}
