import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonComponent } from '@app/components/button/button.component';
import { BuildComponent } from '@app/components/build/build.component';
import { ContentComponent } from '@app/components/content/content.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { LanguageComponent } from '@app/components/language/language.component';
import { NavigationComponent } from '@app/components/navigation/navigation.component';
import { TranslateModule } from '@ngx-translate/core';
import { ServicesModule } from '@app/services/services.module';
import { UIRouterModule } from '@uirouter/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
