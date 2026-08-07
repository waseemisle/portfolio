import type { Metadata } from "next";
import { site } from "@/lib/content";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Get in touch with ${site.name}, ${site.role}.`,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
