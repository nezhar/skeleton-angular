import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: './users-screen.component.html',
    styleUrls: [
        './users-screen.component.scss'
    ]
})
export class UsersScreenComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('Users screen component initialised');
    }
}
