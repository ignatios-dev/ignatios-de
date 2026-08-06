import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className={`w-full ${project.large ? "h-[200px]" : "h-[160px]"} overflow-hidden`}>
        <img
          src={project.image}
          alt={project.imageAlt}
          className={`w-full h-full object-cover ${project.imagePosition === "center" ? "object-center" : "object-top"}`}
        />
      </div>
      <div className="font-mono text-[12px] text-accent uppercase tracking-[0.05em]">
        {project.category}
      </div>
      <h3 className="text-[22px] font-bold m-0">{project.title}</h3>
      <p className="text-[15px] text-secondary leading-[1.6] m-0">{project.description}</p>
      {project.tags && (
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] bg-[#eef2ff] text-[#4f46e5] px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <span className="font-semibold text-[14px] text-foreground">{project.cta}</span>
    </>
  );

  const className = `border border-border p-9 flex flex-col gap-4 no-underline text-foreground hover:text-foreground ${project.large ? "md:col-span-2" : ""}`;

  if (project.external) {
    return (
      <a href={project.href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={project.href} className={className}>
      {content}
    </Link>
  );
}
