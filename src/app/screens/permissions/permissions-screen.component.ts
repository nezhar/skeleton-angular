import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-permissions-screen',
    template: require('./permissions-screen.component.html'),
    styles: [
        require('./permissions-screen.component.scss')
    ]
})
export class PermissionsScreenComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('Permissions screen component initialised');
    }
}