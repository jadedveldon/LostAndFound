import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { WeDontSellTrips } from "@/components/home/WeDontSellTrips";
import { WhoWeVibeWith } from "@/components/home/WhoWeVibeWith";
import { UpcomingGatherings } from "@/components/home/UpcomingGatherings";
import { ModularCuration } from "@/components/home/ModularCuration";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { JournalPreview } from "@/components/home/JournalPreview";
import { HandSquiggle } from "@/components/illustrations/hand";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        <Hero />
        <WeDontSellTrips />

        {/* Squiggle divider — paper bg matches WeDontSellTrips */}
        <div className="w-full bg-[var(--paper)] py-6 flex justify-center">
          <HandSquiggle className="w-36 h-6 text-[var(--ink-mute)]/25" />
        </div>

        <WhoWeVibeWith />

        {/* Squiggle divider — paper-deep bg matches WhoWeVibeWith */}
        <div className="w-full bg-[var(--paper-deep)] py-6 flex justify-center">
          <HandSquiggle className="w-36 h-6 text-[var(--ink-mute)]/25" />
        </div>

        <UpcomingGatherings />
        <ModularCuration />
        <ReviewsCarousel />

        {/* Squiggle divider — paper bg matches ReviewsCarousel */}
        <div className="w-full bg-[var(--paper)] py-6 flex justify-center">
          <HandSquiggle className="w-36 h-6 text-[var(--ink-mute)]/25" />
        </div>

        <JournalPreview />
      </main>
      <Footer />
    </>
  );
}
