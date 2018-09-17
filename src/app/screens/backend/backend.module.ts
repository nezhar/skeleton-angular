import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIRouterModule } from '@uirouter/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ComponentsModule } from '@app/components/components.module';

import { HomeComponent } from '@app/screens/backend/home/home.component';
import { PostsComponent } from '@app/screens/backend/posts/posts.component';
import { PostsListComponent } from '@app/screens/backend/posts/post-list/posts-list.component';
import { PostDetailComponent } from '@app/screens/backend/posts/post-detail/post-detail.component';
import { UsersComponent } from '@app/screens/backend/users/users.component';
import { PermissionsComponent } from '@app/screens/backend/permissions/permissions.component';


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
        HomeComponent,
        PostsComponent,
        PostsListComponent,
        PostDetailComponent,
        UsersComponent,
        PermissionsComponent,
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
