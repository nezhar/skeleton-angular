import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIRouterModule } from '@uirouter/angular';
import { TranslateModule } from '@ngx-translate/core';
import { NgxAnxLoadingScreenModule } from '../modules/ngx-anx-loading-screen/ngx-anx-loading-screen.module';

import { MainComponent } from './main/main.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BackendLayoutComponent } from './backend-layout/backend-layout.component';
import { FrontendLayoutComponent } from './frontend-layout/frontend-layout.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ComponentsModule,
        UIRouterModule,
        NgxAnxLoadingScreenModule,
    ],
    exports: [
        MainComponent,
        AuthLayoutComponent,
        FrontendLayoutComponent,
        BackendLayoutComponent,
    ],
    declarations: [
        MainComponent,
        AuthLayoutComponent,
        FrontendLayoutComponent,
        BackendLayoutComponent,
    ],
    providers: [ /* declare in `forRoot()` */ ],
})
export class LayoutsModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LayoutsModule,
            providers: []
        };
    }

}
