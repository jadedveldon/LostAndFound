"use client";

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
            src="/images/chaotic-vacation.png"
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
            maxWidth: 860,
            fontFamily: "var(--font-display)",
            color: "var(--paper)",
            fontSize: "clamp(32px, 3.5vw, 52px)",
            lineHeight: 1.15,
            textShadow: "0 2px 18px rgba(31,29,26,0.42)",
          }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Most of us don&apos;t need<br />another chaotic vacation.
        </motion.div>
      </section>

      {/* Below-image copy */}
      <section className="bg-[var(--paper)] w-full py-[var(--space-24)]">
        <div className="container max-w-[1200px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">

            {/* Left column — copy */}
            <div className="w-full md:w-[55%]">
              <p className="t-display-2 text-[var(--ink)] mb-6">We need:</p>

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
                className="t-h3-italic text-[var(--denim)]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <em>This gathering was created for exactly that.</em>
              </motion.p>
              <div className="mt-8">
                <a href="#request-invite" className="btn btn-primary">
                  Request Your Invite
                </a>
              </div>
            </div>

            {/* Right column — landing page image */}
            <div className="w-full md:w-[45%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/l&f Website - sri lanka -landing page.png"
                alt="Sri Lanka gathering experience"
                className="w-full h-auto"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
