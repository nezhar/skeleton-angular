import { ModuleWithProviders, NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { ComponentsModule } from '@app/components/components.module';

import { ModalBaseComponent } from './modal-base/modal-base.component';
import { ModalPostDetailComponent } from './modal-post-detail/modal-post-detail.component';


@NgModule({
    imports: [
        ComponentsModule,
        TranslateModule,
    ],
    declarations: [
        ModalBaseComponent,
        ModalPostDetailComponent
    ],
    entryComponents: [
        ModalPostDetailComponent
    ],
    providers: [ /* declare in `forRoot()` */ ],
})
export class ModalsModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ModalsModule,
            providers: []
        };
    }

}
