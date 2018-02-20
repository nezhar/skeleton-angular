import {StateService, Transition, ResolveTypes} from "@uirouter/angular";
import {Injectable} from "@angular/core";

import {AuthenticationService, AlertService} from "app/services";

@Injectable()
export class AuthGuard {
    constructor(
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
    ) {}
 
    isLoggedIn(transition: Transition) {
        let {stateService, urlService} = transition.router;
        let currentPath = urlService.path();

        if (!localStorage.getItem('currentUser')) {
            stateService.go('auth');
        }

        let user = JSON.parse(localStorage.getItem('currentUser'));

        this.authenticationService.verify_token(user.token)
            .subscribe(
                data => {
                    if (user.superuser && currentPath.indexOf('backend') === -1) {
                        stateService.go('backend');
                    }

                    if (!user.superuser && currentPath.indexOf('frontend') === -1) {
                        stateService.go('frontend');
                    }
                },
                error => {
                    this.alertService.error(error);
                    stateService.go('auth');
                }
            );
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