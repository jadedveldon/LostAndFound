import type { Metadata } from "next";
import { ExperiencesCatalogue } from "./ExperiencesCatalogue";

export const metadata: Metadata = {
  title: "Experiences — L&F | Lost & Found",
  description: "Small-group, hosted, all-inclusive trips. 10 to 14 seats per cohort.",
};

export default function ExperiencesPage() {
  return <ExperiencesCatalogue />;
}
