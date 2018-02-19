import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-backend-layout',
    template: require('./backend-layout.component.html'),
    styles: [
        require('./backend-layout.component.scss')
    ]
})
export class BackendLayoutComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
