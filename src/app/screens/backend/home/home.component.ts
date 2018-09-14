import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/resource/user.resource';
import { AuthenticationService } from '@app/services/authentication/authentication.service';


@Component({
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit {
    currentUser: User;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.currentUser = this.authenticationService.user;
    }
}
