import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { LoadingScreenService } from 'ngx-anx-loading-screen/loading-screen.service';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    activeRequests = 0;

    /**
     * The loading screen will not be displayed for this URLs
     *
     * @type {string[]}
     */
    ignoreUrls = [
        '/authverify',
        '/authrefresh',
    ];

    constructor(private loadingScreenService: LoadingScreenService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!new RegExp(this.ignoreUrls.join('|')).test(request.url)) {
            if (this.activeRequests === 0) {
                this.loadingScreenService.show();
            }
            this.activeRequests++;

            return next.handle(request).finally(() => {
                this.activeRequests--;
                if (this.activeRequests === 0) {
                    this.loadingScreenService.hide();
                }
            });
        } else {
            return next.handle(request);
        }
    }
}


export let loadingScreenProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
};