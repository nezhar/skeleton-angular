import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';

import { ServicesModule } from '@app/services/services.module';

import { AlertComponent } from './alert/alert.component';
import { BuildComponent } from './build/build.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { LanguageComponent } from './language/language.component';
import { NavigationComponent } from './navigation/navigation.component';


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
    providers: [/* declare in `forRoot()` */],
})
export class WidgetsModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WidgetsModule,
            providers: []
        };
    }

}
