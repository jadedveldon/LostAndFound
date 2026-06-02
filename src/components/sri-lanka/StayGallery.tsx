"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const galleryItems = [
  {
    // TODO[ASSET]: replace with /images/sri-lanka/stay-1.jpg
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800",
    alt: "Tropical villa exterior with lush greenery",
    label: "Villa · Sri Lanka",
  },
  {
    // TODO[ASSET]: replace with /images/sri-lanka/stay-2.jpg
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
    alt: "Bright hotel room with ocean views",
    label: "Suite · Sri Lanka",
  },
  {
    // TODO[ASSET]: replace with /images/sri-lanka/stay-3.jpg
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800",
    alt: "Serene resort pool surrounded by palms",
    label: "Pool · Sri Lanka",
  },
  {
    // TODO[ASSET]: replace with /images/sri-lanka/stay-4.jpg
    src: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=800",
    alt: "Open-air lounge with rattan furniture",
    label: "Lounge · Sri Lanka",
  },
  {
    // TODO[ASSET]: replace with /images/sri-lanka/stay-5.jpg
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800",
    alt: "Rooftop terrace overlooking the coastline",
    label: "Terrace · Sri Lanka",
  },
  {
    // TODO[ASSET]: replace with /images/sri-lanka/stay-6.jpg
    src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800",
    alt: "Hammock strung between palms at dusk",
    label: "Garden · Sri Lanka",
  },
  {
    // TODO[ASSET]: replace with /images/sri-lanka/stay-7.jpg
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800",
    alt: "Minimal bedroom with white linen and warm light",
    label: "Room · Sri Lanka",
  },
  {
    // TODO[ASSET]: replace with /images/sri-lanka/stay-8.jpg
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800",
    alt: "Infinity pool merging with the horizon",
    label: "Infinity Pool · Sri Lanka",
  },
];

export function StayGallery() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="w-full bg-[var(--paper)] py-[var(--space-24)]">
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
            Where you&apos;ll Stay
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
            {/* Gradient overlay with label — fades in on hover */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 40%, transparent 70%)",
                opacity: hoveredIdx === idx ? 1 : 0,
                transition: "opacity 0.35s cubic-bezier(0.22,1,0.36,1)",
                pointerEvents: "none",
                display: "flex",
                alignItems: "flex-end",
                padding: "20px 18px",
              }}
            >
              <span
                className="t-mono text-[var(--paper)]"
                style={{ letterSpacing: "0.12em", opacity: 0.9 }}
              >
                {item.label}
              </span>
            </div>
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
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)",
                pointerEvents: "none",
                display: "flex",
                alignItems: "flex-end",
                padding: "16px 14px",
              }}
            >
              <span
                className="t-mono text-[var(--paper)]"
                style={{ letterSpacing: "0.12em", opacity: 0.85 }}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
