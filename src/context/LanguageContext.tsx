/* eslint-disable react-refresh/only-export-components */
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";

import {
    translations,
    type Language,
    type Translation,
} from "../i18n/translations";

type LanguageContextValue = {
    language: Language;
    t: Translation;
    changeLanguage: (language: Language) => void;
    toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
    children: ReactNode;
};

const STORAGE_KEY = "portfolio-language";

function getInitialLanguage(): Language {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    if (savedLanguage === "en" || savedLanguage === "es") {
        return savedLanguage;
    }

    const browserLanguage = navigator.language.toLowerCase();

    if (browserLanguage.startsWith("es")) {
        return "es";
    }

    return "en";
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>(getInitialLanguage);

    const changeLanguage = (newLanguage: Language) => {
        setLanguage(newLanguage);
    };

    const toggleLanguage = () => {
        setLanguage((currentLanguage) =>
            currentLanguage === "en" ? "es" : "en"
        );
    };

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

    const value = useMemo(
        () => ({
            language,
            t: translations[language],
            changeLanguage,
            toggleLanguage,
        }),
        [language]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return context;
}