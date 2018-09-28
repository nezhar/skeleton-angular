/**
 * Class representing a language in the application.
 */
export class Language {
    constructor(private key: string, private name: string) { }

    /**
     * Gets the language key of the language (e.g. 'en', 'de', ...)
     * @returns {string}
     */
    getLanguageKey(): string {
        return this.key;
    }

    /**
     * Gets the language name of the language (e.g. 'English', 'German', ...)
     * @returns {string}
     */
    getLanguageName(): string {
        return this.name;
    }
}
