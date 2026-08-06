import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Get in touch with ${site.name}, ${site.role}.`,
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/waseemakhtarr",
    href: site.linkedin,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="bg-page px-6 pb-16 pt-20 text-center md:pt-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[15px] font-semibold tracking-tight text-accent">
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-heading text-[34px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[50px]">
              Let&rsquo;s connect and sync your systems.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-page-foreground-muted">
              Whether it&rsquo;s a new NetSuite integration, a stuck
              production issue, or an ERP architecture review — reach out
              directly, I typically reply within a day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={0.05 * i}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className="group flex h-full flex-col justify-between rounded-2xl bg-surface-card p-8 transition-shadow hover:shadow-lg"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-tag-bg text-surface-foreground transition-colors group-hover:bg-accent group-hover:text-white">
                      <c.icon size={18} />
                    </div>
                    <p className="mt-6 text-[13px] font-semibold uppercase tracking-wider text-surface-foreground-muted">
                      {c.label}
                    </p>
                    <p className="mt-1 font-heading text-[18px] font-semibold text-surface-foreground">
                      {c.value}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-1 text-[13.5px] font-semibold text-accent">
                    Reach out <ArrowUpRight size={14} />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 flex flex-col items-start gap-3 border-t border-surface-border pt-10 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-[14px] text-surface-foreground-muted">
                <MapPin size={16} className="text-surface-foreground-muted" />
                {site.location}
              </div>
              <a
                href={site.resumeFile}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-semibold text-surface-foreground underline decoration-surface-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Download my resume
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
