import {StateService, Transition, ResolveTypes} from "@uirouter/angular";
import {Injectable} from "@angular/core";

import {AlertService, AuthenticationResource} from "app/services";

@Injectable()
export class AuthGuard {
    constructor(
        private authenticationResource: AuthenticationResource,
        private alertService: AlertService,
    ) {}
 
    isLoggedIn(transition: Transition) {
        let {stateService, urlService} = transition.router;
        let currentPath = urlService.path();

        if (!localStorage.getItem('currentUser')) {
            stateService.go('auth');
        }

        let user = JSON.parse(localStorage.getItem('currentUser'));

        this.authenticationResource.authverify({}, {token: user.token}).$promise
            .then(data => {
                if (user.superuser && currentPath.indexOf('backend') === -1) {
                    stateService.go('backend');
                }

                if (!user.superuser && currentPath.indexOf('frontend') === -1) {
                    stateService.go('frontend');
                }
            })
            .catch(error => {
                this.alertService.error(error);
                stateService.go('auth');
            });
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
 * @type ResolveTypes {{token: string; deps: (StateService | AuthenticationService)[]; resolveFn: (stateService, authenticationResource) => void}[]}
 */
export const stateAuthLogoutConfiguration = [
    {
        token: 'logout',
        deps: [StateService, AuthenticationResource],
        resolveFn: (stateService, authenticationResource) => {
            authenticationResource.logout();
            localStorage.removeItem('currentUser');
            stateService.go('auth');
        },
    }
];