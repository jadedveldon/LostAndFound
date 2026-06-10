import React from "react";

const includedItems = [
  "6 Nights / 7 Days Accommodation",
  "Curated Villa Stay",
  "Daily Meals & Snacks",
  "Yoga & Movement Sessions",
  "Workshops & Experiences",
  "Local Transport For Planned Activities",
  "Community Events",
  "Airport Guidance & Coordination",
  "Welcome Gifting",
  "Curated Host Support Throughout",
  "Fun Locally Crafted Goodie Bags",
];

const notIncludedItems = [
  "International Flights",
  "Visa Fees",
  "Personal Shopping",
  "Optional Add-On Activities",
  "Solo Exploration Day Costs",
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
          <h2 className="t-h1 text-[var(--ink)] whitespace-nowrap">
            Everything taken care of.
          </h2>
        </div>

        {/* Two-column layout with vertical separator */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">

          {/* Left — Included */}
          <div className="w-full lg:w-1/2 lg:pr-16 lg:border-r lg:border-[var(--ink)]/10">
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
          <div className="w-full lg:w-1/2 lg:pl-16">
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

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#request-invite" className="btn btn-primary px-10 py-4 tracking-widest text-sm">
            Apply Now →
          </a>
        </div>

      </div>
    </section>
  );
}
