import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIRouterModule } from '@uirouter/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ComponentsModule } from '@app/components/components.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgxAnxFormsModule } from 'ngx-anx-forms/ngx-anx-forms.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UIRouterModule,
        TranslateModule,
        ComponentsModule,
        NgxAnxFormsModule,
        FontAwesomeModule,
    ],
    exports: [],
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
