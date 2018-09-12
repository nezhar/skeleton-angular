import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.scss'
    ]
})
export class HeaderComponent implements OnInit {
    buildVersion: string = environment.BUILD_VERSION;
    buildDate: string = environment.BUILD_DATE;
    buildDevelopment: boolean = environment.BUILD_DEVELOPMENT;

    constructor() { }

    ngOnInit() {
        console.log('Header component initialised');
    }
}
