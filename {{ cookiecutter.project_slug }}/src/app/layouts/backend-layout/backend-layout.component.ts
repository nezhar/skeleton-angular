import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Select } from '@ngxs/store';
import { StateService } from '@uirouter/core';

import { AuthState } from '@app/shared/state/auth/auth.state';
import { AuthStateModel } from '@app/shared/state/auth/auth.model';

@Component({
    templateUrl: './backend-layout.component.html',
    styleUrls: [
        './backend-layout.component.scss'
    ]
})
export class BackendLayoutComponent implements OnInit, OnDestroy {

    @Select(AuthState) auth: Observable<AuthStateModel>;

    authSubscription: Subscription;

    constructor(private state: StateService) {
    }

    ngOnInit() {
        this.authSubscription = this.auth.subscribe(auth => {
            if (auth.user === null && auth.loaded) {
                console.log('Backend: Redirect to auth');
                this.state.go('auth');
            }
        });
    }

    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
}



