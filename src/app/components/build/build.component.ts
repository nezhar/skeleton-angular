import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VERSION } from 'src/environments/version';

@Component({
    selector: 'app-build',
    templateUrl: './build.component.html',
    styleUrls: [
        './build.component.scss'
    ]
})
export class BuildComponent implements OnInit {
    buildVersion: string = VERSION.hash;
    buildDate: string = VERSION.date;
    buildDevelopment: boolean = environment.development;
    buildProduction: boolean = environment.production;
    buildStaging: boolean = environment.staging;

    constructor() { }

    ngOnInit() {
        console.log('Build component initialised');
    }
}
