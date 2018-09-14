import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIRouterModule } from '@uirouter/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PermissionsScreenComponent } from './permissions/permissions-screen.component';
import { TablesScreenComponent } from './tables/tables-screen.component';
import { UsersScreenComponent } from './users/users-screen.component';
import { WidgetsScreenComponent } from './widgets/widgets-screen.component';
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
        PermissionsScreenComponent,
        TablesScreenComponent,
        UsersScreenComponent,
        WidgetsScreenComponent,
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
