import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { StateService, Transition } from '@uirouter/angular';
import { Observable } from 'rxjs';
import { ResourceModel } from 'ngx-resource-factory/resource/resource-model';

import { SharedModule } from '../../shared.module';
import { AuthState } from '../../state/auth/auth.state';
import { Logout, Verify } from '../../state/auth/auth.actions';
import { User } from '../../../services/resource/user.resource';


@Injectable({
    providedIn: SharedModule
})
export class AuthenticationGuard {

    @Select(AuthState) auth: Observable<number>;

    constructor(protected _stateService: StateService,
                protected _store: Store) {
    }

    unauthenticated(transition: Transition) {
        return new Promise((resolve, reject) => {
            const
                transitionTargetName = transition.to().name;

            this._store.dispatch(new Logout)
                .toPromise()
                .then(() => {
                    console.log(transitionTargetName);
                    resolve(this._stateService.target('auth'));
                })
                .catch(reject);
        });
    }

    authenticated(transition: Transition) {
        return new Promise((resolve) => {

            if (this._store.snapshot().auth.user) {
                resolve(this.redirectUser(transition, this._store.snapshot().auth.user));
            } else {
                this._store.dispatch(new Verify())
                .toPromise()
                .then((data) => {
                    resolve(this.redirectUser(transition, data.auth.user));
                })
                .catch(() => {
                    resolve(this._stateService.target('auth'));
                });
            }
        });
    }

    private redirectUser(transition: Transition, user: ResourceModel<User>) {
        const
            transitionTargetName = transition.to().name;

        if (!user) {
            console.log('Auth guard: Redirect to auth');

            return this._stateService.target('auth', {}, {
                reload: true,
            });
        } else if (user.superuser && transitionTargetName.indexOf('backend') !== 0) {
            console.log('Auth guard: Redirect to backend');

            return this._stateService.target('backend');
        } else if (!user.superuser && transitionTargetName.indexOf('frontend') !== 0) {
            console.log('Auth guard: Redirect to frontend');

            return this._stateService.target('frontend');
        }

        return;
    }
}


export function guardAuthenticated(transition: Transition, guard: AuthenticationGuard) {
    return guard.authenticated(transition);
}


export function guardUnauthenticated(transition: Transition, guard: AuthenticationGuard) {
    return guard.unauthenticated(transition);
}
