import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

const highlightIcons = [Code2, Rocket, Users, Lightbulb];

export const About = () => {
    const { t } = useTranslation();
    const highlights = t("about.highlights");

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-primary text-sm font-medium tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
                                {t("about.badge")}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground min-h-[5.5rem] md:min-h-[6.5rem]">
                            {t("about.title")}
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                {t("about.titleItalic")}
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200 text-base leading-relaxed min-h-[7.5rem] md:min-h-[8rem]">
                            <p>{t("about.p1")}</p>
                            <p>{t("about.p2")}</p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300 min-h-[6.5rem] flex items-center">
                            <p className="text-lg font-medium italic text-foreground/90">
                                &ldquo;{t("about.quote")}&rdquo;
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => {
                            const Icon = highlightIcons[index];
                            return (
                                <div
                                    key={index}
                                    className="glass p-6 rounded-2xl animate-fade-in hover:border-primary/30 transition-all duration-300 group"
                                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2 min-h-[1.75rem]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed min-h-[4.5rem]">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
