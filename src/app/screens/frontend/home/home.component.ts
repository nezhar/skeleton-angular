import { Component, OnInit } from '@angular/core';
import { User, UserResource } from 'src/app/services/resource/user.resource';
import { AuthenticationService } from '@app/services/authentication/authentication.service';


@Component({
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userResource: UserResource,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.currentUser = this.authenticationService.user;
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userResource.remove({pk: id}).$promise.then(() => { this.loadAllUsers(); });
    }

    private loadAllUsers() {
        this.userResource.query().$promise.then(users => { this.users = users; });
    }
}
