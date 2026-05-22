import { VscGlobe } from "react-icons/vsc";

import { useLanguage } from "../../context/LanguageContext";

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            className="language-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label="Change language"
            title="Change language"
        >
            <VscGlobe />
            <span>{language === "en" ? "ES" : "EN"}</span>
        </button>
    );
}