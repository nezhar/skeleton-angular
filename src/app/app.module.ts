import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import {removeNgStyles, createNewHosts, createInputTransfer} from '@angularclass/hmr';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { NgxResourceFactoryModule } from 'ngx-resource-factory';

import { routingConfig } from './app.routing';
import { AppMissingTranslationHandler, createTranslatePoHttpLoader } from './services/language/language.helper';
import { MainComponent } from './layouts/main/main.component';
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';
import { LayoutsModule } from './layouts/layouts.module';
import { ComponentsModule } from './components/components.module';

import { AuthScreensModule } from './screens/auth/auth.module';
import { FrontendScreensModule } from './screens/frontend/frontend.module';
import { BackendScreensModule } from './screens/backend/backend.module';

import { AuthenticationGuard } from './shared/guards/auth/auth.guard';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';

// used to create fake backend
import { fakeBackendProvider } from './shared/interceptors/fake-backend';
import { AlertService } from './services/alert/alert.service';
import { AuthenticationResource } from './services/resource/authentication.resource';

@NgModule({
    imports: [
        // Angular imports
        BrowserModule,
        HttpClientModule,

        // 3rd party imports
        NgbModule,
        NgxResourceFactoryModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslatePoHttpLoader,
                deps: [
                    HttpClient,
                ]
            },
            missingTranslationHandler: {
                provide: MissingTranslationHandler,
                useClass: AppMissingTranslationHandler,
            }
        }),

        // Application imports
        UIRouterModule.forRoot(routingConfig),
        ServicesModule.forRoot(),
        SharedModule.forRoot(),
        AuthScreensModule.forRoot(),
        FrontendScreensModule.forRoot(),
        BackendScreensModule.forRoot(),
        LayoutsModule.forRoot(),
        ComponentsModule.forRoot(),
    ],
    bootstrap: [
        MainComponent,
    ],
    providers: [
        AuthenticationGuard,
        AlertService,
        AuthenticationResource,

        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // Provider used to create fake backend
        fakeBackendProvider
    ],
    declarations: []
})
export class AppModule {
    constructor(public appRef: ApplicationRef) {}

/*     hmrOnInit(store) {
        // Do nothing if we did not get a valid store object
        if (!store) {
            return;
        }

        // Restore the values of the input fields if we got
        // an input transfer object in the store
        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }

        // Trigger angular change detection
        this.appRef.tick();

        // Now we clean up the store
        delete store.restoreInputValues;
    }

    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);

        // Put helper functions on store for re-creating the host elements,
        // removing the old ones and restoring form inputs after HMR
        store.disposeOldHosts = createNewHosts(cmpLocation);
        store.restoreInputValues  = createInputTransfer();

        // Remove old styles from the application
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // Remove old elements and show new ones
        store.disposeOldHosts();

        // Now we clean up the store
        delete store.disposeOldHosts;
    } */
}
