import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Language } from './language.model';
import { translate } from './language.helper';
import { Store } from '@ngxs/store';
import { Update } from '../../shared/state/language/language.actions';


@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private availableLanguages = [
        new Language('en', translate('English')),
        new Language('de', translate('German')),
    ];

    constructor(private locale: TranslateService,
                protected store: Store) {
        this.setFallbackLanguage(this.availableLanguages[0]);

        if (this.store.snapshot().language) {
            this.locale.use(this.store.snapshot().language);
        } else {
            this.setLanguage(this.availableLanguages[0]);
        }
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
        this.store.dispatch(new Update(lang.getLanguageKey()));
    }

    getAvailableLanguages(): Language[] {
        return this.availableLanguages;
    }
}
