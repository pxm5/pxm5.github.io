import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div className="group border-t border-border py-8 md:py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
      <span className="font-heading text-muted-foreground text-sm tracking-widest shrink-0 w-12">
        {String(index + 1).padStart(2, "0")}
      </span>

      {project.image && (
        <div className="shrink-0 w-full md:w-48 lg:w-56 overflow-hidden rounded-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-32 md:h-36 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex-1 space-y-3">
        <h3 className="text-xl md:text-2xl font-heading font-bold tracking-tight group-hover:tracking-wide transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-xl">
          {project.description}
        </p>
        {project.tags && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-heading tracking-wider bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {project.link && (
        <div className="cred-socket self-start shrink-0 mt-1">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="cred-btn cred-btn-sm">
            View <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
