import { useTranslation } from "@/i18n/LanguageContext";
import { AboutHighlights } from "@/components/about/AboutHighlights";

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
                        
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground min-h-22 md:min-h-26">
                            {t("about.title")}
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                {t("about.titleItalic")}
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200 text-base leading-relaxed min-h-30 md:min-h-32">
                            <p>{t("about.p1")}</p>
                            <p>{t("about.p2")}</p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300 min-h-26 flex items-center">
                            <p className="text-lg font-medium italic text-foreground/90">
                                &ldquo;{t("about.quote")}&rdquo;
                            </p>
                        </div>
                    </div>

                    <AboutHighlights highlights={highlights} />
                </div>
            </div>
        </section>
    );
};