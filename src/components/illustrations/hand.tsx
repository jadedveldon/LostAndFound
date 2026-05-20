"use client";
import React from 'react';
import { motion } from "framer-motion";

const draw = {
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true, margin: "-12%" },
};
const ease = [0.22, 1, 0.36, 1] as const;

export function HandUnderline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 22" fill="none" className={className} aria-hidden="true">
      <motion.path
        d="M5 13 C 64 4 128 19 192 10 C 240 4 280 9 315 14"
        stroke="currentColor" strokeWidth={3.4} strokeLinecap="round"
        {...draw} transition={{ duration: 0.62, ease }}
      />
    </svg>
  );
}

export function HandArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 96" fill="none" className={className} aria-hidden="true">
      <motion.path
        d="M8 18 C 26 64 64 82 108 54"
        stroke="currentColor" strokeWidth={3.2} strokeLinecap="round"
        {...draw} transition={{ duration: 0.7, ease }}
      />
      <motion.path
        d="M90 64 L 110 52 L 100 30"
        stroke="currentColor" strokeWidth={3.2}
        strokeLinecap="round" strokeLinejoin="round"
        {...draw} transition={{ duration: 0.4, ease, delay: 0.55 }}
      />
    </svg>
  );
}

export function HandCircle({ className = "" }: { className?: string }) {
  // intentionally not perfectly closed — the overshoot at the end sells "hand"
  return (
    <svg viewBox="0 0 220 120" fill="none" className={className} aria-hidden="true">
      <motion.path
        d="M112 9 C 48 7 11 32 11 60 C 11 94 66 111 120 110 C 178 109 210 82 207 52 C 204 24 162 8 104 10 C 86 11 70 16 58 24"
        stroke="currentColor" strokeWidth={3} strokeLinecap="round"
        {...draw} transition={{ duration: 0.9, ease }}
      />
    </svg>
  );
}

export function HandSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 16" fill="none" className={className} aria-hidden="true">
      <motion.path
        d="M3 9 Q 14 1 25 9 T 47 9 T 69 9 T 91 9 T 113 9 T 137 9"
        stroke="currentColor" strokeWidth={2.6} strokeLinecap="round"
        {...draw} transition={{ duration: 0.7, ease }}
      />
    </svg>
  );
}

export function HandCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <motion.path d="M5 15 C 8 18 10 21 12 23 C 16 15 20 9 25 5"
        stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"
        {...draw} transition={{ duration: 0.5, ease }} />
    </svg>
  );
}

export function HandCross({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <motion.path d="M6 6 C 12 12 17 17 22 22 M22 6 C 17 11 12 17 6 22"
        stroke="currentColor" strokeWidth={3} strokeLinecap="round"
        {...draw} transition={{ duration: 0.5, ease }} />
    </svg>
  );
}
