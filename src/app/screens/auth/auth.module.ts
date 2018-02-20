import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {UIRouterModule} from '@uirouter/angular';
import {TranslateModule} from '@ngx-translate/core';

import {LoginComponent, RegisterComponent} from ".";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UIRouterModule,
        TranslateModule,
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
    ],
    providers: [ /* declare in `forRoot()` */ ],
})
export class AuthScreensModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthScreensModule,
            providers: []
        };
    }

}