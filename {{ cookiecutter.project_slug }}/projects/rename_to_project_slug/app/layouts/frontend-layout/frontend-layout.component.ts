import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Select } from '@ngxs/store';
import { StateService } from '@uirouter/core';

import { AuthState } from '../../shared/state/auth/auth.state';
import { AuthStateModel } from '../../shared/state/auth/auth.model';

@Component({
    templateUrl: './frontend-layout.component.html',
    styleUrls: [
        './frontend-layout.component.scss'
    ]
})
export class FrontendLayoutComponent implements OnInit, OnDestroy {

    @Select(AuthState) auth: Observable<AuthStateModel>;

    authSubscription: Subscription;

    constructor(private state: StateService) {
    }

    ngOnInit() {
        this.authSubscription = this.auth.subscribe(auth => {
            if (auth.user === null && auth.loaded) {
                console.log('Frontend: Redirect to auth');
                this.state.go('auth');
            }
        });
    }

    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }

}
