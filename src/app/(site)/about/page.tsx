import type { Metadata } from "next";
import { about, site } from "@/lib/content";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: `About ${site.name}, ${site.role}. ${about.bio[0]}`,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
