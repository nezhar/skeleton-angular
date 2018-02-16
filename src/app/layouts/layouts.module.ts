import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import { UIRouterModule } from '@uirouter/angular';
import { TranslateModule } from '@ngx-translate/core';

import {AuthLayoutComponent, FrontendLayoutComponent, MainComponent} from "./index";
import {WidgetsModule} from 'app/widgets/widgets.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        WidgetsModule,
        UIRouterModule,
    ],
    exports: [
        AuthLayoutComponent,
        FrontendLayoutComponent,
        MainComponent,
    ],
    declarations: [
        AuthLayoutComponent,
        FrontendLayoutComponent,
        MainComponent,
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