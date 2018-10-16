import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@app/services/language/language.service';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: [
        './main.component.scss'
    ]
})
export class MainComponent implements OnInit {
    constructor(private languageService: LanguageService) {
    }

    ngOnInit() {
        console.log('Main component initialised');
        console.log('Default language loaded: ' + this.languageService.getLanguage().getLanguageKey());
    }
}
