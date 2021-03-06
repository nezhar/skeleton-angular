import { tap } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { StateService } from '@uirouter/core';
import { ResourceModel } from 'ngx-resource-factory/resource/resource-model';

import { AuthenticationResource, AuthenticationUserToken } from '@app/services/resource/authentication.resource';

import { AuthStateModel } from './auth.model';
import { Login, Logout, Refresh, Verify } from './auth.actions';


/**
 * Interval for refreshing the token.
 * @type {number}
 */
export const AUTHENTICATION_REFRESH_INTERVAL = 60 * 1000;


@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        token: null,
        user: null,
        loaded: false,
    }
})
export class AuthState {

    protected _interval: Subscription = null;

    /**
     * Selectors
     */
    @Selector()
    static getUser(state: AuthStateModel) {
        return state.user;
    }

    @Selector()
    static getToken(state: AuthStateModel) {
        return state.token;
    }

    constructor(private authenticationResource: AuthenticationResource, private state: StateService) {
    }

    /**
     * Commands
     */
    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, payload: Login) {
        return this.authenticationResource.login({}, {'username': payload.username, 'password': payload.password}).$observable.pipe(
            tap((result: ResourceModel<AuthenticationUserToken>) => {
                ctx.patchState({
                    token: result.token,
                    user: result.user,
                });

                this.startTokenRefreshInterval(ctx);
            })
        );
    }

    @Action(Verify)
    verify(ctx: StateContext<AuthStateModel>) {
        if (!ctx.getState().token) {
            // do not verify if there is no token set
            ctx.dispatch(new Logout());

            return false;
        }

        return this.authenticationResource.verify({}, {'token': ctx.getState().token}).$observable.pipe(
            tap(result => {
                ctx.patchState({
                    token: result.token,
                    user: result.user,
                    loaded: true,
                });

                this.startTokenRefreshInterval(ctx);
            }, () => {
                ctx.dispatch(new Logout());
            })
        );
    }

    @Action(Refresh)
    refresh(ctx: StateContext<AuthStateModel>) {
        return this.authenticationResource.refresh({}, {'token': ctx.getState().token}).$observable.pipe(
            tap(result => {
                ctx.patchState({
                    token: result.token,
                    user: result.user,
                    loaded: true,
                });
            }, (rejection) => {
                if (rejection.status === 0) {
                    // network error (bad connection, server offline, ...)
                    console.error('Auth Refresh: Failed to connect to server.');
                } else {
                    ctx.dispatch(new Logout());
                }
            })
        );
    }

    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>) {
        ctx.setState({
            token: null,
            user: null,
            loaded: false,
        });

        this.stopTokenRefreshInterval();

        // navigate to start page
        this.state.go('auth');
    }

    /**
     * Starts the token refresh interval. Clears an existing interval if one is running.
     */
    protected startTokenRefreshInterval(ctx: StateContext<AuthStateModel>) {
        this.stopTokenRefreshInterval();
        console.log('Auth: Start token refresh interval');
        this._interval = interval(AUTHENTICATION_REFRESH_INTERVAL).subscribe(() => {
            ctx.dispatch(new Refresh());
        });
    }

    /**
     * Clears an existing token refresh interval if one is running.
     */
    protected stopTokenRefreshInterval() {
        if (this._interval && !this._interval.closed) {
            console.log('Auth: Stop token refresh interval');
            this._interval.unsubscribe();
        }
    }

}
