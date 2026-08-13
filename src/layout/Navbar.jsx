import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "../utils/scrollReveal";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { useTranslation } from "../i18n/LanguageContext";

export const Navbar = () => {
    const { t } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { href: "#about", label: t("nav.about") },
        { href: "#projects", label: t("nav.projects") },
        { href: "#experience", label: t("nav.experience") },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        scrollToSection(href);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}
        >
            <nav className="container mx-auto px-6 grid grid-cols-[1fr_auto_1fr] items-center">
                <a
                    href="#"
                    onClick={(e) => handleNavClick(e, "#")}
                    className="text-xl font-bold tracking-tight hover:text-primary transition-colors duration-300 justify-self-start"
                >
                    LA <span className="text-primary">.</span>
                </a>

                <div className="hidden md:flex justify-center">
                    <div className="glass rounded-full px-2 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-3 justify-self-end">
                    
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, "#contact")}
                    >
                        <Button size="sm">{t("nav.contact")}</Button>
                    </a>
                    <LanguageSwitcher />
                </div>

                <div className="flex md:hidden items-center gap-2 justify-self-end col-start-3">
                    <LanguageSwitcher />
                    <button
                        className="p-2 text-foreground cursor-pointer"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in is-visible">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-lg text-muted-foreground hover:text-foreground py-2 transition-colors duration-300"
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button onClick={(e) => handleNavClick(e, "#contact")}>
                            {t("nav.contact")}
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};
