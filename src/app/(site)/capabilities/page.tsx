import type { Metadata } from "next";
import { site } from "@/lib/content";
import CapabilitiesPageContent from "@/components/pages/CapabilitiesPageContent";

export const metadata: Metadata = {
  title: `Capabilities — ${site.name}`,
  description:
    "Advisory and solution design, functional configuration, technical development, integration engineering, and administration — the full NetSuite capability set.",
};

export default function CapabilitiesPage() {
  return <CapabilitiesPageContent />;
}
