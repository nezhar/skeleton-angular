import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { VERSION } from '@env/version';

@Component({
    selector: 'app-build',
    templateUrl: './build.component.html',
    styleUrls: [
        './build.component.scss'
    ]
})
export class BuildComponent implements OnInit {
    buildVersion: string = VERSION.tag || VERSION.hash;
    buildDate: string = VERSION.date;
    buildDevelopment: boolean = environment.development;
    buildProduction: boolean = environment.production;
    buildStaging: boolean = environment.staging;

    constructor() { }

    ngOnInit() {
        console.log('Build component initialised');
    }
}
