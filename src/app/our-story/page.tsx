import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HandSquiggle } from "@/components/illustrations/hand";
import { StoryHero } from "@/components/our-story/StoryHero";
import { WhyWeStarted } from "@/components/our-story/WhyWeStarted";
import { WhoWeAre } from "@/components/our-story/WhoWeAre";
import { Philosophy } from "@/components/our-story/Philosophy";
import { BePartOfLF } from "@/components/our-story/BePartOfLF";
import { MomentsGallery } from "@/components/our-story/MomentsGallery";
import { StoryContactCTA } from "@/components/our-story/StoryContactCTA";

export const metadata: Metadata = {
  title: "Why We're Here | Lost & Found",
  description:
    "Lost & Found was born from a simple belief: travel shouldn't feel like a stressful project you have to excel in. Meet the people behind the journeys.",
};

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        <StoryHero />
        <WhyWeStarted />

        {/* Squiggle divider — paper bg matches WhoWeAre */}
        <div className="w-full bg-[var(--paper)] py-6 flex justify-center">
          <HandSquiggle className="w-36 h-6 text-[var(--ink-mute)]/25" />
        </div>

        <WhoWeAre />
        <Philosophy />

        {/* Squiggle divider — paper bg matches BePartOfLF */}
        <div className="w-full bg-[var(--paper)] py-6 flex justify-center">
          <HandSquiggle className="w-36 h-6 text-[var(--ink-mute)]/25" />
        </div>

        <BePartOfLF />
        <MomentsGallery />
        <StoryContactCTA />
      </main>
      <Footer />
    </>
  );
}
