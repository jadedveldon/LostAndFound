import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { WeDontSellTrips } from "@/components/home/WeDontSellTrips";
import { WhoWeVibeWith } from "@/components/home/WhoWeVibeWith";
import { UpcomingGatherings } from "@/components/home/UpcomingGatherings";
import { ModularCuration } from "@/components/home/ModularCuration";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { JournalPreview } from "@/components/home/JournalPreview";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        <Hero />
        <WeDontSellTrips />
        <WhoWeVibeWith />
        <UpcomingGatherings />
        <ModularCuration />
        <ReviewsCarousel />
        <JournalPreview />
      </main>
      <Footer />
    </>
  );
}
