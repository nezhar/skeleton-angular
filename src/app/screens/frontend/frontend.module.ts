import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIRouterModule } from '@uirouter/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home/home.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UIRouterModule,
        TranslateModule,
        FontAwesomeModule,
    ],
    exports: [],
    declarations: [
        HomeComponent,
    ],
    providers: [ /* declare in `forRoot()` */ ],
})
export class FrontendScreensModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FrontendScreensModule,
            providers: []
        };
    }

}
