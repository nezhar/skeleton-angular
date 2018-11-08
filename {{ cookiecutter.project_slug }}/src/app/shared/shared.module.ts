import { ModuleWithProviders, NgModule } from '@angular/core';

import { jwtProvider } from '@app/shared/interceptors/jwt.interceptor';
import { fakeBackendProvider } from '@app/shared/interceptors/fake-backend';
import { appStorageProvider } from '@app/shared/storage/app.storage';
import { loadingScreenProvider } from '@app/shared/interceptors/loader.interceptor';


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
            ]
        };
    }

}
