"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const galleryItems = [
  { src: "/images/stayImages/1.jpg", alt: "Stay — image 1" },
  { src: "/images/stayImages/2.jpg", alt: "Stay — image 2" },
  { src: "/images/stayImages/3.jpg", alt: "Stay — image 3" },
  { src: "/images/stayImages/4.jpg", alt: "Stay — image 4" },
  { src: "/images/stayImages/8.jpg", alt: "Stay — image 5" },
  { src: "/images/stayImages/11.jpg", alt: "Stay — image 6" },
  { src: "/images/stayImages/15.jpg", alt: "Stay — image 7" },
  { src: "/images/stayImages/18.jpg", alt: "Stay — image 8" },
];

export function StayGallery() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="where-you-will-stay" className="w-full bg-[var(--paper)] py-[var(--space-24)]">
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
            WHERE YOU&apos;LL STAY
          </span>
          <h2 className="t-display-2 text-[var(--ink)]">
            A Private Villa in Ahangama
          </h2>
        </motion.div>
      </div>

      {/* Accordion gallery — desktop */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-6%" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="hidden md:flex w-full"
        onMouseLeave={() => setHoveredIdx(null)}
        style={{ height: 480 }}
      >
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            className="photo-treatment"
            style={{
              flex: hoveredIdx === idx ? 3 : 1,
              minWidth: 0,
              transition: "flex 0.45s cubic-bezier(0.22,1,0.36,1)",
              overflow: "hidden",
              height: 480,
              position: "relative",
              cursor: "pointer",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ))}
      </motion.div>

      {/* Horizontal scroll strip — mobile */}
      <div
        className="flex md:hidden"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          gap: 8,
          paddingLeft: "var(--gutter-mobile)",
          paddingRight: "var(--gutter-mobile)",
        }}
      >
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="photo-treatment"
            style={{
              width: "80vw",
              height: 260,
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
