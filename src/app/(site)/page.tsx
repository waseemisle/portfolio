"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactRow from "@/components/ContactRow";
import PlatformsMarquee from "@/components/PlatformsMarquee";
import LifecycleStrip from "@/components/LifecycleStrip";
import CapabilityMatrix from "@/components/CapabilityMatrix";
import FlagshipCase from "@/components/FlagshipCase";
import { useLiveData } from "@/hooks/useLiveData";
import {
  defaultSiteSettings,
  fetchSiteSettings,
  defaultHomeContent,
  fetchHomeContent,
  defaultAboutContent,
  fetchAboutContent,
  defaultProjects,
  fetchProjects,
} from "@/lib/content-store";

export default function Home() {
  const site = useLiveData(fetchSiteSettings, defaultSiteSettings);
  const home = useLiveData(fetchHomeContent, defaultHomeContent);
  const about = useLiveData(fetchAboutContent, defaultAboutContent);
  const projects = useLiveData(fetchProjects, defaultProjects);
  const { pillars, lifecycle, capabilitiesIntro, capabilities, flagshipEngagements, platforms, finalCta } = home;

  const engagementPreview = Array.from(
    new Map(projects.map((p) => [p.group, p])).values()
  ).slice(0, 6);

  return (
    <div>
      {/* Hero — dark band, blueprint grid */}
      <section className="blueprint-grid relative overflow-hidden bg-page px-6 pb-16 pt-20 md:pb-24 md:pt-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-[1.15fr_1fr] md:px-4 md:gap-10 lg:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-page-border">
                  <Image
                    src={site.avatarUrl}
                    alt={site.name}
                    width={112}
                    height={112}
                    unoptimized
                    priority
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
                <p className="font-heading text-[16px] font-semibold text-page-foreground">
                  {site.name}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-6 font-mono text-[12.5px] leading-relaxed tracking-tight text-accent">
                {site.role}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-3 font-heading text-[32px] font-medium leading-[1.15] tracking-tight text-page-foreground md:text-[48px]">
                {site.heroLines.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < site.heroLines.length - 1 && <br />}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-page-foreground-muted md:text-[16.5px]">
                {site.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <ContactRow site={site} className="mt-8 !justify-start" />
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/capabilities"
                  className="inline-flex items-center gap-1.5 rounded-full bg-page-foreground px-6 py-3 text-[13.5px] font-semibold text-page transition-opacity hover:opacity-85"
                >
                  See how I work <ArrowUpRight size={14} />
                </Link>
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-page-border px-6 py-3 text-[13.5px] font-semibold text-page-foreground transition-colors hover:bg-page-tag-bg"
                >
                  <Download size={14} /> Resume
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="rounded-xl border border-page-border p-5">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-page-foreground-muted">
                Where I operate
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2.5">
                {capabilities.map((c, i) => (
                  <div
                    key={c.title}
                    className="flex items-center justify-between rounded-lg bg-page-tag-bg px-4 py-3"
                  >
                    <div>
                      <p className="font-heading text-[13.5px] font-semibold text-page-foreground">
                        {c.title}
                      </p>
                      <p className="mt-0.5 font-mono text-[10.5px] text-page-foreground-muted">
                        {c.roleTag}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PlatformsMarquee platforms={platforms} />

      {/* Pillars — light band */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-surface-foreground md:text-[36px]">
              Why teams bring me in.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <div className="h-full rounded-xl border border-surface-border p-7">
                  <h3 className="font-heading text-[18px] font-semibold text-surface-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-surface-foreground-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle — dark band */}
      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-accent">
              How I Operate
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[36px]">
              Across the full ERP lifecycle — not just one stage of it.
            </h2>
          </Reveal>
          <div className="mt-10">
            <LifecycleStrip stages={lifecycle} tone="page" />
          </div>
        </div>
      </section>

      {/* Capabilities — light band */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-surface-foreground md:text-[36px]">
              {capabilitiesIntro}
            </h2>
          </Reveal>

          <div className="mt-12">
            <CapabilityMatrix groups={capabilities} tone="surface" />
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/capabilities"
              className="mt-8 inline-flex items-center gap-1 text-[14px] font-semibold text-surface-foreground underline decoration-surface-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              Full capability breakdown <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Flagship Engagements — dark band */}
      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-accent">
              Flagship Engagements
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[36px]">
              A few engagements that show the full range.
            </h2>
          </Reveal>

          <div className="mt-10">
            {flagshipEngagements.map((e, i) => (
              <FlagshipCase
                key={e.title}
                engagement={e}
                index={i}
                total={flagshipEngagements.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engagements teaser — light band */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-surface-foreground md:text-[36px]">
              Selected engagements across every category — not just one.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engagementPreview.map((project, i) => (
              <Reveal key={project.id} delay={Math.min(0.03 * i, 0.2)}>
                <div className="h-full rounded-xl border border-surface-border p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {project.group}
                  </p>
                  <h3 className="mt-1.5 font-heading text-[15.5px] font-semibold leading-snug text-surface-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-surface-foreground-muted">
                    {project.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link
              href="/engagements"
              className="mt-8 inline-flex items-center gap-1 text-[14px] font-semibold text-surface-foreground underline decoration-surface-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              View all {projects.length} engagements <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* About teaser + Final CTA — dark band */}
      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-accent">
              Experience
            </p>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr]">
            <Reveal delay={0.05}>
              <div>
                {about.bio.map((p) => (
                  <p
                    key={p}
                    className="mt-4 text-[15.5px] leading-relaxed text-page-foreground-muted first:mt-0"
                  >
                    {p}
                  </p>
                ))}
                <p className="mt-4 text-[14.5px] text-page-foreground-muted/70">
                  {about.availability}
                </p>
                <Link
                  href="/experience"
                  className="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-page-foreground underline decoration-page-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  Full experience & background <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
                {about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-page-tag-bg p-5 text-center md:text-left"
                  >
                    <p className="font-heading text-[28px] font-semibold text-page-foreground md:text-[34px]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-snug text-page-foreground-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-20 border-t border-page-border pt-16 text-center">
            <Reveal>
              <h2 className="mx-auto max-w-xl font-heading text-[28px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[40px]">
                {finalCta.title}
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mx-auto mt-4 max-w-md text-[15.5px] leading-relaxed text-page-foreground-muted">
                {finalCta.body}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ContactRow site={site} className="mt-8" />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
