import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className={`w-full ${project.large ? "h-[200px]" : "h-[160px]"} overflow-hidden nb-border rounded-xl`}>
        <img
          src={project.image}
          alt={project.imageAlt}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${project.imagePosition === "center" ? "object-center" : "object-top"}`}
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
              className="nb-hop font-mono text-[11px] bg-light-blue text-accent border-2 border-foreground rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <span className="self-start bg-foreground text-background rounded-lg font-bold text-[14px] px-3 py-1.5 mt-1 transition-colors duration-200 group-hover:bg-accent">
        {project.cta}
      </span>
    </>
  );

  const className = `group bg-background nb-border nb-shadow nb-press rounded-2xl p-6 md:p-8 flex flex-col gap-4 no-underline text-foreground hover:text-foreground ${project.large ? "md:col-span-2" : ""}`;

  if (project.external) {
    return (
      <a href={project.href} className={className} data-reveal>
        {content}
      </a>
    );
  }

  return (
    <Link href={project.href} className={className} data-reveal>
      {content}
    </Link>
  );
}
