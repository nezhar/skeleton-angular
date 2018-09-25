import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment } from 'src/environments/environment';
import { AUTHENTICATION_TOKEN_NAME } from '@app/services/authentication/authentication.service';


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

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const
            tokenName = AUTHENTICATION_TOKEN_NAME,
            token = window.localStorage.getItem(tokenName) || null;
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
