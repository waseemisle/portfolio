import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Work — ${site.name}`,
  description:
    "Enterprise NetSuite integrations across eCommerce, wholesale, logistics, and finance systems.",
};

export default function WorkPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-20 md:px-10 md:pt-28">
        <Reveal>
          <p className="text-[15px] font-semibold tracking-tight text-accent">
            Work
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-2xl font-heading text-[36px] font-semibold leading-tight tracking-tight text-heading md:text-[52px]">
            Integrations that make lives easier and businesses stronger.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
            {projects.length} NetSuite-centered integration engagements
            spanning eCommerce, wholesale, logistics, automotive, and
            financial systems — each built around real-time, reliable data
            sync.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <div>
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i * 0.02, 0.2)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10">
          <Reveal>
            <h2 className="mx-auto max-w-xl font-heading text-[28px] font-semibold leading-tight tracking-tight text-heading md:text-[36px]">
              Have a system that needs to talk to NetSuite?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-heading px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-accent"
            >
              Let&rsquo;s Connect <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
