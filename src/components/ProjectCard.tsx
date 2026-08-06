import { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border-b border-border py-10 first:pt-0 last:border-b-0">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="md:max-w-xl">
          <p className="text-[13px] font-semibold uppercase tracking-wider text-accent">
            {project.role}
          </p>
          <h3 className="mt-2 font-heading text-[22px] font-semibold leading-tight text-heading md:text-[26px]">
            {project.system}
          </h3>
          <p className="mt-1 text-[14px] font-medium text-text-tertiary">
            {project.industry}
            {project.region ? ` · ${project.region}` : ""}
          </p>
          <p className="mt-4 text-[15.5px] leading-relaxed text-text-secondary">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border-strong px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
