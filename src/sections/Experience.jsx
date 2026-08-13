import { useTranslation } from "../i18n/LanguageContext";

const experienceTech = [
    ["Angular", "SpringBoot", "Git", "Docker"],
    ["Python", "XML", "JavaScript", "PostgreSQL", "PHP", "HTML5", "CSS3"],
    ["Python", "XML", "JavaScript", "PostgreSQL", "WordPress", "PHP", "HTML5", "CSS3"],
];

export const Experience = () => {
    const { t } = useTranslation();
    const experiences = t("experience.items").map((exp, idx) => ({
        ...exp,
        technologies: experienceTech[idx],
        current: false,
    }));

    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full inline-block">
                        {t("experience.badge")}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground">
                        {t("experience.title")}{" "}
                        <span className="font-serif italic font-normal text-white">
                            {t("experience.titleItalic")}
                        </span>
                    </h2>
                </div>

                <div className="relative mt-20">
                    <div className="timeline-glow absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
                            >
                                <div className="absolute left-4 md:left-1/2 top-7 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    )}
                                </div>

                                <div
                                    className={`pl-12 md:pl-0 ${
                                        idx % 2 === 0
                                            ? "md:pr-16 md:text-right flex flex-col md:items-end"
                                            : "md:col-start-2 md:pl-16 flex flex-col md:items-start"
                                    }`}
                                >
                                    <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 max-w-xl">
                                        <span className="text-sm text-primary font-medium bg-primary/5 px-2.5 py-1 rounded-md">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-3 text-white">{exp.role}</h3>
                                        <p className="text-sm text-primary/80 font-medium">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4 leading-relaxed text-left">
                                            {exp.description}
                                        </p>

                                        <div
                                            className={`flex flex-wrap gap-2 mt-5 ${
                                                idx % 2 === 0 ? "md:justify-end" : "justify-start"
                                            }`}
                                        >
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span
                                                    key={techIdx}
                                                    className="px-3 py-1 bg-surface text-xs rounded-full border border-border/40 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
