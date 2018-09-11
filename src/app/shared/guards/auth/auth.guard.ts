import { StateService, Transition } from '@uirouter/angular';
import { Injectable } from '@angular/core';

import { AuthenticationResource } from 'src/app/services/resource/authentication.resource';
import { AlertService } from 'src/app/services/alert/alert.service';


export interface GuardConfiguration {
    token: string;
    deps: any[];
    resolveFn: (stateService, authenticationResource) => void;
}


@Injectable()
export class AuthGuard {
    constructor(
        private authenticationResource: AuthenticationResource,
        private alertService: AlertService,
    ) {}

    isLoggedIn(transition: Transition) {
        const {stateService, urlService} = transition.router;
        const currentPath = urlService.path();

        if (!localStorage.getItem('currentUser')) {
            stateService.go('auth');
        }

        const user = JSON.parse(localStorage.getItem('currentUser'));

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

export const stateAuthGuardConfiguration: GuardConfiguration[] = [
    {
        token: 'auth',
        deps: [Transition, AuthGuard],
        resolveFn: (transition, authGuard) => authGuard.isLoggedIn(transition)
    }
];

export const stateAuthLogoutConfiguration: GuardConfiguration[] = [
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
