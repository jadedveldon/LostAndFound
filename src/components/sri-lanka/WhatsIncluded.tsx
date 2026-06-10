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
          <p className="t-display-2 text-[var(--ink)] mb-4">
            The Package
          </p>
        </div>

        {/* Two-column layout with vertical separator */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left — Included */}
          <div className="w-full lg:w-1/2">
            <h3 className="t-h3-italic text-[var(--moss)] mb-8">
              <em>Included</em>
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
              <em>Not Included</em>
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
            Request Your Invite
          </a>
        </div>

      </div>
    </section>
  );
}
