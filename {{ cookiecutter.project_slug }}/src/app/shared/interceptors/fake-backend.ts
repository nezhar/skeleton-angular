import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import { User } from '@app/services/resource/user.resource';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    private userBody(user: User) {
        return {
            user: {
                id: user.id,
                username: user.username,
                first_name: user.first_name,
                last_name: user.last_name,
                superuser: user.superuser,
            },
            token: `fake-jwt-token:${user.username}`
        };
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array in local storage for registered users
        const users: any[] = JSON.parse(localStorage.getItem('users')) || [];

        // wrap in delayed observable to simulate server api call
        return Observable.of(null).mergeMap(() => {
            console.log(`Fake Backend | ${request.method}: ${request.url}, Body: ${JSON.stringify(request.body)}`);

            // authenticate
            if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                const filteredUsers = users.filter(user => {
                    return user.username === request.body.username && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    const
                        user = filteredUsers[0],
                        body = this.userBody(user);
                    return Observable.of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // else return 400 bad request
                    return Observable.throwError('Username or password is incorrect');
                }
            }

            // authverify
            if (request.url.endsWith('/api/authverify') && request.method === 'POST') {
                const token = request.body.token;

                // Simulate expired token
                // return Observable.throwError('Expired token!');

                if (token) {
                    const
                        username = token.split(':')[1],
                        filteredUsers = users.filter(user => {
                            return user.username === username;
                        });

                    if (filteredUsers.length) {
                        // if login details are valid return 200 OK with user details and fake jwt token
                        const
                            user = filteredUsers[0],
                            body = this.userBody(user);

                        return Observable.of(new HttpResponse({ status: 200, body: body }));
                    } else {
                        // Return 400 bad request
                        return Observable.throwError('Invalid token!');
                    }
                } else {
                    // Return 400 bad request
                    return Observable.throwError('Missing token!');
                }
            }

            // authrefresh
            if (request.url.endsWith('/api/authrefresh') && request.method === 'POST') {
                const
                    token = request.body.token;

                // Simulate expired token
                // return Observable.throwError('Expired token!');

                if (token) {
                    const
                        username = token.split(':')[1],
                        filteredUsers = users.filter(user => {
                            return user.username === username;
                        });

                    if (filteredUsers.length) {
                        // if login details are valid return 200 OK with user details and fake jwt token
                        const
                            user = filteredUsers[0],
                            body = this.userBody(user);

                        return Observable.of(new HttpResponse({status: 200, body: body}));
                    } else {
                        // Return 400 bad request
                        return Observable.throwError('Invalid token!');
                    }
                } else {
                    // Return 400 bad request
                    return Observable.throwError('Missing token!');
                }
            }

            // get user list
            if (request.url.endsWith('/api/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid,
                // this security is implemented server side in a real application
                if (request.headers.get('Authorization').startsWith('JWT fake-jwt-token')) {
                    return Observable.of(new HttpResponse({ status: 200, body: users }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throwError('Unauthorised');
                }
            }

            // get user by id
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid,
                // this security is implemented server side in a real application
                if (request.headers.get('Authorization').startsWith('JWT fake-jwt-token')) {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    const id = parseInt(urlParts[urlParts.length - 1], 10);
                    const matchedUsers = users.filter(userEntry => userEntry.id === id);
                    const user = matchedUsers.length ? matchedUsers[0] : null;

                    return Observable.of(new HttpResponse({ status: 200, body: user }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throwError('Unauthorised');
                }
            }

            // create user
            if (request.url.endsWith('/api/users') && request.method === 'POST') {
                // get new user object from post body
                const newUser = request.body;

                // validation
                const duplicateUser = users.filter(user => user.username === newUser.username).length;
                if (duplicateUser) {
                    return Observable.throwError('Username "' + newUser.username + '" is already taken');
                }

                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // respond 200 OK
                return Observable.of(new HttpResponse({ status: 200 }));
            }

            // delete user
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid,
                // this security is implemented server side in a real application
                if (request.headers.get('Authorization').startsWith('JWT fake-jwt-token')) {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    const id = parseInt(urlParts[urlParts.length - 1], 10);
                    for (let i = 0; i < users.length; i++) {
                        const user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }

                    // respond 200 OK
                    return Observable.of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throwError('Unauthorised');
                }
            }

            console.log(`Fake Backend | ${request.method}: ${request.url} not processed -> going to real api`);

            // pass through any requests not handled above
            return next.handle(request);
        })

        // call materialize and dematerialize to ensure delay even if an error
        // is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .materialize()
        .delay(500)
        .dematerialize();
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
