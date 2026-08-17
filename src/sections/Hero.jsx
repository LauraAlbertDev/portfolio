import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/Button"; 
import { scrollToSection } from "@/utils/scrollReveal";
import { useTranslation } from "@/i18n/LanguageContext";
import { BackgroundDecorations } from "@/components/hero/BackgroundDecorations";
import { SocialLinks } from "@/components/hero/SocialLinks";
import { SkillsMarquee } from "@/components/hero/SkillsMarquee";
import { ProfileCard } from "@/components/hero/ProfileCard";

export const Hero = () => {
    const { t } = useTranslation();

    const handleScrollToAbout = (e) => {
        e.preventDefault();
        scrollToSection("#about");
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            <BackgroundDecorations />

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                {t("hero.badge")}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100 min-h-30 md:min-h-46 lg:min-h-54">
                                {t("hero.titleLine1")}{" "}
                                <span className="text-primary glow-text">{t("hero.titleHighlight")}</span>
                                <br />
                                {t("hero.titleLine2")}
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    {t("hero.titleItalic")}
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200 min-h-18">
                                {t("hero.description")}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
                            <Button size="lg">
                                {t("hero.contactBtn")} <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>

                        <SocialLinks followText={t("hero.follow")} />
                    </div>

                    <ProfileCard 
                        availableText={t("hero.available")} 
                        yearsExpText={t("hero.yearsExp")} 
                    />
                </div>

                <SkillsMarquee skillsTitle={t("hero.skillsTitle")} />
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-700">
                <a
                    href="#about"
                    onClick={handleScrollToAbout}
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                    <span className="text-xs uppercase tracking-wider">{t("hero.scroll")}</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
};