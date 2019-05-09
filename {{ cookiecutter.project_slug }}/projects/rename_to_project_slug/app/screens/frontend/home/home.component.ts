import { Component, OnInit } from '@angular/core';
import { User } from '@app/services/resource/user.resource';
import { Select } from '@ngxs/store';

import { Observable } from 'rxjs';
import { AuthState } from '../../../shared/state/auth/auth.state';
import { AuthStateModel } from '../../../shared/state/auth/auth.model';


@Component({
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit {
    currentUser: User;

    @Select(AuthState) auth: Observable<AuthStateModel>;

    constructor() {
    }

    ngOnInit() {
        this.auth.subscribe(data => {
            this.currentUser = data.user;
        });
    }
}
