import Reveal from "@/components/Reveal";
import { ProjectDoc } from "@/lib/content-store";

function groupProjects(projects: ProjectDoc[]) {
  const groups = new Map<string, ProjectDoc[]>();
  for (const p of projects) {
    const key = p.group || "Other Engagements";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(p);
  }
  return Array.from(groups.entries());
}

export default function EngagementGrid({
  projects,
  tone = "surface",
}: {
  projects: ProjectDoc[];
  tone?: "page" | "surface";
}) {
  const groups = groupProjects(projects);
  const border = tone === "page" ? "border-page-border" : "border-surface-border";
  const foreground = tone === "page" ? "text-page-foreground" : "text-surface-foreground";
  const muted =
    tone === "page" ? "text-page-foreground-muted" : "text-surface-foreground-muted";
  const tagBg = tone === "page" ? "bg-page-tag-bg" : "bg-surface-tag-bg";
  const tagFg = tone === "page" ? "text-page-tag-foreground" : "text-surface-tag-foreground";

  return (
    <div className="space-y-12">
      {groups.map(([group, items], gi) => (
        <div key={group}>
          <Reveal delay={0.02 * gi}>
            <p className={`font-mono text-[12px] font-semibold uppercase tracking-wider ${muted}`}>
              {group} <span className="opacity-60">· {items.length}</span>
            </p>
          </Reveal>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((project, i) => (
              <Reveal key={project.id} delay={Math.min(0.02 * i, 0.16)}>
                <div className={`h-full rounded-xl border ${border} p-5`}>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {project.category}
                  </p>
                  <h3 className={`mt-1.5 font-heading text-[15.5px] font-semibold leading-snug ${foreground}`}>
                    {project.title}
                  </h3>
                  <p className={`mt-2 text-[13px] leading-relaxed ${muted}`}>
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-md ${tagBg} px-2 py-0.5 font-mono text-[10.5px] ${tagFg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
