import React from "react";

const logisticsCols = [
  { label: "DATES", value: "Aug 20–26, 2026" },
  { label: "WHERE", value: "Ahangama, Sri Lanka" },
  { label: "COHORT", value: "14 travellers · hosted" },
];

export function LogisticsStrip() {
  return (
    <section className="band-paper-deep w-full py-[var(--space-12)]">
      <div className="container">

        {/* Three-column quick reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {logisticsCols.map((col) => (
            <div key={col.label} className="border-l border-[var(--ink)]/15 pl-6">
              <span className="t-eyebrow text-[var(--ink-mute)] block mb-2">{col.label}</span>
              <span className="t-h4 text-[var(--ink)]">{col.value}</span>
            </div>
          ))}
        </div>

        {/* Inclusions strip */}
        <p className="t-mono text-[var(--ink-mute)] text-center tracking-widest text-xs mb-6">
          STAY INCLUDED · MOST MEALS INCLUDED · LOCAL EXPERIENCES INCLUDED · AIRPORT PICKUPS INCLUDED · FLIGHTS NOT INCLUDED
        </p>

        {/* Pricing gate line */}
        <p className="t-body-italic text-[var(--ink-mute)] text-center" style={{ fontFamily: "var(--font-body)", fontStyle: "italic" }}>
          <em>For pricing and full inclusions, request your invite below.</em>
        </p>

      </div>
    </section>
  );
}
