import {Component, OnInit} from '@angular/core';

import {User} from 'app/models';
import {UserService} from 'app/services';

@Component({
    moduleId: module.id,
    template: require('./home.component.html'),
    styles: [
        require('./home.component.scss')
    ]
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}