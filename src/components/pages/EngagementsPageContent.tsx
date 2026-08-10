"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import FlagshipCase from "@/components/FlagshipCase";
import EngagementGrid from "@/components/EngagementGrid";
import { useLiveData } from "@/hooks/useLiveData";
import {
  defaultHomeContent,
  fetchHomeContent,
  defaultProjects,
  fetchProjects,
} from "@/lib/content-store";

export default function EngagementsPageContent() {
  const { flagshipEngagements } = useLiveData(fetchHomeContent, defaultHomeContent);
  const projects = useLiveData(fetchProjects, defaultProjects);

  return (
    <div>
      <section className="bg-page px-6 pb-16 pt-20 text-center md:pt-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[15px] font-semibold tracking-tight text-accent">
              Engagements
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-heading text-[32px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[46px]">
              Advisory, implementation, development, and administration — {projects.length}+ engagements deep.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-page-foreground-muted">
              A handful of flagship case studies below, followed by every
              engagement grouped by category — spanning eCommerce, wholesale,
              logistics, marketplaces, CRM, and financial systems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
          {flagshipEngagements.map((e, i) => (
            <FlagshipCase
              key={e.title}
              engagement={e}
              index={i}
              total={flagshipEngagements.length}
            />
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-[24px] font-semibold tracking-tight text-surface-foreground">
              Every engagement, by category.
            </h2>
          </Reveal>
          <div className="mt-10">
            <EngagementGrid projects={projects} />
          </div>
        </div>
      </section>

      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10">
          <Reveal>
            <h2 className="mx-auto max-w-xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[36px]">
              Have a system that needs an owner?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-page-foreground px-7 py-3.5 text-[14px] font-semibold text-page transition-opacity hover:opacity-85"
            >
              Let&rsquo;s Connect <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
