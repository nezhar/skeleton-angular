import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { NgxResourceFactoryModule } from 'ngx-resource-factory';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { ToastrModule } from 'ngx-toastr';
import { NgxAnxFormsModule } from 'ngx-anx-forms';
import { ErrorMessageService } from 'ngx-anx-forms';

import { NgxAnxLoadingScreenModule } from '@app/modules/ngx-anx-loading-screen/ngx-anx-loading-screen.module';

import { routingConfig } from '@app/app.routing';
import { AppMissingTranslationHandler, createTranslatePoHttpLoader } from '@app/services/language/language.helper';
import { MainComponent } from '@app/layouts/main/main.component';
import { SharedModule } from '@app/shared/shared.module';
import { ServicesModule } from '@app/services/services.module';
import { LayoutsModule } from '@app/layouts/layouts.module';
import { ComponentsModule } from '@app/components/components.module';

import { AuthScreensModule } from '@app/screens/auth/auth.module';
import { FrontendScreensModule } from '@app/screens/frontend/frontend.module';
import { BackendScreensModule } from '@app/screens/backend/backend.module';

import { IconsModule } from '@app/app.icons';
import { ModalsModule } from '@app/modals/modals.module';

import { environment } from '@env/environment';
import { states } from '@app/shared/state/app.state';
import { FormErrorMessageService } from '@app/services/form-error-messages/form-error-message.service';


@NgModule({
    imports: [
        // Angular imports
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,

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
        NgxAnxFormsModule.forRoot({
            errorMessageService: {
                provide: ErrorMessageService,
                useClass: FormErrorMessageService,
            }
        }),
        NgxAnxLoadingScreenModule.forRoot(),
        UIRouterModule.forRoot(routingConfig),
        NgxsModule.forRoot(states),
        NgxsStoragePluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot({
            disabled: environment.production
        }),
        ToastrModule.forRoot(),

        // Application imports
        IconsModule,
        ServicesModule,
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
})
export class AppModule {
}
