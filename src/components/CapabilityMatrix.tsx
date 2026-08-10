import Reveal from "@/components/Reveal";
import { CapabilityGroup } from "@/lib/content-store";

export default function CapabilityMatrix({
  groups,
  tone = "surface",
  compact = false,
}: {
  groups: CapabilityGroup[];
  tone?: "page" | "surface";
  compact?: boolean;
}) {
  const border = tone === "page" ? "border-page-border" : "border-surface-border";
  const foreground = tone === "page" ? "text-page-foreground" : "text-surface-foreground";
  const muted =
    tone === "page" ? "text-page-foreground-muted" : "text-surface-foreground-muted";
  const tagBg = tone === "page" ? "bg-page-tag-bg" : "bg-surface-tag-bg";
  const tagFg = tone === "page" ? "text-page-tag-foreground" : "text-surface-tag-foreground";

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {groups.map((g, i) => (
        <Reveal key={g.title} delay={Math.min(0.04 * i, 0.24)}>
          <div className={`h-full rounded-xl border ${border} p-6`}>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">
              {g.roleTag}
            </p>
            <h3 className={`mt-2 font-heading text-[18px] font-semibold ${foreground}`}>
              {g.title}
            </h3>
            {!compact && (
              <p className={`mt-2.5 text-[14px] leading-relaxed ${muted}`}>{g.body}</p>
            )}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.bullets.map((b) => (
                <span
                  key={b}
                  className={`rounded-md ${tagBg} px-2.5 py-1 font-mono text-[11px] ${tagFg}`}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
