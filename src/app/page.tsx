import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { basePath } from "@/lib/base-path";
import {
  currentRoleTags,
  expertise,
  experience,
  pillars,
  projects,
  site,
} from "@/lib/content";

export default function Home() {
  const current = experience[0];
  const previous = experience[1];
  const featured = projects.slice(0, 6);

  return (
    <div>
      {/* Hero — dark band */}
      <section className="radial-glow relative overflow-hidden bg-page px-6 pb-24 pt-20 text-center md:pb-32 md:pt-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="mx-auto h-[150px] w-[150px] overflow-hidden rounded-full ring-1 ring-page-border md:h-[170px] md:w-[170px]">
              <Image
                src={`${basePath}/waseem.jpg`}
                alt={site.name}
                width={340}
                height={340}
                priority
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-9 font-heading text-[34px] font-medium leading-[1.15] tracking-tight text-page-foreground md:text-[52px]">
              I build scalable
              <br />
              ERP integrations
              <br />
              that drive growth.
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-page-foreground-muted md:text-[18px]">
              7+ years delivering enterprise NetSuite implementations,
              SuiteScript development, and large-scale system integrations
              across eCommerce, retail, manufacturing, and logistics.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex justify-center">
              <Link
                href="/contact"
                className="rounded-full border border-page-border px-7 py-3.5 text-[14px] font-semibold text-page-foreground transition-colors hover:bg-page-tag-bg"
              >
                Let&rsquo;s Connect
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-14 flex justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-page-border text-page-foreground-muted">
                <ChevronDown size={18} />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars — light band */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-surface-foreground md:text-[36px]">
              I&rsquo;ll help you unify every system your business runs on,
              and the confidence to scale on it.
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

      {/* Contributed for — dark band */}
      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <p className="max-w-2xl text-[19px] leading-relaxed text-page-foreground-muted md:text-[24px]">
              I&rsquo;ve delivered enterprise integrations as a{" "}
              <span className="font-medium text-page-foreground">
                NetSuite technical consultant
              </span>{" "}
              and{" "}
              <span className="font-medium text-page-foreground">
                SuiteScript developer
              </span>{" "}
              for:
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl bg-page-tag-bg p-7">
                <p className="font-heading text-[18px] font-semibold text-page-foreground">
                  {current.role}
                </p>
                <p className="mt-1 text-[14px] text-page-foreground-muted">
                  {current.company} · {current.period}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl bg-page-tag-bg p-7">
                <p className="font-heading text-[18px] font-semibold text-page-foreground">
                  {previous.role}
                </p>
                <p className="mt-1 text-[14px] text-page-foreground-muted">
                  {previous.company} · {previous.period}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/resume"
                className="rounded-full border border-page-border px-6 py-3 text-[13.5px] font-semibold text-page-foreground transition-colors hover:bg-page-tag-bg"
              >
                More Experience
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expertise — light band */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-surface-foreground md:text-[36px]">
              I simplify complex systems into intuitive data pipelines.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
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
        </div>
      </section>

      {/* Current role deep dive — dark band */}
      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[36px]">
              I currently work at{" "}
              <span className="text-accent">{current.company}</span>, driving
              improvements to BigCommerce, QuickBooks &amp; SOS Inventory
              integrations.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.3fr]">
            <Reveal delay={0.05}>
              <div>
                <p className="font-heading text-[19px] font-semibold text-page-foreground">
                  {current.role}
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-page-foreground-muted">
                  {current.bullets[1]}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap content-start gap-2">
                {currentRoleTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-page-tag-bg px-3.5 py-1.5 text-[11.5px] font-semibold tracking-wide text-page-tag-foreground"
                  >
                    {tag}
                  </span>
                ))}
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
              Selected integrations that make operations run themselves.
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

      {/* CTA — dark band */}
      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:px-10">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-heading text-[28px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[40px]">
              What I Bring
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mx-auto mt-4 max-w-md text-[15.5px] leading-relaxed text-page-foreground-muted">
              See how my background and approach align with your needs.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/resume"
                className="rounded-full bg-page-foreground px-7 py-3.5 text-[14px] font-semibold text-page transition-opacity hover:opacity-85"
              >
                How I Work
              </Link>
              <a
                href={site.resumeFile}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-page-border px-7 py-3.5 text-[14px] font-semibold text-page-foreground transition-colors hover:bg-page-tag-bg"
              >
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
