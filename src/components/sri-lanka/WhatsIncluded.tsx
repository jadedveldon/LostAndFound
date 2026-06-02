import React from "react";

const includedItems = [
  "6 nights / 7 days accommodation",
  "Curated villa stay",
  "Daily meals & snacks",
  "Yoga & movement sessions",
  "Workshops & experiences",
  "Local transport for planned activities",
  "Community events",
  "Airport guidance & coordination",
  "Welcome gifting",
  "Curated host support throughout",
  "Fun locally crafted goodie bags",
];

const notIncludedItems = [
  "International flights",
  "Visa fees",
  "Personal shopping",
  "Optional add-on activities",
  "Solo exploration day costs",
];

export function WhatsIncluded() {
  return (
    <section
      id="whats-included"
      className="w-full bg-[var(--paper-deep)] py-[var(--space-24)]"
    >
      <div className="container max-w-4xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="t-eyebrow text-[var(--ink-mute)] mb-4">
            WHAT&rsquo;S INCLUDED
          </p>
          <h2 className="t-display-2 text-[var(--ink)]">
            Everything taken care of.
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left — Included */}
          <div className="w-full lg:w-1/2">
            <h3 className="t-h3-italic text-[var(--moss)] mb-8">
              <em>included</em>
            </h3>
            <div className="flex flex-col" style={{ gap: "10px" }}>
              {includedItems.map((item) => (
                <div
                  key={item}
                  className="flex items-baseline"
                  style={{ gap: "12px" }}
                >
                  <span
                    className="t-body font-bold text-[var(--moss)] shrink-0 leading-[1.65]"
                    aria-hidden="true"
                  >
                    ✔
                  </span>
                  <span className="t-body text-[var(--ink)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Not Included */}
          <div className="w-full lg:w-1/2">
            <h3 className="t-h3-italic text-[var(--clay)] mb-8">
              <em>not included</em>
            </h3>
            <div className="flex flex-col" style={{ gap: "10px" }}>
              {notIncludedItems.map((item) => (
                <div
                  key={item}
                  className="flex items-baseline"
                  style={{ gap: "12px" }}
                >
                  <span
                    className="t-body font-bold text-[var(--clay)] shrink-0 leading-[1.65]"
                    aria-hidden="true"
                  >
                    ✘
                  </span>
                  <span className="t-body text-[var(--ink)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
