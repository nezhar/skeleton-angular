import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-permissions-screen',
    templateUrl: './permissions-screen.component.html',
    styleUrls: [
        './permissions-screen.component.scss'
    ]
})
export class PermissionsScreenComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('Permissions screen component initialised');
    }
}