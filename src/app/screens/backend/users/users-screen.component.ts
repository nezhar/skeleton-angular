import { Component, OnInit } from '@angular/core';
import { User, UserResource } from '@app/services/resource/user.resource';


@Component({
    templateUrl: './users-screen.component.html',
    styleUrls: [
        './users-screen.component.scss'
    ]
})
export class UsersScreenComponent implements OnInit {
    users: User[] = [];

    constructor(private userResource: UserResource) { }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userResource.remove({pk: id}).$promise.then(() => { this.loadAllUsers(); });
    }

    private loadAllUsers() {
        this.userResource.query().$promise
            .then(users => {
                this.users = users;
            })
            .catch(reason => {
                console.log('Cannot load users');
                console.log(reason);
            });
    }
}
