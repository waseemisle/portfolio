import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { FlagshipEngagement } from "@/lib/content-store";

export default function FlagshipCase({
  engagement,
  index,
  total,
}: {
  engagement: FlagshipEngagement;
  index: number;
  total: number;
}) {
  return (
    <div className={index > 0 ? "mt-16 border-t border-page-border pt-16" : ""}>
      <Reveal>
        <p className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-accent">
          <span className="font-mono text-[11px] text-page-foreground-muted">
            {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
          {engagement.eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h3 className="mt-3 max-w-2xl font-heading text-[24px] font-semibold leading-tight tracking-tight text-page-foreground md:text-[32px]">
          {engagement.title}
        </h3>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div>
            <p className="font-heading text-[16px] font-semibold text-page-foreground">
              {engagement.role}
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-page-foreground-muted">
              {engagement.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {engagement.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-page-tag-bg px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide text-page-tag-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="rounded-xl border border-page-border p-6">
            <p className="font-heading text-[15px] font-semibold text-page-foreground">
              {engagement.architectureTitle}
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-page-foreground-muted">
              {engagement.architectureDescription}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[12px] font-mono font-semibold text-page-foreground">
              {engagement.flow.map((step, i) => (
                <Fragment key={step}>
                  {i > 0 && <ArrowRight size={13} className="text-page-foreground-muted" />}
                  <span
                    className={`rounded-md px-3.5 py-2 ${
                      i === engagement.flow.length - 1
                        ? "bg-accent text-white"
                        : "bg-page-tag-bg"
                    }`}
                  >
                    {step}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
