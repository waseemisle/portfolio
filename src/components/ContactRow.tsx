import { Mail, Phone } from "lucide-react";
import LinkedinIcon from "./icons/LinkedinIcon";
import { SiteSettings } from "@/lib/content-store";

export default function ContactRow({
  site,
  className,
}: {
  site: Pick<SiteSettings, "email" | "phone" | "phoneHref" | "linkedin">;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 text-[14px] font-medium ${className ?? ""}`}
    >
      <a
        href={`mailto:${site.email}`}
        className="flex items-center gap-2 rounded-full border border-page-border px-4 py-2 text-page-foreground-muted transition-colors hover:border-page-foreground/40 hover:text-page-foreground"
      >
        <Mail size={14} /> {site.email}
      </a>
      <a
        href={`tel:${site.phoneHref}`}
        className="flex items-center gap-2 rounded-full border border-page-border px-4 py-2 text-page-foreground-muted transition-colors hover:border-page-foreground/40 hover:text-page-foreground"
      >
        <Phone size={14} /> {site.phone}
      </a>
      <a
        href={site.linkedin}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full border border-page-border px-4 py-2 text-page-foreground-muted transition-colors hover:border-page-foreground/40 hover:text-page-foreground"
      >
        <LinkedinIcon size={14} /> LinkedIn
      </a>
    </div>
  );
}
