import { tap } from 'rxjs/operators';
import { State, Action, Selector, StateContext } from '@ngxs/store';

import { AuthenticationResource } from '@app/services/resource/authentication.resource';
import { AuthStateModel } from '@app/shared/state/auth/auth.model';
import { Login, Logout, Refresh, Verify } from '@app/shared/state/auth/auth.actions';
import { interval, Subscription } from 'rxjs';


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

    constructor(private authenticationResource: AuthenticationResource) {
    }

    /**
     * Commands
     */
    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, payload: Login) {
        return this.authenticationResource.login({}, {'username': payload.username, 'password': payload.password}).$observable.pipe(
            tap(result => {
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
            }, () => {
                ctx.dispatch(new Logout());
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
