import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Observable } from 'rxjs';
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
        let displayLoadingScreen = true;

        for (const ignoreUrl of this.ignoreUrls) {
            if (new RegExp(ignoreUrl).test(request.url)) {
                displayLoadingScreen = false;
                break;
            }
        }

        if (displayLoadingScreen) {
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
