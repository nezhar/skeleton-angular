import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {NgSelectizeModule} from "ng-selectize";

import {NgbMomentpickerModule} from "app/modules/ngb-momentpicker/ngb-momentpicker.module";

import {PermissionsScreenComponent} from "./permissions/permissions-screen.component";
import {TablesScreenComponent} from "./tables/tables-screen.component";
import {UsersScreenComponent} from "./users/users-screen.component";
import {WidgetsScreenComponent} from "./widgets/widgets-screen.component";

import {LoginComponent, RegisterComponent, HomeComponent} from "./index";
import {UIRouterModule} from '@uirouter/angular';
import {TranslateModule} from '@ngx-translate/core';


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
        LoginComponent,
        RegisterComponent,
        HomeComponent,
    ],
    declarations: [
        PermissionsScreenComponent,
        TablesScreenComponent,
        UsersScreenComponent,
        WidgetsScreenComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
    ],
    providers: [ /* declare in `forRoot()` */ ],
})
export class ScreensModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ScreensModule,
            providers: []
        };
    }

}