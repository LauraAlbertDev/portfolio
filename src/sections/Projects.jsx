import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton.jsx";
import { useTranslation } from "../i18n/LanguageContext";
import { projectMeta } from "@/components/project/technologies.constants";
import { ProjectCard } from "@/components/project/ProjectCard";

export const Projects = () => {
  const { t } = useTranslation();
  const projectItems = t("projects.items");

  const projects = projectMeta.map((meta, idx) => ({
    ...meta,
    title: projectItems[idx]?.title ?? "",
  }));

  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
            {t("projects.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground min-h-28 md:min-h-32">
            {t("projects.title")}
            <br />
            <span className="font-serif italic font-normal text-white">
              {t("projects.titleItalic")}
            </span>
          </h2>
        
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} viewCode={t("projects.viewCode")}/>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in animate-delay-500">
          <a
            href="https://github.com/LauraAlbertDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              {t("projects.viewMore")}
              <ArrowUpRight className="w-5 h-5 inline ml-1" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};