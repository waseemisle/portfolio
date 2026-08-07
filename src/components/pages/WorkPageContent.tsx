"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { useLiveData } from "@/hooks/useLiveData";
import { defaultProjects, fetchProjects } from "@/lib/content-store";

export default function WorkPageContent() {
  const projects = useLiveData(fetchProjects, defaultProjects);

  return (
    <div>
      <section className="bg-page px-6 pb-16 pt-20 text-center md:pt-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[15px] font-semibold tracking-tight text-accent">
              Work
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-heading text-[32px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[46px]">
              Integrations that make lives easier and businesses stronger.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-page-foreground-muted">
              {projects.length} NetSuite-centered integration engagements
              spanning eCommerce, wholesale, logistics, automotive, and
              financial systems — each built around real-time, reliable data
              sync.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={Math.min(i * 0.02, 0.2)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10">
          <Reveal>
            <h2 className="mx-auto max-w-xl font-heading text-[26px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[36px]">
              Have a system that needs to talk to NetSuite?
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
