import type { Metadata } from "next";
import { Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import { education, experience, site, skillGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: `Resume — ${site.name}`,
  description: `Experience, education, and technical skills for ${site.name}, ${site.role}.`,
};

export default function ResumePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-20 md:px-10 md:pt-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-[15px] font-semibold tracking-tight text-accent">
                Resume
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 max-w-xl font-heading text-[36px] font-semibold leading-tight tracking-tight text-heading md:text-[52px]">
                7+ years building enterprise ERP integrations.
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href={site.resumeFile}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-heading px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-accent"
            >
              <Download size={15} /> Download PDF
            </a>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <Reveal>
          <h2 className="font-heading text-[24px] font-semibold tracking-tight text-heading">
            Experience
          </h2>
        </Reveal>

        <div className="mt-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.role}`} delay={Math.min(i * 0.03, 0.2)}>
              <div className="grid grid-cols-1 gap-3 border-b border-border py-9 first:pt-0 last:border-b-0 md:grid-cols-[240px_1fr]">
                <div>
                  <p className="font-heading text-[17px] font-semibold text-heading">
                    {job.company}
                  </p>
                  <p className="mt-1 text-[13.5px] font-medium text-text-tertiary">
                    {job.period}
                  </p>
                  <p className="text-[13.5px] text-text-quaternary">
                    {job.location}
                  </p>
                </div>
                <div>
                  <p className="text-[15.5px] font-semibold text-heading">
                    {job.role}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-[14.5px] leading-relaxed text-text-secondary"
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
      </section>

      {/* Skills */}
      <section className="border-t border-border bg-background-soft">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <Reveal>
            <h2 className="font-heading text-[24px] font-semibold tracking-tight text-heading">
              How I Work
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={0.04 * i}>
                <div>
                  <h3 className="text-[13px] font-semibold uppercase tracking-wider text-text-quaternary">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border-strong bg-background px-3.5 py-1.5 text-[13px] font-medium text-heading"
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

      {/* Education */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <Reveal>
          <h2 className="font-heading text-[24px] font-semibold tracking-tight text-heading">
            Education
          </h2>
        </Reveal>
        <div className="mt-8">
          {education.map((ed, i) => (
            <Reveal key={ed.school} delay={0.05 * i}>
              <div className="flex flex-col gap-1 border-b border-border py-6 first:pt-0 last:border-b-0 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[15.5px] font-semibold text-heading">
                    {ed.school}
                  </p>
                  <p className="mt-1 text-[14px] text-text-secondary">
                    {ed.degree}
                  </p>
                </div>
                <p className="text-[13.5px] font-medium text-text-tertiary">
                  {ed.period}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
