"use client";

import { Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLiveData } from "@/hooks/useLiveData";
import {
  defaultSiteSettings,
  fetchSiteSettings,
  defaultAboutContent,
  fetchAboutContent,
  defaultExperience,
  fetchExperience,
  defaultEducation,
  fetchEducation,
  defaultSkillGroups,
  fetchSkillGroups,
} from "@/lib/content-store";

export default function ExperiencePageContent() {
  const site = useLiveData(fetchSiteSettings, defaultSiteSettings);
  const about = useLiveData(fetchAboutContent, defaultAboutContent);
  const experience = useLiveData(fetchExperience, defaultExperience);
  const education = useLiveData(fetchEducation, defaultEducation);
  const skillGroups = useLiveData(fetchSkillGroups, defaultSkillGroups);

  return (
    <div>
      {/* Intro — dark band */}
      <section className="bg-page px-6 pb-16 pt-20 text-center md:pt-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[15px] font-semibold tracking-tight text-accent">
              Experience
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-heading text-[32px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[44px]">
              {site.name}
            </h1>
          </Reveal>

          {about.bio.map((p, i) => (
            <Reveal key={p} delay={0.1 + i * 0.05}>
              <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-page-foreground-muted">
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-[14px] text-page-foreground-muted/70">
              {about.availability}
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-page-border px-6 py-3.5 text-[14px] font-semibold text-page-foreground transition-colors hover:bg-page-tag-bg"
            >
              <Download size={15} /> Download Resume
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.32}>
          <div className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-page-tag-bg p-5 text-center"
              >
                <p className="font-heading text-[28px] font-semibold text-page-foreground md:text-[34px]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[12px] leading-snug text-page-foreground-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Experience — light band */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="font-heading text-[24px] font-semibold tracking-tight text-surface-foreground">
              Work History
            </h2>
          </Reveal>

          <div className="mt-10">
            {experience.map((job, i) => (
              <Reveal key={job.id} delay={Math.min(i * 0.03, 0.2)}>
                <div className="grid grid-cols-1 gap-3 border-b border-surface-border py-9 first:pt-0 last:border-b-0 md:grid-cols-[240px_1fr]">
                  <div>
                    <p className="font-heading text-[17px] font-semibold text-surface-foreground">
                      {job.company}
                    </p>
                    <p className="mt-1 text-[13.5px] font-medium text-surface-foreground-muted">
                      {job.period}
                    </p>
                    <p className="text-[13.5px] text-surface-foreground-muted/70">
                      {job.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-[15.5px] font-semibold text-surface-foreground">
                      {job.role}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {job.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-[14.5px] leading-relaxed text-surface-foreground-muted"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills — dark band */}
      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="font-heading text-[24px] font-semibold tracking-tight text-page-foreground">
              Skills & Tools
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.id} delay={0.04 * i}>
                <div>
                  <h3 className="font-mono text-[12px] font-semibold uppercase tracking-wider text-page-foreground-muted">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-page-tag-bg px-3 py-1.5 font-mono text-[12px] font-medium text-page-foreground"
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

      {/* Education — light band */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="font-heading text-[24px] font-semibold tracking-tight text-surface-foreground">
              Education
            </h2>
          </Reveal>
          <div className="mt-8">
            {education.map((ed, i) => (
              <Reveal key={ed.id} delay={0.05 * i}>
                <div className="flex flex-col gap-1 border-b border-surface-border py-6 first:pt-0 last:border-b-0 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-[15.5px] font-semibold text-surface-foreground">
                      {ed.school}
                    </p>
                    <p className="mt-1 text-[14px] text-surface-foreground-muted">
                      {ed.degree}
                    </p>
                  </div>
                  <p className="text-[13.5px] font-medium text-surface-foreground-muted">
                    {ed.period}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
