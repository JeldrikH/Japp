export default class LanguageManager {
    constructor() {
        this.translations = {}; // Store loaded translations
    }

    async loadLanguage(language) {
        try {
            const response = await fetch(`/lang/${language}.json`);
            this.translations = await response.json();
            this.applyTranslations(this.translations);
        } catch (error) {
            console.error("Error loading language file:", error);
        }
    }

    applyTranslations(translations) {
        // Update text content
        document.querySelectorAll("[data-lang-key]").forEach((element) => {
            const key = element.getAttribute("data-lang-key");
            if (translations[key]) {
                element.innerHTML = translations[key];
            }
        });

        // Update placeholders
        document.querySelectorAll("[data-lang-key-placeholder]").forEach((element) => {
            const key = element.getAttribute("data-lang-key-placeholder");
            if (translations[key]) {
                element.placeholder = translations[key];
            }
        });
    }
    
    getTranslation(key) {
        return this.translations[key] || key; // Return the key itself if no translation is found
    }


}