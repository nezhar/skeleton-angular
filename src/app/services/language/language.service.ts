import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Language } from './language.model';
import { translate } from './language.helper';


@Injectable()
export class LanguageService {
    private availableLanguages = [
        new Language('en', translate('English')),
        new Language('de', translate('German')),
    ];

    constructor(private locale: TranslateService) {
        this.setFallbackLanguage(this.availableLanguages[0]);
        this.setLanguage(this.availableLanguages[0]);
    }

    getFallbackLanguage(): Language {
        const
            self = this;

        return this.availableLanguages.filter(function (item: Language) {
            return item.getLanguageKey() === self.locale.defaultLang;
        })[0];
    }

    setFallbackLanguage(lang: Language) {
        this.locale.setDefaultLang(lang.getLanguageKey());
    }

    getLanguage(): Language {
        const
            self = this;

        return this.availableLanguages.filter(function (item: Language) {
            return item.getLanguageKey() === self.locale.currentLang;
        })[0];
    }

    setLanguage(lang: Language) {
        this.locale.use(lang.getLanguageKey());
    }

    getAvailableLanguages(): Language[] {
        return this.availableLanguages;
    }
}
