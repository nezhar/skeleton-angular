import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { User } from 'src/app/services/resource/user.resource';
import { AuthenticationService } from '@app/services/authentication/authentication.service';
import { Add, Clear, DemoState } from '@app/services/state/demo.state';

@Component({
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit {
    currentUser: User;

    @Select(DemoState) count: Observable<number>;

    constructor(private authenticationService: AuthenticationService,
                private store: Store) {
    }

    ngOnInit() {
        this.currentUser = this.authenticationService.user;
    }

    add() {
        this.store.dispatch(new Add());
    }

    clear() {
        this.store.dispatch(new Clear());
    }
}
