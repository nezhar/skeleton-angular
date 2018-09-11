import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-build',
    templateUrl: './build.component.html',
    styleUrls: [
        './build.component.scss'
    ]
})
export class BuildComponent implements OnInit {
    buildVersion: string = environment.BUILD_VERSION;
    buildDate: string = environment.BUILD_DATE;
    buildDevelopment: boolean = environment.BUILD_DEVELOPMENT;
    buildProduction: boolean = environment.BUILD_PRODUCTION;
    buildTest: boolean = environment.BUILD_TEST;

    constructor() { }

    ngOnInit() {
        console.log('Build component initialised');
    }
}
