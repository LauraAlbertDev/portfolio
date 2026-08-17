import { useTranslation } from "@/i18n/LanguageContext";
import { TimelineItem } from "@/components/experience/TimelineItem";
import { EXPERIENCE_TECHNOLOGIES } from "@/components/experience/experience.constants";

export const Experience = () => {
    const { t } = useTranslation();
    
    const rawExperiences = t("experience.items") || [];
    
    const experiences = rawExperiences.map((exp) => ({
        ...exp,
        technologies: EXPERIENCE_TECHNOLOGIES[exp.id] || [], 
        current: false,
    }));

    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

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
                    <div className="timeline-glow absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    <div className="space-y-12">
                        {experiences.map((experience, idx) => (
                            <TimelineItem 
                                key={idx} 
                                experience={experience} 
                                index={idx} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};