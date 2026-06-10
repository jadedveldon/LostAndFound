"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Placeholder } from "@/components/ui/Placeholder";

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section style={{ width: "100%" }}>
      {/* Part A — Cinematic image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "75vh", minHeight: "400px" }}
      >
        <Placeholder className="absolute inset-0" />
        {/* Dark gradient overlay at the bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(31,29,26,0.55) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Part B — Below-image text block */}
      <div
        style={{ background: "var(--paper)" }}
        className="py-[var(--space-24)]"
      >
        <motion.div
          className="max-w-[640px] mx-auto text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          style={shouldReduceMotion ? { opacity: 1, transform: "none" } : undefined}
        >
          {/* Main copy */}
          <p className="t-display-2 text-[var(--ink)] leading-[1.1] mb-2">
            Maybe the reset you need…
          </p>
          <p className="t-display-2 text-[var(--ink)] leading-[1.1] mb-2">
            isn&apos;t doing more.
          </p>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-brush)",
              color: "var(--clay)",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              marginBottom: "2.5rem",
            }}
          >
            Maybe it&apos;s finally slowing down.
          </span>

          {/* Details strip */}
          <p className="t-mono text-[var(--ink-mute)] tracking-widest text-xs mb-2">
            AHANGAMA, SRI LANKA · AUG 20–26, 2026
          </p>

          {/* Urgency line */}
          <p className="t-body-italic text-[var(--denim)] mb-10">
            Applications close July 1st.
          </p>

          {/* CTA button */}
          <button
            className="btn btn-primary px-10 py-4 text-sm tracking-widest"
            onClick={() => {
              document.getElementById("request-invite")?.scrollIntoView({
                behavior: shouldReduceMotion ? "auto" : "smooth",
                block: "start",
              });
            }}
          >
            APPLY NOW →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
