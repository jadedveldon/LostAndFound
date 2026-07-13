import React from "react";

const logisticsCols = [
  { label: "DATES", value: "Aug 20–26, 2026", subtext: "" },
  { label: "WHERE", value: "Ahangama, Sri Lanka", subtext: "" },
  { label: "NO. OF PEOPLE", value: "10 travellers", subtext: "" },
  { label: "EARLY BIRD PRICE", value: "₹99,999", subtext: "$1,200 USD · Double sharing" },
];

export function LogisticsStrip() {
  return (
    <section className="band-paper-deep w-full py-[var(--space-12)]">
      <div className="container">

        {/* Three-column quick reference */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {logisticsCols.map((col) => (
            <div key={col.label} className="border-l border-[var(--ink)]/15 pl-6">
              <span className="t-eyebrow text-[var(--ink-mute)] block mb-2">{col.label}</span>
              <span className="t-h4 text-[var(--ink)]">{col.value}</span>
              {col.subtext && (
                <span className="t-mono text-[var(--ink-mute)] text-xs block mt-1">{col.subtext}</span>
              )}
            </div>
          ))}
        </div>

        {/* Inclusions strip */}
        <p className="t-mono text-[var(--ink-mute)] text-center tracking-widest text-xs mb-6">
          For private stay options or group bookings contact host
        </p>

        {/* Deposit note */}
        <p className="t-mono text-[var(--clay)] text-center tracking-widest text-xs mt-6 font-bold">
          30% DEPOSIT · $360 USD · TO SECURE YOUR SPOT
        </p>

      </div>
    </section>
  );
}
