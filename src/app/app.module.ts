import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { NgxResourceFactoryModule } from 'ngx-resource-factory';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxUIRouterUrlTypeFactoryModule } from 'ngx-ui-router-url-type-factory';
import { NgxsModule } from '@ngxs/store';
import { NgxAnxLoadingScreenModule } from 'ngx-anx-loading-screen/ngx-anx-loading-screen.module';

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

import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';

import { IconsModule } from '@app/app.icons';
import { ModalsModule } from '@app/modals/modals.module';

import { fakeBackendProvider } from './shared/interceptors/fake-backend';
import { loadingScreenProvider } from '@app/shared/interceptors/loader.interceptor';

import { PostType } from '@app/shared/types/post.type';
import { states } from '@app/services/state/app.state';


@NgModule({
    imports: [
        // Angular imports
        BrowserModule,
        HttpClientModule,

        // 3rd party imports
        NgbModule,
        FontAwesomeModule,
        NgxDatatableModule,
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
        NgxAnxLoadingScreenModule.forRoot(),
        NgxUIRouterUrlTypeFactoryModule.forRoot({
            types: [
                PostType,
            ]
        }),
        UIRouterModule.forRoot(routingConfig),
        NgxsModule.forRoot(states),


        // Application imports
        IconsModule,
        ServicesModule.forRoot(),
        SharedModule.forRoot(),
        AuthScreensModule.forRoot(),
        FrontendScreensModule.forRoot(),
        BackendScreensModule.forRoot(),
        LayoutsModule.forRoot(),
        ComponentsModule.forRoot(),
        ModalsModule.forRoot(),
    ],
    bootstrap: [
        MainComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        fakeBackendProvider,
        loadingScreenProvider,
    ],
    declarations: []
})
export class AppModule {}
