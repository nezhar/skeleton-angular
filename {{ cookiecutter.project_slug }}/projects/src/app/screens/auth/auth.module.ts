import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIRouterModule } from '@uirouter/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ComponentsModule } from '../../components/components.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgxAnxFormsModule } from '../../modules/ngx-anx-forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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
