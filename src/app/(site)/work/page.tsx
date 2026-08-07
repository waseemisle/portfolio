import type { Metadata } from "next";
import { site } from "@/lib/content";
import WorkPageContent from "@/components/pages/WorkPageContent";

export const metadata: Metadata = {
  title: `Work — ${site.name}`,
  description:
    "Enterprise NetSuite integrations across eCommerce, wholesale, logistics, and finance systems.",
};

export default function WorkPage() {
  return <WorkPageContent />;
}
