"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HandUnderline } from "@/components/illustrations/hand";
import { Placeholder } from "@/components/ui/Placeholder";

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
              className="t-h1 text-[var(--ink)] block whitespace-nowrap leading-none mb-[-0.18em]"
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
              <span className="inline-script-accent hero-script" style={{ fontSize: 'clamp(72px, 11.5vw, 148px)' }}>
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
            12 SEATS · 7 DAYS · ALL-INCLUSIVE · HOSTED BY TANYA
          </motion.p>
        </div>

        {/* Right Column — placeholder */}
        <div className="w-full lg:w-[48%] flex items-stretch">
          <Placeholder className="w-full" style={{ minHeight: 480 }} />
        </div>
      </div>
    </section>
  );
}
