import {StateService, Transition, ResolveTypes} from "@uirouter/angular";
import { Injectable } from "@angular/core";

import { AuthenticationService, AlertService } from "app/services";

@Injectable()
export class AuthGuard {
    constructor(
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
    ) {}
 
    isLoggedIn(transition: Transition) {
        let state = transition.router.stateService;

        if (!localStorage.getItem('currentUser')) {
            state.go('auth');
        } else {
            let user = JSON.parse(localStorage.getItem('currentUser'));

            this.authenticationService.verify_token(user.token)
                .subscribe(
                data => {
                    if (user.superuser) {
                        state.go('backend');
                    } else {
                        state.go('frontend');
                    }
                },
                error => {
                    this.alertService.error(error);
                    state.go('auth');
                }
            );
        }
    }
}

/**
 * @type ResolveTypes {{token: string; deps: (Transition | AuthGuard)[]; resolveFn: (transition, authGuard) => void}[]}
 */
export const stateAuthGuardConfiguration = [
    {
        token: 'auth',
        deps: [Transition, AuthGuard],
        resolveFn: (transition, authGuard) => authGuard.isLoggedIn(transition)
    }
];

/**
 * @type ResolveTypes {{token: string; deps: (StateService | AuthenticationService)[]; resolveFn: (stateService, authenticationService) => void}[]}
 */
export const stateAuthLogoutConfiguration = [
    {
        token: 'logout',
        deps: [StateService, AuthenticationService],
        resolveFn: (stateService, authenticationService) => {
            authenticationService.logout();
            stateService.go('auth');
        },
    }
];