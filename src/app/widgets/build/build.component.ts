import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-build',
    template: require('./build.component.html'),
    styles: [
        require('./build.component.scss')
    ]
})
export class BuildComponent implements OnInit {
    buildVersion: string = BUILD_VERSION;
    buildDate: string = BUILD_DATE;
    buildDevelopment: boolean = BUILD_DEVELOPMENT;
    buildProduction: boolean = BUILD_PRODUCTION;
    buildTest: boolean = BUILD_TEST;

    constructor() { }

    ngOnInit() {
        console.log('Build component initialised');
    }
}