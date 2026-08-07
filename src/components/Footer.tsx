"use client";

import Link from "next/link";
import { nav } from "@/lib/content";
import {
  defaultSiteSettings,
  fetchSiteSettings,
  defaultHomeContent,
  fetchHomeContent,
} from "@/lib/content-store";
import { useLiveData } from "@/hooks/useLiveData";

export default function Footer() {
  const site = useLiveData(fetchSiteSettings, defaultSiteSettings);
  const { platforms } = useLiveData(fetchHomeContent, defaultHomeContent);

  return (
    <footer className="border-t border-page-border bg-page text-page-foreground">
      <div className="overflow-hidden border-b border-page-border py-6">
        <div className="no-scrollbar flex animate-none flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 text-[15px] font-semibold tracking-tight text-page-foreground-muted md:gap-x-14">
          {platforms.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-[17px] font-semibold text-page-foreground">
              {site.name}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-page-foreground-muted">
              {site.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-page-foreground-muted/70">
                Navigate
              </p>
              <ul className="mt-3 space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-page-foreground-muted transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-page-foreground-muted/70">
                Contact
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[14px] text-page-foreground-muted transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="text-[14px] text-page-foreground-muted transition-colors hover:text-accent"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14px] text-page-foreground-muted transition-colors hover:text-accent"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-page-border pt-6 md:flex-row">
          <p className="text-[13px] text-page-foreground-muted/70">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-page-foreground-muted/70">{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
