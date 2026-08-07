import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import ContactRow from "@/components/ContactRow";
import PlatformsMarquee from "@/components/PlatformsMarquee";
import { basePath } from "@/lib/base-path";
import {
  about,
  expertise,
  expertiseIntro,
  featuredIntegration,
  finalCta,
  pillars,
  projects,
  site,
} from "@/lib/content";

export default function Home() {
  const featured = projects.slice(0, 6);

  return (
    <div>
      {/* Hero — dark band */}
      <section className="radial-glow relative overflow-hidden bg-page px-6 pb-16 pt-20 text-center md:pb-20 md:pt-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="mx-auto h-[130px] w-[130px] overflow-hidden rounded-full ring-1 ring-page-border md:h-[150px] md:w-[150px]">
              <Image
                src={`${basePath}/waseem.jpg`}
                alt={site.name}
                width={300}
                height={300}
                priority
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-7 text-[14px] font-semibold tracking-tight text-accent">
              {site.role}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-3 font-heading text-[34px] font-medium leading-[1.15] tracking-tight text-page-foreground md:text-[52px]">
              {site.heroLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < site.heroLines.length - 1 && <br />}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-[15.5px] leading-relaxed text-page-foreground-muted md:text-[17px]">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <ContactRow className="mt-8" />
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-page-border text-page-foreground-muted">
                <ChevronDown size={18} />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <PlatformsMarquee />

      {/* Pillars — light band */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-surface-foreground md:text-[36px]">
              I help global businesses eliminate operational friction through
              expert NetSuite integrations and intelligent automation.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <div className="h-full rounded-2xl bg-surface-card p-7">
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

      {/* Expertise — light band */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-surface-foreground md:text-[36px]">
              {expertiseIntro}
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
            {expertise.map((e, i) => (
              <Reveal key={e.title} delay={0.04 * i}>
                <div className="h-full rounded-2xl bg-surface-card p-6">
                  <h3 className="font-heading text-[17px] font-semibold text-surface-foreground">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-surface-foreground-muted">
                    {e.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/expertise"
              className="mt-8 inline-flex items-center gap-1 text-[14px] font-semibold text-surface-foreground underline decoration-surface-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              More on my expertise <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured Integration — dark band */}
      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-accent">
              {featuredIntegration.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[36px]">
              {featuredIntegration.title}
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            <Reveal delay={0.1}>
              <div>
                <p className="font-heading text-[18px] font-semibold text-page-foreground">
                  {featuredIntegration.role}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-page-foreground-muted">
                  {featuredIntegration.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredIntegration.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-page-tag-bg px-3.5 py-1.5 text-[11.5px] font-semibold tracking-wide text-page-tag-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-page-border p-7">
                <p className="font-heading text-[16px] font-semibold text-page-foreground">
                  {featuredIntegration.architectureTitle}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-page-foreground-muted">
                  {featuredIntegration.architectureDescription}
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[12.5px] font-semibold text-page-foreground">
                  <span className="rounded-full bg-page-tag-bg px-4 py-2">
                    Shopify
                  </span>
                  <ArrowRight size={14} className="text-page-foreground-muted" />
                  <span className="rounded-full bg-page-tag-bg px-4 py-2">
                    Magento
                  </span>
                  <ArrowRight size={14} className="text-page-foreground-muted" />
                  <span className="rounded-full bg-accent px-4 py-2 text-white">
                    NetSuite
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Work — light band */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-surface-foreground md:text-[36px]">
              Selected work that streamlines operations and drives business
              growth.
            </h2>
          </Reveal>

          <div className="mt-12">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={0.03 * i}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link
              href="/work"
              className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-surface-foreground underline decoration-surface-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              View all {projects.length} projects <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* About teaser + Final CTA — dark band */}
      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-accent">
              About Me
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
                  href="/about"
                  className="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-page-foreground underline decoration-page-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  More about me <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
                {about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-page-tag-bg p-5 text-center md:text-left"
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
              <ContactRow className="mt-8" />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
