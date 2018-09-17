import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: './permissions.component.html',
    styleUrls: [
        './permissions.component.scss'
    ]
})
export class PermissionsComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('Permissions component initialised');
    }
}
