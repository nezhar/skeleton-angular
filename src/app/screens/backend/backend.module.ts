import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UIRouterModule} from '@uirouter/angular';
import {TranslateModule} from '@ngx-translate/core';

import {NgSelectizeModule} from "ng-selectize";

import {NgbMomentpickerModule} from "app/modules/ngb-momentpicker/ngb-momentpicker.module";
import {HomeComponent, PermissionsScreenComponent, TablesScreenComponent, UsersScreenComponent, WidgetsScreenComponent} from ".";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgSelectizeModule,
        NgbMomentpickerModule,
        UIRouterModule,
        TranslateModule,
    ],
    exports: [
        PermissionsScreenComponent,
        TablesScreenComponent,
        UsersScreenComponent,
        WidgetsScreenComponent,
        HomeComponent,
    ],
    declarations: [
        PermissionsScreenComponent,
        TablesScreenComponent,
        UsersScreenComponent,
        WidgetsScreenComponent,
        HomeComponent,
    ],
    providers: [ /* declare in `forRoot()` */ ],
})
export class BackendScreensModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BackendScreensModule,
            providers: []
        };
    }

}