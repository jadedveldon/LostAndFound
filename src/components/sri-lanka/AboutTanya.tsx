"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TreatedImage } from "@/components/ui/TreatedImage";

const staggeredLines = [
  "conversations with strangers",
  "shared meals",
  "getting lost somewhere beautiful",
  "slowing down enough to actually notice life",
];

export function AboutTanya() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about-tanya"
      className="w-full bg-[var(--paper)] py-[var(--space-24)]"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-start">

          {/* Left column — portrait (~42%) */}
          <div className="w-full lg:w-[42%]">
            <TreatedImage
              src="/images/Tanya.png"
              alt="Tanya, your host"
              style={{
                aspectRatio: "4 / 5",
                objectFit: "cover",
                height: undefined,
              }}
              className="w-full lg:h-[560px]"
            />
            <p
              className="text-[var(--ink-mute)] text-sm text-center mt-3"
              style={{ fontFamily: "var(--font-brush)" }}
            >
              tanya &mdash; your host
            </p>
          </div>

          {/* Right column — bio (~58%) */}
          <div className="w-full lg:w-[58%] lg:pt-4">

            {/* Eyebrow */}
            <motion.p
              className="t-eyebrow text-[var(--ink-mute)] mb-4"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              YOUR HOST
            </motion.p>

            {/* Brush heading */}
            <motion.h2
              style={{
                fontFamily: "var(--font-brush)",
                color: "var(--clay)",
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 1.1,
              }}
              className="mb-6"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            >
              Hi, I&rsquo;m Tanya.
            </motion.h2>

            {/* Intro paragraphs */}
            <motion.p
              className="t-body-lg text-[var(--ink-soft)] leading-[1.7] mb-5"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              A marketer, community-builder, slow traveler, and someone deeply
              obsessed with creating meaningful experiences. Some of the most
              life-changing moments I&rsquo;ve had while travelling came from:
            </motion.p>

            {/* Staggered italic list */}
            <div className="flex flex-col mb-6" style={{ gap: "4px" }}>
              {staggeredLines.map((line, idx) => (
                <motion.p
                  key={line}
                  className="t-h3-italic text-[var(--denim)] mb-1"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.26 + idx * 0.1,
                  }}
                >
                  <em>{line}</em>
                </motion.p>
              ))}
            </div>

            {/* Closing lines */}
            <motion.div
              className="mt-6"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.68 }}
            >
              <p className="t-body-lg text-[var(--ink-soft)] leading-[1.7]">
                This gathering is an attempt to recreate that feeling for you
                all.
              </p>
              <p className="t-body-lg text-[var(--ink-soft)] leading-[1.7]">
                Not perfectly. Just honestly.
              </p>
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  );
}
