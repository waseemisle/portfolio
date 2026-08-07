import { ProjectDoc } from "@/lib/content-store";

export default function ProjectCard({ project }: { project: ProjectDoc }) {
  return (
    <div className="group border-b border-surface-border py-10 first:pt-0 last:border-b-0">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="md:max-w-xl">
          <p className="text-[13px] font-semibold uppercase tracking-wider text-accent">
            {project.category}
          </p>
          <h3 className="mt-2 font-heading text-[22px] font-semibold leading-tight text-surface-foreground md:text-[26px]">
            {project.title}
          </h3>
          <p className="mt-4 text-[15.5px] leading-relaxed text-surface-foreground-muted">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface-tag-bg px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-surface-tag-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
