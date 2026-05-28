import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sri-lanka/Hero";
import { StickyBanner } from "@/components/sri-lanka/StickyBanner";
import { ChaoticVacationOverlay } from "@/components/sri-lanka/ChaoticVacationOverlay";
import { WhatThisActuallyIs } from "@/components/sri-lanka/WhatThisActuallyIs";
import { YouLeaveWith } from "@/components/sri-lanka/YouLeaveWith";
import { LogisticsStrip } from "@/components/sri-lanka/LogisticsStrip";
import { InviteForm } from "@/components/sri-lanka/InviteForm";

export const metadata: Metadata = {
  title: "Relearn the Art of Slow Travel — Sri Lanka · Aug 20–26, 2026 | Lost & Found",
  description:
    "Seven days of ocean air, local culture, meaningful conversations, music-filled evenings, and a softer way of living. An L&F Gathering in Ahangama, Sri Lanka.",
  openGraph: {
    title: "Relearn the Art of Slow Travel — Sri Lanka · Aug 20–26, 2026",
    description:
      "Seven days of ocean air, local culture, meaningful conversations, music-filled evenings, and a softer way of living. An L&F Gathering in Ahangama, Sri Lanka.",
    type: "website",
  },
};

export default function GatheringsSriLankaPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        <Hero />
        <StickyBanner />
        <ChaoticVacationOverlay />
        <WhatThisActuallyIs />
        <YouLeaveWith />
        <LogisticsStrip />
        <InviteForm />
      </main>
      <Footer />
    </>
  );
}
