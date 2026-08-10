import type { Metadata } from "next";
import { site } from "@/lib/content";
import EngagementsPageContent from "@/components/pages/EngagementsPageContent";

export const metadata: Metadata = {
  title: `Engagements — ${site.name}`,
  description:
    "Flagship NetSuite engagements and a full case-study archive spanning advisory, implementation, development, integration, and administration.",
};

export default function EngagementsPage() {
  return <EngagementsPageContent />;
}
