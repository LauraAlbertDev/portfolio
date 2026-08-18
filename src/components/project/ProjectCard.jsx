import { ArrowUpRight } from "lucide-react";

export const ProjectCard = ({ project, idx, viewCode }) => {
  return (
    <div
      className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
      style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-xs">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:bg-primary hover:text-primary-foreground font-medium text-sm transition-all transform translate-y-2 group-hover:translate-y-0 duration-300"
          >
            <span>{viewCode}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="p-6 space-y-4 flex flex-col items-center text-center">
        <div className="flex items-start justify-center w-full">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
      
        <div className="flex flex-wrap justify-center gap-2">
          {project.tags.map((tag, tagIdx) => {
            const Icon = tag.icon;
            return (
              <span
                key={tagIdx}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{tag.name}</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};