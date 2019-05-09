import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { UIRouterModule } from '@uirouter/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ServicesModule } from '@app/services/services.module';
import { ButtonComponent } from './button/button.component';
import { BuildComponent } from './build/build.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { LanguageComponent } from './language/language.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        TranslateModule,
        ServicesModule,
        UIRouterModule,
        FontAwesomeModule,
    ],
    exports: [
        ButtonComponent,
        BuildComponent,
        ContentComponent,
        HeaderComponent,
        LanguageComponent,
        NavigationComponent,
    ],
    declarations: [
        ButtonComponent,
        BuildComponent,
        ContentComponent,
        HeaderComponent,
        LanguageComponent,
        NavigationComponent,
    ],
    providers: [ /* declare in `forRoot()` */ ],
})
export class ComponentsModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ComponentsModule,
            providers: []
        };
    }

}
