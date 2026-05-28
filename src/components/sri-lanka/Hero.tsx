"use client";

import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HandUnderline } from "@/components/illustrations/hand";
import { TreatedImage } from "@/components/ui/TreatedImage";

const oneLinerPairs = [
  {
    line: "solo, but never lonely",
    alt: "A traveller alone on the porch at sunset, Ahangama",
    // TODO[ASSET]: replace with /images/sri-lanka/hero-1.jpg
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
    marginTop: 0,
  },
  {
    line: "shared meals > small talk",
    alt: "Long table dinner with strangers, candles, sea air",
    // TODO[ASSET]: replace with /images/sri-lanka/hero-2.jpg
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop",
    marginTop: 24,
  },
  {
    line: "culture beyond checklists",
    alt: "A quiet local moment — a vendor, a temple, a cup of tea",
    // TODO[ASSET]: replace with /images/sri-lanka/hero-3.jpg
    img: "https://images.unsplash.com/photo-1544016768-982d1554f7f2?q=80&w=600&auto=format&fit=crop",
    marginTop: -8,
  },
  {
    line: "less planning, more presence",
    alt: "Hands in lap, looking at the ocean, no phone",
    // TODO[ASSET]: replace with /images/sri-lanka/hero-4.jpg
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop",
    marginTop: 16,
  },
  {
    line: "beautiful strangers becoming stories",
    alt: "Two travellers laughing in conversation, low afternoon light",
    // TODO[ASSET]: replace with /images/sri-lanka/hero-5.jpg
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop",
    marginTop: -4,
  },
];

function smoothScrollTo(id: string, reducedMotion: boolean) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-start pt-20 pb-0 bg-[var(--paper)] overflow-hidden">
      <div className="container flex flex-col lg:flex-row gap-12 lg:gap-10 py-16 lg:py-24">

        {/* Left Column */}
        <div className="w-full lg:w-[52%] flex flex-col items-start z-10">

          {/* Eyebrow */}
          <motion.span
            className="t-eyebrow text-[var(--ink-mute)] block mb-6"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          >
            L&amp;F GATHERING · AHANGAMA, SRI LANKA · AUG 20–26, 2026
          </motion.span>

          {/* Main Heading */}
          <h1 className="mb-7">
            <motion.span
              className="t-display-1 text-[var(--ink)] block"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              Relearn the Art of
            </motion.span>
            <motion.span
              className="block"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.24 }}
            >
              <span className="inline-script-accent hero-script t-display-1">
                Slow Travel
              </span>
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p
            className="t-body-lg italic text-[var(--ink-soft)] mb-8 max-w-[440px] leading-[1.6]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
          >
            Seven days of ocean air, local culture, meaningful conversations, music-filled evenings, and a softer way of living.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-6 w-full sm:w-auto"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.46 }}
          >
            <MagneticButton
              onClick={() => smoothScrollTo("request-invite", !!shouldReduceMotion)}
              aria-label="Request my invite — scroll to application form"
            >
              Request My Invite
            </MagneticButton>
            <button
              onClick={() => smoothScrollTo("what-this-actually-is", !!shouldReduceMotion)}
              className="btn-ghost-hand relative"
              aria-label="Explore the gathering"
            >
              Explore The Gathering
              <HandUnderline className="btn-underline" />
            </button>
          </motion.div>

          {/* Trust Strip */}
          <motion.p
            className="t-mono text-[var(--ink-mute)] text-xs tracking-widest"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.54 }}
          >
            14 SEATS · 7 DAYS · ALL-INCLUSIVE · HOSTED BY TANYA &amp; KEERTHI
          </motion.p>
        </div>

        {/* Right Column — zigzag one-liner pairs */}
        <div className="w-full lg:w-[48%] flex flex-col gap-6">
          {oneLinerPairs.map((pair, idx) => {
            const imageLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                className={`flex items-center gap-4 ${imageLeft ? "flex-row" : "flex-row-reverse"}`}
                style={{ marginTop: pair.marginTop }}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.64 + idx * 0.08,
                }}
              >
                <div className="w-[55%] shrink-0">
                  <TreatedImage
                    src={pair.img}
                    alt={pair.alt}
                    className="w-full h-[180px] lg:h-[200px] object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p
                  className="t-h3-italic text-[var(--denim)] flex-1 leading-snug"
                  style={{ fontFamily: "var(--font-body)", fontStyle: "italic" }}
                >
                  <em>{pair.line}</em>
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
