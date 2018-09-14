import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIRouterModule } from '@uirouter/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PermissionsScreenComponent } from './permissions/permissions-screen.component';
import { TablesScreenComponent } from './tables/tables-screen.component';
import { UsersScreenComponent } from './users/users-screen.component';
import { HomeComponent } from './home/home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ComponentsModule } from '@app/components/components.module';


@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        UIRouterModule,
        TranslateModule,
        FontAwesomeModule,
        NgxDatatableModule,
        NgbModule,
    ],
    exports: [],
    declarations: [
        PermissionsScreenComponent,
        TablesScreenComponent,
        UsersScreenComponent,
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
