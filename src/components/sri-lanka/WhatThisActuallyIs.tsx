"use client";

import React from "react"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { motion, useReducedMotion } from "framer-motion";
import { TreatedImage } from "@/components/ui/TreatedImage";
import { HandSquiggle } from "@/components/illustrations/hand";

export function WhatThisActuallyIs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="what-this-actually-is" className="w-full">

      {/* Sub-section A — Intro */}
      <div className="bg-[var(--paper)] py-[var(--space-24)]">
        <div className="container">
          <motion.span
            className="t-eyebrow text-[var(--ink-mute)] block mb-4"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            WHAT THIS ACTUALLY IS
          </motion.span>
          <motion.h2
            className="t-display-2 text-[var(--ink)] mb-6"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            What This Actually Is
          </motion.h2>
          <motion.p
            className="t-body-lg text-[var(--ink)] max-w-2xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
          >
            Most retreats sit on two extremes.
          </motion.p>
        </div>
      </div>

      {/* Sub-section B — Two extremes */}
      <div className="bg-[var(--paper)] pb-[var(--space-24)]">
        <div className="container">

          {/* Wellness row — text left, image right */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-12">
            <div className="w-full lg:w-[60%]">
              <p className="t-h3-italic text-[var(--denim)] mb-4">
                <em>On one side: the wellness retreat.</em>
              </p>
              <p className="t-body text-[var(--ink-soft)] leading-[1.6]">
                Beautiful, intentional… but sometimes overwhelming.<br />
                Rigid schedules. Forced healing. Constant introspection.<br />
                Wellness is becoming another thing to &ldquo;do right.&rdquo;
              </p>
            </div>
            <div className="w-full lg:w-[40%]">
              <figure
                className="polaroid"
                style={{ transform: "rotate(2deg)" }}
              >
                <TreatedImage
                  // TODO[ASSET]: replace with /images/sri-lanka/wellness-retreat.jpg
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop"
                  alt="Yoga wellness retreat scene"
                  className="w-full aspect-[4/3] object-cover"
                  style={{ objectFit: "cover" }}
                />
                <figcaption className="caption">the wellness route</figcaption>
              </figure>
            </div>
          </div>

          {/* Squiggle divider */}
          <div className="flex justify-center my-8 opacity-30">
            <HandSquiggle className="text-[var(--wheat)] w-24 h-4" />
          </div>

          {/* Adventure row — image left, text right */}
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center mt-12">
            <div className="w-full lg:w-[40%]">
              <figure
                className="polaroid"
                style={{ transform: "rotate(-3deg)" }}
              >
                <TreatedImage
                  // TODO[ASSET]: replace with /images/sri-lanka/adventure-trip.jpg
                  src="https://images.unsplash.com/photo-1530143584546-02191bc84eb5?q=80&w=600&auto=format&fit=crop"
                  alt="Adventure trip rafting high-energy group scene"
                  className="w-full aspect-[4/3] object-cover"
                  style={{ objectFit: "cover" }}
                />
                <figcaption className="caption">the adventure route</figcaption>
              </figure>
            </div>
            <div className="w-full lg:w-[60%]">
              <p className="t-h3-italic text-[var(--denim)] mb-4">
                <em>On the other side: the adventure trip.</em>
              </p>
              <p className="t-body text-[var(--ink-soft)] leading-[1.6]">
                Fast-paced itineraries. Constant movement. Tourist checklists.<br />
                Too much doing, not enough feeling.<br />
                You come back needing another vacation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-section C — Full-bleed "in between" image */}
      <div className="relative w-full overflow-hidden" style={{ height: "60vh", minHeight: 320 }}>
        <div className="absolute inset-0">
          <TreatedImage
            // TODO[ASSET]: replace with /images/sri-lanka/dinner-strip.jpg
            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop"
            alt="Warm evening long-table dinner, golden-hour gathering"
            className="w-full h-full"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="t-display-2 text-[var(--paper)] text-center px-6"
            style={{ textShadow: "0 2px 18px rgba(31,29,26,0.45)" }}
          >
            We exist somewhere in between.
          </p>
        </motion.div>
      </div>

      {/* Four phrases band */}
      <div className="w-full bg-[var(--paper-deep)] py-[var(--space-12)]">
        <div className="container max-w-[720px] mx-auto px-6 lg:px-16 text-center">
          <p className="t-h3-italic text-[var(--denim)] leading-[1.7]">
            <em>
              Enough stillness to breathe{" "}
              <span className="text-[var(--wheat)]">✦</span>{" "}
              Enough movement to feel alive{" "}
              <span className="text-[var(--wheat)]">✦</span>{" "}
              Enough structure to feel held{" "}
              <span className="text-[var(--wheat)]">✦</span>{" "}
              Enough freedom to explore.
            </em>
          </p>
        </div>
      </div>

      {/* Sub-section D — Framing close */}
      <div className="bg-[var(--paper)] py-[var(--space-24)]">
        <div className="container max-w-[720px] mx-auto px-6 lg:px-16">
          <p className="t-body-lg text-[var(--ink)] mb-6 leading-[1.65]">
            This isn&apos;t about escaping your life. Nor is it about fixing yourself either.
          </p>
          <p className="t-body-lg text-[var(--ink)] leading-[1.65]">
            It&apos;s about: good food, music-filled evenings, ocean air, meaningful conversations, local culture, solo exploration, beautiful people, and remembering what life feels like when it slows down.
          </p>
        </div>
      </div>

    </section>
  );
}
