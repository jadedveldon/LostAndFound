"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const TARGET = new Date("2026-08-01T23:59:59+05:30"); // IST end of day

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft | null {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export function Countdown() {
  const shouldReduceMotion = useReducedMotion();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(undefined);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Avoid hydration mismatch — render nothing until client has mounted
  if (timeLeft === undefined) return null;

  const units = timeLeft
    ? [
        { value: pad(timeLeft.days), label: "DAYS" },
        { value: pad(timeLeft.hours), label: "HRS" },
        { value: pad(timeLeft.minutes), label: "MIN" },
        { value: pad(timeLeft.seconds), label: "SEC" },
      ]
    : null;

  return (
    <section className="band-clay w-full py-[var(--space-24)]">
      <div className="container" style={{ maxWidth: 800 }}>

        {/* Eyebrow */}
        <p className="t-eyebrow text-[var(--paper)] opacity-70 mb-4 text-center">
          Applications close
        </p>

        {/* Date heading */}
        <h2 className="t-display-2 text-[var(--paper)] text-center mb-10">
          August 1st, 2026
        </h2>

        {/* Countdown or closed message */}
        {units ? (
          <div className="flex flex-row flex-wrap gap-6 justify-center items-center">
            {units.map((unit, idx) => (
              <React.Fragment key={unit.label}>
                {/* Block */}
                <div className="flex flex-col items-center">
                  <span
                    className="text-[var(--paper)]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(48px, 7vw, 88px)",
                      lineHeight: 1,
                    }}
                  >
                    {unit.value}
                  </span>
                  <span className="t-eyebrow text-[var(--paper)] opacity-60 text-xs mt-2">
                    {unit.label}
                  </span>
                </div>

                {/* Dot separator — not after last */}
                {idx < units.length - 1 && (
                  <span
                    className="text-[var(--paper)] opacity-40 text-4xl self-center"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <p className="t-body-lg text-[var(--paper)] text-center">
            Applications are now closed.
          </p>
        )}

        {/* Divider */}
        <hr className="border-[var(--paper)]/20 my-10" />

        {/* Pricing block */}
        <div className="flex flex-col items-center text-center">
          <p className="t-eyebrow text-[var(--paper)] opacity-70 mb-3">
            EARLY BIRD PRICING
          </p>
          <p
            className="text-[var(--paper)]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
            }}
          >
            ₹99,999
          </p>
          <p className="t-mono text-[var(--paper)] opacity-50 text-sm tracking-widest mt-1">
            $1,200 USD
          </p>
          <p className="t-mono text-[var(--paper)] opacity-70 text-xs tracking-widest mt-2">
            30% DEPOSIT · $360 USD · TO SECURE YOUR SPOT
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            className="bg-[var(--paper)] text-[var(--clay)] px-8 py-3 t-mono text-xs uppercase tracking-widest font-bold hover:bg-[var(--paper-deep)] transition-colors cursor-pointer"
            onClick={() => {
              document.getElementById("request-invite")?.scrollIntoView({
                behavior: shouldReduceMotion ? "auto" : "smooth",
                block: "start",
              });
            }}
          >
            REQUEST YOUR INVITE
          </button>
        </div>

      </div>
    </section>
  );
}
