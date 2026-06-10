"use client";

import { Placeholder } from "@/components/ui/Placeholder";

export function FinalCTA() {
  return (
    <section style={{ width: "100%" }}>
      {/* Part A — Cinematic image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "75vh", minHeight: "400px" }}
      >
        <Placeholder className="absolute inset-0" />
      </div>

    </section>
  );
}
