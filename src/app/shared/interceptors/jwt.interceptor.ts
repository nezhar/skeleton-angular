import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngxs/store';

import { environment } from '@env/environment';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    /**
     * Authorization headers will be set for this URLs
     *
     * @type {string[]}
     */
    allowedUrls = [
        environment.api_url,
    ];

    constructor(private store: Store) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.store.snapshot().auth.token;
        let addAuthHeaders = false;

        for (const allowedUrl of this.allowedUrls) {
            if (new RegExp(allowedUrl).test(request.url)) {
                addAuthHeaders = true;
                break;
            }
        }

        if (token && addAuthHeaders) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}

export let jwtProvider =  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
};
