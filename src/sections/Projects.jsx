import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton.jsx";
import { useTranslation } from "../i18n/LanguageContext";

const projectMeta = [
    {
        image: "/gastro_manager.png",
        tags: ["Angular", "Python", "MariaDB"],
        link: "#",
        github: "https://github.com/LauraAlbertDev/restaurante-tfg",
    }
];

export const Projects = () => {
    const { t } = useTranslation();
    const projectItems = t("projects.items");

    const projects = projectMeta.map((meta, idx) => ({
        ...meta,
        title: projectItems[idx]?.title ?? "",
        description: projectItems[idx]?.description ?? "",
    }));

    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
                        {t("projects.badge")}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground min-h-[7rem] md:min-h-[8rem]">
                        {t("projects.title")}
                        <br />
                        <span className="font-serif italic font-normal text-white">
                            {t("projects.titleItalic")}
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animate-delay-200 min-h-[3.5rem] md:min-h-[3rem]">
                        {t("projects.description")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>

                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 space-y-4 flex flex-col items-center text-center">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed min-h-[4.5rem]">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center animate-fade-in animate-delay-500">
                    <a href="https://github.com/LauraAlbertDev" target="_blank" rel="noopener noreferrer" className="inline-block">
                        <AnimatedBorderButton>
                            {t("projects.viewMore")}
                            <ArrowUpRight className="w-5 h-5 inline ml-1"/>
                        </AnimatedBorderButton>
                    </a>
                </div>
            </div>
        </section>
    );
};
