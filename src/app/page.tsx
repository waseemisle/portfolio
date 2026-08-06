import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
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
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
        <Reveal>
          <p className="text-[15px] font-semibold tracking-tight text-accent">
            {site.role}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-3xl font-heading text-[42px] font-semibold leading-[1.1] tracking-tight text-heading md:text-[64px]">
            I&rsquo;m Waseem, engineering{" "}
            <span className="text-accent">integrations that scale.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary md:text-[19px]">
            I help operations leaders connect{" "}
            <span className="font-medium text-heading">NetSuite</span> with
            the platforms they run on —{" "}
            <span className="font-medium text-heading">Shopify</span>,{" "}
            <span className="font-medium text-heading">BigCommerce</span>,{" "}
            <span className="font-medium text-heading">Salesforce</span>, and
            more — turning fragmented data into confident, real-time
            decisions.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-heading px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-accent"
            >
              Let&rsquo;s Connect
            </Link>
            <Link
              href="/work"
              className="flex items-center gap-1 text-[14px] font-semibold text-heading underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              View my work <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Pillars */}
      <section className="border-y border-border bg-background-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[28px] font-semibold leading-tight tracking-tight text-heading md:text-[36px]">
              I&rsquo;ll help you unify every system your business runs on,
              and the confidence to scale on it.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <div>
                  <span className="text-[13px] font-semibold text-text-quaternary">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-[19px] font-semibold text-heading">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contributed for */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <Reveal>
          <p className="max-w-2xl text-[17px] leading-relaxed text-text-secondary md:text-[19px]">
            I&rsquo;ve delivered enterprise integrations as a{" "}
            <span className="font-medium text-heading">
              NetSuite technical consultant
            </span>{" "}
            and{" "}
            <span className="font-medium text-heading">
              SuiteScript developer
            </span>{" "}
            for:
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-border p-7">
              <p className="font-heading text-[18px] font-semibold text-heading">
                {current.role}
              </p>
              <p className="mt-1 text-[14px] text-text-tertiary">
                {current.company} · {current.period}
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-text-secondary">
                {current.bullets[0]}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border p-7">
              <p className="font-heading text-[18px] font-semibold text-heading">
                {previous.role}
              </p>
              <p className="mt-1 text-[14px] text-text-tertiary">
                {previous.company} · {previous.period}
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-text-secondary">
                {previous.bullets[0]}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <Link
            href="/resume"
            className="mt-8 inline-flex items-center gap-1 text-[14px] font-semibold text-heading underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            More Experience <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </section>

      {/* Current role deep highlight */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[28px] font-semibold leading-tight tracking-tight text-heading md:text-[36px]">
              I currently work at{" "}
              <span className="text-accent">{current.company}</span>, driving
              improvements to BigCommerce, QuickBooks &amp; SOS Inventory
              integrations.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.3fr]">
            <Reveal delay={0.05}>
              <div>
                <p className="font-heading text-[19px] font-semibold text-heading">
                  {current.role}
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-text-secondary">
                  {current.bullets[1]}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap content-start gap-2">
                {currentRoleTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border-strong px-3.5 py-1.5 text-[11.5px] font-semibold tracking-wide text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[28px] font-semibold leading-tight tracking-tight text-heading md:text-[36px]">
            I simplify complex systems into intuitive data pipelines.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
          {expertise.map((e, i) => (
            <Reveal key={e.title} delay={0.04 * i}>
              <div>
                <h3 className="font-heading text-[17px] font-semibold text-heading">
                  {e.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">
                  {e.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work */}
      <section className="border-t border-border bg-background-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[28px] font-semibold leading-tight tracking-tight text-heading md:text-[36px]">
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
              className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-heading underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              View all {projects.length} projects <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center md:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-heading text-[30px] font-semibold leading-tight tracking-tight text-heading md:text-[42px]">
            See how my background and approach align with your needs.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/resume"
              className="rounded-full border border-border-strong px-7 py-3.5 text-[14px] font-semibold text-heading transition-colors hover:border-accent hover:text-accent"
            >
              How I Work
            </Link>
            <a
              href={site.resumeFile}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-heading px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-accent"
            >
              Download Resume
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
