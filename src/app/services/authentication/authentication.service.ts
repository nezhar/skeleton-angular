import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { AuthenticationResource } from '../resource/authentication.resource';


/**
 * Key of the authentication token in the local storage.
 * @type {string}
 */
export const AUTHENTICATION_TOKEN_NAME = 'auth.token';


/**
 * Interval for refreshing the token.
 * @type {number}
 */
export const AUTHENTICATION_REFRESH_INTERVAL = 30 * 1000;


/**
 * Event types emitted by the `AuthenticationService`.
 */
export enum AuthenticationServiceEventType {
    UNKNOWN = 'UNKNOWN',
    VERIFIED = 'VERIFIED',
    LOGGED_IN = 'LOGGED_IN',
    LOGGED_OUT = 'LOGGED_OUT',
}


/**
 * Event class for `AuthenticationService`.
 */
export class AuthenticationServiceEvent {

    constructor(protected _type: AuthenticationServiceEventType,
                protected _user: any,
                protected _token: string, ) {
    }

    /**
     * Type of the event.
     * @returns {AuthenticationServiceEventType}
     */
    get type(): AuthenticationServiceEventType {
        return this._type;
    }

    /**
     * Authentication token.
     * @returns {string}
     */
    get token(): string {
        return this._token;
    }

    /**
     * User object.
     * @returns {any}
     */
    get user(): any {
        return this._user;
    }

    /**
     * User is authenticated.
     * @returns {boolean}
     */
    get authenticated(): boolean {
        return !!this._user;
    }
}


/**
 * Service used for managing authentication and user data.
 */
@Injectable()
export class AuthenticationService {

    protected _user: any = null;
    protected _interval: any = null;
    protected _subject: BehaviorSubject<AuthenticationServiceEvent> = null;
    protected _observable: Observable<AuthenticationServiceEvent> = null;

    constructor(protected _authResource: AuthenticationResource, ) {
        const
            initialEvent = new AuthenticationServiceEvent(AuthenticationServiceEventType.UNKNOWN, null, null),
            subject = new BehaviorSubject(initialEvent);

        this._subject = subject;
        this._observable = subject.asObservable();
    }

    /**
     * Authentication token.
     * @returns {string}
     */
    get token(): string {
        return window.localStorage.getItem(AUTHENTICATION_TOKEN_NAME) || null;
    }

    set token(value: string) {
        if (value) {
            window.localStorage.setItem(AUTHENTICATION_TOKEN_NAME, value);
        } else {
            window.localStorage.removeItem(AUTHENTICATION_TOKEN_NAME);
        }
    }

    /**
     * User object.
     * @returns {any}
     */
    get user(): any {
        return this._user || null;
    }

    set user(value: any) {
        this._user = value;
    }

    /**
     * Observable for subscribing to authentication state changes.
     * @returns {Observable<AuthenticationServiceEvent>}
     */
    get observable(): Observable<AuthenticationServiceEvent> {
        return this._observable;
    }

    /**
     * Verify the given token and obtain the user object from it.
     * @param {string} token Token to verify
     * @returns {Promise<any>}
     */
    verify(token?: string): Promise<any> {
        // Get token from local storage if not given to the method
        token = token || this.token;

        return new Promise<any>((resolve, reject) => {
            this._authResource.verify({}, {'token': token}).$promise
                .then((data) => {
                    this.user = data && data.user ? data.user : null;
                    this.token = data && data.token ? data.token : null;
                    this.startTokenRefreshInterval();

                    this.emit(AuthenticationServiceEventType.VERIFIED, this.user, this.token);

                    resolve(this.user);
                })
                .catch(() => {
                    this.logout();
                    reject();
                });
        });
    }

    /**
     * Login with the given credentials and obtain the token and user data.
     * @param {string} username Username used for login
     * @param {string} password Password used for login
     * @returns {Promise<any>}
     */
    login(username: string, password: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this._authResource.login({}, {'username': username, 'password': password}).$promise
                .then((data) => {
                    const
                        token = data && data.token ? data.token : null,
                        user = data;

                    this.user = user;
                    this.token = token;
                    this.startTokenRefreshInterval();

                    this.emit(AuthenticationServiceEventType.LOGGED_IN, user, token);

                    resolve(user);
                })
                .catch((reason) => {
                    this.logout();
                    reject(reason);
                });
        });
    }

    /**
     * Logout with the given token.
     * @param {string} token Token used for logout
     * @returns {Promise<null>}
     */
    logout(token?: string): Promise<null> {
        // Get token from local storage if not given to the method
        token = token || this.token;

        return new Promise<any>((resolve, reject) => {
            // No need to do a logout call if we are already in logged out state
            if (!token) {
                resolve(null);
                return;
            }

            // this._authResource.logout({}, {'token': token}).$promise
            Promise.resolve() // TODO: switch to API call as soon as logout call is available
                .then(() => {
                    this.stopTokenRefreshInterval();
                    this.token = null;
                    this.user = null;

                    this.emit(AuthenticationServiceEventType.LOGGED_OUT, null, null);

                    resolve(null);
                })
                .catch(() => {
                    reject();
                });
        });
    }

    /**
     * Check if the currently active user has the given permission.
     * @param {string} perm Permission identifier
     * @returns {boolean}
     */
    hasPermission(perm: string): boolean {
        const
            user = this.user,
            perms = user && user.permissions ? user.permissions : [];

        return perms.indexOf(perm) !== -1;
    }

    /**
     * Check if the currently active user has the given permission. Returns result as a promise.
     * @param {string} perm Permission identifier
     * @returns {Promise<boolean>}
     */
    hasPermissionAsync(perm: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (this.user) {
                resolve(this.hasPermission(perm));
            } else if (this.token) {
                this.verify(this.token)
                    .then(() => {
                        resolve(this.hasPermission(perm));
                    })
                    .catch(reject);
            } else {
                resolve(false);
            }
        });
    }

    /**
     * Check there is an currently authenticated user.
     * @returns {boolean}
     */
    isAuthenticated(): boolean {
        return !!this.user;
    }

    /**
     * Check there is an currently authenticated user. Returns result as a promise.
     * @returns {boolean}
     */
    isAuthenticatedAsync(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (this.user) {
                resolve(this.isAuthenticated());
            } else if (this.token) {
                this.verify(this.token)
                    .then(() => {
                        resolve(this.isAuthenticated());
                    })
                    .catch(reject);
            } else {
                resolve(false);
            }
        });
    }

    /**
     * Starts the token refresh interval. Clears an existing interval if one is running.
     */
    protected startTokenRefreshInterval() {
        this.stopTokenRefreshInterval();

        this._interval = window.setInterval(() => {
            this._authResource.refresh({}, {'token': this.token}).$promise
                .then((data) => {
                    const
                        token = data && data.token ? data.token : null,
                        user = data && data.user ? data.user : null;

                    this.user = user;
                    this.token = token;
                })
                .catch(() => {
                    this.logout();
                });
        }, AUTHENTICATION_REFRESH_INTERVAL);
    }

    /**
     * Clears an existing token refresh interval if one is running.
     */
    protected stopTokenRefreshInterval() {
        // clear an existing interval if existing
        if (this._interval) {
            window.clearInterval(this._interval);
        }
    }

    /**
     * Emit an authentication state change event.
     * @param {AuthenticationServiceEventType} type Type of the event
     * @param user User object
     * @param {string} token Authentication token
     */
    protected emit(type: AuthenticationServiceEventType, user: any, token: string) {
        const
            event = new AuthenticationServiceEvent(type, user, token);

        this._subject.next(event);
    }

}
