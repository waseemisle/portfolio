import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { expertise, expertiseIntro, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Expertise — ${site.name}`,
  description:
    "Industry expertise across eCommerce, manufacturing, financial services, logistics, CRM, and marketplace integrations with NetSuite.",
};

export default function ExpertisePage() {
  return (
    <div>
      <section className="bg-page px-6 pb-16 pt-20 text-center md:pt-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[15px] font-semibold tracking-tight text-accent">
              Expertise
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-heading text-[32px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[46px]">
              {expertiseIntro}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {expertise.map((e, i) => (
              <Reveal key={e.title} delay={Math.min(i * 0.05, 0.25)}>
                <div className="h-full rounded-2xl bg-surface-card p-7">
                  <h3 className="font-heading text-[19px] font-semibold text-surface-foreground">
                    {e.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-surface-foreground-muted">
                    {e.body}
                  </p>
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
              See these integrations in detail.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/work"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-page-foreground px-7 py-3.5 text-[14px] font-semibold text-page transition-opacity hover:opacity-85"
            >
              View My Work <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
