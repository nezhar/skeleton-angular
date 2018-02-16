import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {TranslateModule} from "@ngx-translate/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UIRouterModule} from "@uirouter/angular";

import {ServicesModule} from "app/services/services.module";

import {AlertComponent, BuildComponent, ContentComponent, HeaderComponent, LanguageComponent, NavigationComponent} from "./index"


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        NgbModule,
        ServicesModule,
        UIRouterModule,
    ],
    exports: [
        AlertComponent,
        BuildComponent,
        ContentComponent,
        HeaderComponent,
        LanguageComponent,
        NavigationComponent,
    ],
    declarations: [
        AlertComponent,
        BuildComponent,
        ContentComponent,
        HeaderComponent,
        LanguageComponent,
        NavigationComponent,
    ],
    providers: [ /* declare in `forRoot()` */ ],
})
export class WidgetsModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WidgetsModule,
            providers: []
        };
    }

}