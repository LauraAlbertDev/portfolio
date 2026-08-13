import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import perfilLaura from "../assets/Avatar-portfolio.jpg";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { scrollToSection } from "../utils/scrollReveal";
import { useTranslation } from "../i18n/LanguageContext";

const skills = [
    "Angular", "Git", "PHP", "Python", "Javascript",
    "Java", "HTML", "CSS", "MongoDB", "SQL", "Typescript", "Ionic"
];

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-40"/>
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={`dot-${i}`}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                {t("hero.badge")}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100 min-h-[9.5rem] md:min-h-[11.5rem] lg:min-h-[13.5rem]">
                                {t("hero.titleLine1")}{" "}
                                <span className="text-primary glow-text">{t("hero.titleHighlight")}</span>
                                <br />
                                {t("hero.titleLine2")}
                                <br/>
                                <span className="font-serif italic font-normal text-white">
                                    {t("hero.titleItalic")}
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200 min-h-[4.5rem]">
                                {t("hero.description")}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
                            <Button size="lg">
                                {t("hero.contactBtn")} <ArrowRight className="w-5 h-5"/>
                            </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5" />
                                {t("hero.cvBtn")}
                            </AnimatedBorderButton>
                        </div>

                        <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
                            <span className="text-sm text-muted-foreground">{t("hero.follow")}</span>
                            {[
                                {
                                    name: "Github",
                                    href: "https://github.com/LauraAlbertDev/",
                                    svg: (
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                            <path d="M9 18c-4.51 2-5-2-7-2" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "Linkedin",
                                    href: "https://www.linkedin.com/in/laura-albert-borrell/",
                                    svg: (
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                            <rect width="4" height="12" x="2" y="9" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    )
                                }
                            ].map((social, idx) => (
                                <a
                                    key={`social-${idx}`}
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {social.svg}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="relative animate-fade-in animate-delay-500">
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src={perfilLaura} alt="Laura Albert" className="w-full aspect-[4/5] object-cover rounded-2xl"/>

                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium">
                                            {t("hero.available")}
                                        </span>
                                    </div>
                                </div>

                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animate-delay-500">
                                    <div className="text-2xl font-bold text-primary">2+</div>
                                    <div className="text-xs text-muted-foreground">{t("hero.yearsExp")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 animate-fade-in animate-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">{t("hero.skillsTitle")}</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={`marquee-skill-${idx}`} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-700">
                <a
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("#about");
                    }}
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                    <span className="text-xs uppercase tracking-wider">{t("hero.scroll")}</span>
                    <ChevronDown className="w-6 h-6 animate-bounce"/>
                </a>
            </div>
        </section>
    );
};
