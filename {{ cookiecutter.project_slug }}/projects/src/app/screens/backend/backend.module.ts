import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIRouterModule } from '@uirouter/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgxAnxFormsModule } from '@app/modules/ngx-anx-forms';
import { ComponentsModule } from '@app/components/components.module';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { UsersComponent } from './users/users.component';


@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        UIRouterModule,
        TranslateModule,
        FontAwesomeModule,
        NgxDatatableModule,
        NgbModule,
        NgxAnxFormsModule,
    ],
    exports: [],
    declarations: [
        HomeComponent,
        PostsComponent,
        PostListComponent,
        PostDetailComponent,
        UsersComponent,
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
