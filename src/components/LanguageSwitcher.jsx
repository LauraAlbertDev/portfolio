import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/LanguageContext";

const LANGUAGES = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇬🇧" },
];

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    const current = LANGUAGES.find((lang) => lang.code === language) ?? LANGUAGES[0];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        const handleEscape = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-label={`Idioma: ${current.label}`}
                className="w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-surface transition-colors duration-300 text-xl leading-none"
            >
                {current.flag}
            </button>

            {isOpen && (
                <ul
                    role="listbox"
                    aria-label="Seleccionar idioma"
                    className="absolute right-0 mt-2 glass-strong rounded-xl border border-border/50 py-1 z-50 shadow-lg"
                >
                    {LANGUAGES.map((lang) => (
                        <li key={lang.code} role="option" aria-selected={language === lang.code}>
                            <button
                                type="button"
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                aria-label={lang.label}
                                className={`w-10 h-10 flex items-center justify-center text-xl leading-none transition-colors ${
                                    language === lang.code
                                        ? "bg-primary/10"
                                        : "hover:bg-surface"
                                }`}
                            >
                                {lang.flag}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
