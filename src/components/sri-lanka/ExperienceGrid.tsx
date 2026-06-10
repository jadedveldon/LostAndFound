"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const experiences = [
  "Slow Mornings",
  "Movement Moments",
  "Journal & Self Reflection",
  "Growth Mindset Building",
  "Curated Meals & Community Building",
  "Cook With Me Session",
  "Wildlife & Sustainable Travel Awareness",
  "Solo Travel Day",
  "Creative Workshops & Activities",
  "Galle Exploration Day Trip",
  "Shopping & Lots of Free Time",
  "Surprise Concept Event with Locals",
];

export function ExperienceGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="band-paper-deep w-full py-[var(--space-24)]">
      <div className="container">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <span className="t-eyebrow text-[var(--ink-mute)] block mb-4">
            WHAT WE&apos;LL DO
          </span>
          <h2 className="t-h1 text-[var(--ink)]">
            Activities Curated For You
          </h2>
        </motion.div>

        {/* Experience grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {experiences.map((experience, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: shouldReduceMotion ? 0 : idx * 0.05,
              }}
              className="px-5 py-4"
            >
              <div className="flex items-baseline gap-2">
                <span
                  className="t-body text-[var(--clay)] select-none"
                  style={{ opacity: 0.6, flexShrink: 0 }}
                  aria-hidden="true"
                >
                  ✦
                </span>
                <span className="t-body text-[var(--ink)]">{experience}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing paragraph */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="t-h3-italic text-center mx-auto mt-12"
          style={{ maxWidth: 1100 }}
        >
          <em>Every day is intentionally flexible. There&apos;s enough structure to<br className="hidden lg:inline" />
          {" "}feel guided, and enough freedom to truly experience the days at your pace.</em>
        </motion.p>
      </div>
    </section>
  );
}
