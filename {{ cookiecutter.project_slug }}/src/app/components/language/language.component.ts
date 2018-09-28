import { Component, OnInit } from '@angular/core';

import { LanguageService } from '@app/services/language/language.service';
import { Language } from '@app/services/language/language.model';


@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: [
        './language.component.scss'
    ]
})
export class LanguageComponent implements OnInit {
    constructor(private languageService: LanguageService) {
    }

    ngOnInit() {
        console.log('Language component initialised');
    }

    getLanguages(): Language[] {
        return this.languageService.getAvailableLanguages();
    }

    getLanguage(): Language {
        return this.languageService.getLanguage();
    }

    setLanguage(lang: Language) {
        this.languageService.setLanguage(lang);
    }
}
