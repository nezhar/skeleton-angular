import { ModuleWithProviders, NgModule } from '@angular/core';

import { jwtProvider } from './interceptors/jwt.interceptor';
import { fakeBackendProvider } from './interceptors/fake-backend';
import { appStorageProvider } from './storage/app.storage';
import { loadingScreenProvider } from './interceptors/loader.interceptor';
import { activeLanguageProvider } from './interceptors/language.interceptor';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [ /* declare in `forRoot()` */ ],
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                jwtProvider,
                fakeBackendProvider,
                appStorageProvider,
                loadingScreenProvider,
                activeLanguageProvider,
            ]
        };
    }

}
