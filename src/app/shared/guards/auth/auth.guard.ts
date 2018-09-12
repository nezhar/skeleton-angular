import { Injectable } from '@angular/core';

import { StateService, Transition } from '@uirouter/angular';
import { AuthenticationService } from '@app/services/authentication/authentication.service';



@Injectable()
export class AuthenticationGuard {
    constructor(protected _authenticationService: AuthenticationService,
                protected _stateService: StateService) {
    }

    unauthenticated(transition: Transition) {
        return new Promise((resolve, reject) => {
            const
                transitionTargetName = transition.to().name;

            this._authenticationService.logout()
                .then(() => {
                    console.log(transitionTargetName);

                    resolve(this._stateService.target('auth'));
                })
                .catch(reject);
        });
    }

    authenticated(transition: Transition) {
        return new Promise((resolve, reject) => {
            this._authenticationService.isAuthenticatedAsync()
                .then((authenticated) => {
                    const
                        transitionTargetName = transition.to().name,
                        user = this._authenticationService.user;

                    if (!authenticated) {
                        console.log('auth');

                        resolve(this._stateService.target('auth', {}, {
                            reload: true,
                        }));
                    } else if (user.superuser && transitionTargetName.indexOf('backend') !== 0) {
                        console.log('backend');

                        resolve(this._stateService.target('backend'));
                    } else if (!user.superuser && transitionTargetName.indexOf('frontend') !== 0) {
                        console.log('frontend');

                        resolve(this._stateService.target('frontend'));
                    } else {
                        resolve();
                    }
                })
                .catch(reject);
        });
    }
}


export function guardAuthenticated(transition: Transition, guard: AuthenticationGuard) {
    return guard.authenticated(transition);
}


export function guardUnauthenticated(transition: Transition, guard: AuthenticationGuard) {
    return guard.unauthenticated(transition);
}
