import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-frontend-layout',
    template: require('./frontend-layout.component.html'),
    styles: [
        require('./frontend-layout.component.scss')
    ]
})
export class FrontendLayoutComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
