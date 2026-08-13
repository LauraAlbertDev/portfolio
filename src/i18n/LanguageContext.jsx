import { createContext, useCallback, useContext, useEffect, useState } from "react";
import es from "./locales/es.json";
import en from "./locales/en.json";

const translations = { es, en };
const STORAGE_KEY = "portfolio-lang";
export const DEFAULT_LANGUAGE = "es";

const LanguageContext = createContext(null);

function getNestedValue(obj, path) {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export function LanguageProvider({ children }) {
    const [language, setLanguageState] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved === "en" ? "en" : DEFAULT_LANGUAGE;
    });

    useEffect(() => {
        document.documentElement.lang = language;
        document.title = translations[language].meta.title;
        localStorage.setItem(STORAGE_KEY, language);
    }, [language]);

    const setLanguage = (lang) => {
        if (translations[lang]) {
            setLanguageState(lang);
        }
    };

    const t = useCallback(
        (key) => getNestedValue(translations[language], key) ?? key,
        [language]
    );

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useTranslation must be used within LanguageProvider");
    }
    return context;
}
