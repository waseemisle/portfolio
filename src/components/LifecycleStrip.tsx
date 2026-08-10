import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { LifecycleStage } from "@/lib/content-store";

export default function LifecycleStrip({
  stages,
  tone = "page",
}: {
  stages: LifecycleStage[];
  tone?: "page" | "surface";
}) {
  const border = tone === "page" ? "border-page-border" : "border-surface-border";
  const foreground = tone === "page" ? "text-page-foreground" : "text-surface-foreground";
  const muted =
    tone === "page" ? "text-page-foreground-muted" : "text-surface-foreground-muted";

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
      {stages.map((s, i) => (
        <Reveal key={s.stage} delay={0.04 * i}>
          <div className={`relative h-full rounded-xl border ${border} p-4`}>
            <div className={`h-0.5 w-8 rounded-full ${i === 0 ? "bg-accent" : "bg-accent/40"}`} />
            <p className={`mt-3 font-mono text-[11px] tracking-wider text-accent`}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className={`mt-1.5 font-heading text-[15.5px] font-semibold ${foreground}`}>
              {s.stage}
            </p>
            <p className={`mt-1 text-[11.5px] font-semibold uppercase tracking-wide text-accent/90`}>
              {s.roleLabel}
            </p>
            <p className={`mt-2 text-[12.5px] leading-relaxed ${muted}`}>{s.description}</p>
            {i < stages.length - 1 && (
              <ArrowRight
                size={13}
                className={`absolute -right-2.5 top-4 hidden ${muted} lg:block`}
              />
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
