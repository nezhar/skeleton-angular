import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-users-screen',
    template: require('./users-screen.component.html'),
    styles: [
        require('./users-screen.component.scss')
    ]
})
export class UsersScreenComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('Users screen component initialised');
    }
}