"use client";

import React from "react"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { motion, useReducedMotion } from "framer-motion";
import { TreatedImage } from "@/components/ui/TreatedImage";

export function WhatThisActuallyIs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="what-this-actually-is" className="w-full">

      {/* Sub-section A — Intro */}
      <div className="bg-[var(--paper)] py-[var(--space-24)]">
        <div className="container">
          <motion.h2
            className="t-display-2 text-[var(--ink)] mb-0"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Most retreats sit on two extremes.
          </motion.h2>
        </div>
      </div>

      {/* Sub-section B — Two extremes: side-by-side on desktop */}
      <div className="bg-[var(--paper)] pb-[var(--space-24)]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">

            {/* Left half — Wellness */}
            <div className="w-full lg:w-1/2 lg:pr-12 lg:border-r lg:border-[var(--ink)]/10 flex flex-col">
              <p className="t-h3-italic text-[var(--denim)] mb-4">
                <em>On one side: the wellness retreat.</em>
              </p>
              <p className="t-body text-[var(--ink-soft)] leading-[1.6] mb-8">
                Beautiful, intentional… but sometimes overwhelming.<br />
                Rigid schedules. Forced healing. Constant introspection.<br />
                Wellness is becoming another thing to &ldquo;do right.&rdquo;
              </p>
              {/* TODO[ASSET]: replace src with /images/sri-lanka/wellness-retreat.jpg */}
              <figure
                className="polaroid w-full"
                style={{ transform: "rotate(2deg)" }}
              >
                <TreatedImage
                  src="/images/l&f Website - 10.png"
                  alt="Yoga wellness retreat scene"
                  className="w-full ![aspect-ratio:4/1]"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <figcaption className="caption">the wellness route</figcaption>
              </figure>
            </div>

            {/* Right half — Adventure */}
            <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col">
              <p className="t-h3-italic text-[var(--denim)] mb-4">
                <em>On the other side: the adventure trip.</em>
              </p>
              <p className="t-body text-[var(--ink-soft)] leading-[1.6] mb-8">
                Fast-paced itineraries. Constant movement. Tourist checklists.<br />
                Too much doing, not enough feeling.<br />
                You come back needing another vacation.
              </p>
              {/* TODO[ASSET]: replace src with /images/sri-lanka/adventure-trip.jpg */}
              <figure
                className="polaroid w-full"
                style={{ transform: "rotate(-3deg)" }}
              >
                <TreatedImage
                  src="/images/l&f Website - 11.png"
                  alt="Adventure trip rafting high-energy group scene"
                  className="w-full ![aspect-ratio:4/1]"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <figcaption className="caption">the adventure route</figcaption>
              </figure>
            </div>

          </div>
        </div>
      </div>

      {/* Sub-section C — Full-bleed "in between" image */}
      <div className="relative w-full overflow-hidden" style={{ height: "60vh", minHeight: 320 }}>
        <div className="absolute inset-0">
          <TreatedImage
            src="/images/between.png"
            alt="We exist somewhere in between"
            className="w-full h-full"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
      </div>

      {/* Enough — image band */}
      <div className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/enough.png"
          alt="Enough stillness to breathe. Enough movement to feel alive. Enough structure to feel held. Enough freedom to explore."
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>

      {/* CTA after enough image */}
      <div className="bg-[var(--paper-deep)] py-[var(--space-12)] text-center">
        <a href="#request-invite" className="btn btn-primary px-10 py-4 tracking-widest text-sm">
          Request Your Invite
        </a>
      </div>


    </section>
  );
}
