import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
    constructor(private translationService: TranslateService) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const language = this.translationService.currentLang || null;
        if (language) {
            request = request.clone({
                setHeaders: {
                    'Accept-Language': language
                }
            });
        }
        return next.handle(request);
    }
}

export let activeLanguageProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: LanguageInterceptor,
    multi: true
};
