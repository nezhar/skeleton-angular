import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.scss'
    ]
})
export class HeaderComponent implements OnInit {
    buildVersion: string = BUILD_VERSION;
    buildDate: string = BUILD_DATE;
    buildDevelopment: boolean = BUILD_DEVELOPMENT;

    constructor() { }

    ngOnInit() {
        console.log('Header component initialised');
    }
}