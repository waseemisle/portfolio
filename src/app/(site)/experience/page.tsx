import type { Metadata } from "next";
import { about, site } from "@/lib/content";
import ExperiencePageContent from "@/components/pages/ExperiencePageContent";

export const metadata: Metadata = {
  title: `Experience — ${site.name}`,
  description: `Work history, skills, and education for ${site.name}. ${about.bio[0]}`,
};

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
