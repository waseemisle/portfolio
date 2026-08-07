import type { Metadata } from "next";
import { site } from "@/lib/content";
import ExpertisePageContent from "@/components/pages/ExpertisePageContent";

export const metadata: Metadata = {
  title: `Expertise — ${site.name}`,
  description:
    "Industry expertise across eCommerce, manufacturing, financial services, logistics, CRM, and marketplace integrations with NetSuite.",
};

export default function ExpertisePage() {
  return <ExpertisePageContent />;
}
