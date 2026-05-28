"use client";

import React from "react"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { motion, useReducedMotion } from "framer-motion";
import { TreatedImage } from "@/components/ui/TreatedImage";
import { HandCheck } from "@/components/illustrations/hand";

const needItems = [
  "Space to breathe",
  "Time away from constant decision-making",
  "Meaningful connections",
  "New guided experiences",
  "A reminder that life can feel softer",
];

export function ChaoticVacationOverlay() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Full-bleed image */}
      <section className="relative w-full overflow-hidden" style={{ height: "70vh", minHeight: 360 }}>
        <div className="absolute inset-0">
          <TreatedImage
            // TODO[ASSET]: replace with /images/sri-lanka/chaotic-vacation.jpg
            src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1600&auto=format&fit=crop"
            alt="Aerial of palm-fringed beach with rock formations, Ahangama Sri Lanka"
            className="w-full h-full"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <motion.div
          className="chaotic-overlay-text"
          style={{
            position: "absolute",
            top: "12%",
            left: "6%",
            maxWidth: 620,
            fontFamily: "var(--font-display)",
            color: "var(--paper)",
            fontSize: "var(--type-display-2)",
            lineHeight: 1.05,
            textShadow: "0 2px 18px rgba(31,29,26,0.42)",
          }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Most of us don&apos;t need another chaotic vacation.
        </motion.div>
      </section>

      {/* Below-image copy */}
      <section className="bg-[var(--paper)] w-full py-[var(--space-24)]">
        <div className="container max-w-[720px] mx-auto px-6 lg:px-16">
          <p className="t-body-lg text-[var(--ink)] mb-6">We need:</p>

          <ul className="flex flex-col gap-4 mb-10">
            {needItems.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-4"
                initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
              >
                <span className="shrink-0 mt-1 w-6 h-6 text-[var(--moss)] block">
                  <HandCheck className="w-full h-full" />
                </span>
                <span className="t-body-lg text-[var(--ink)] leading-[1.6]">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            className="t-h3-italic text-[var(--denim)] text-center"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <em>This gathering was created for exactly that.</em>
          </motion.p>
        </div>
      </section>
    </>
  );
}
