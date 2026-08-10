"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CapabilityMatrix from "@/components/CapabilityMatrix";
import LifecycleStrip from "@/components/LifecycleStrip";
import { useLiveData } from "@/hooks/useLiveData";
import {
  defaultHomeContent,
  fetchHomeContent,
  defaultSkillGroups,
  fetchSkillGroups,
} from "@/lib/content-store";

export default function CapabilitiesPageContent() {
  const { capabilities, capabilitiesIntro, lifecycle } = useLiveData(
    fetchHomeContent,
    defaultHomeContent
  );
  const skillGroups = useLiveData(fetchSkillGroups, defaultSkillGroups);

  return (
    <div>
      <section className="bg-page px-6 pb-16 pt-20 text-center md:pt-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[15px] font-semibold tracking-tight text-accent">
              Capabilities
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-heading text-[32px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[46px]">
              {capabilitiesIntro}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <CapabilityMatrix groups={capabilities} tone="surface" />
        </div>
      </section>

      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-accent">
              How It Fits Together
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 max-w-2xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[36px]">
              Every capability maps to a stage of the lifecycle.
            </h2>
          </Reveal>
          <div className="mt-10">
            <LifecycleStrip stages={lifecycle} tone="page" />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="font-heading text-[24px] font-semibold tracking-tight text-surface-foreground">
              Tools & Platforms
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.id} delay={0.04 * i}>
                <div>
                  <h3 className="font-mono text-[12px] font-semibold uppercase tracking-wider text-surface-foreground-muted">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-surface-tag-bg px-3 py-1.5 font-mono text-[12px] font-medium text-surface-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10">
          <Reveal>
            <h2 className="mx-auto max-w-xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[36px]">
              See these capabilities applied to real engagements.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/engagements"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-page-foreground px-7 py-3.5 text-[14px] font-semibold text-page transition-opacity hover:opacity-85"
            >
              View Engagements <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
