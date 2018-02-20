import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-users-screen',
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