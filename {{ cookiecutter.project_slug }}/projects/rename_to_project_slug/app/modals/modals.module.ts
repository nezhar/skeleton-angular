import { ModuleWithProviders, NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { ComponentsModule } from '@app/components/components.module';

import { ModalBaseComponent } from './modal-base/modal-base.component';
import { ModalPostDetailComponent } from './modal-post-detail/modal-post-detail.component';
import { ModalConfirmComponent } from '@app/modals/modal-confirm/modal-confirm';
import { ModalConfirmResourceRemoveComponent } from '@app/modals/modal-confirm/modal-confirm-resource-remove';


@NgModule({
    imports: [
        ComponentsModule,
        TranslateModule,
    ],
    declarations: [
        ModalBaseComponent,
        ModalPostDetailComponent,
        ModalConfirmComponent,
        ModalConfirmResourceRemoveComponent,
    ],
    entryComponents: [
        ModalPostDetailComponent,
        ModalConfirmComponent,
        ModalConfirmResourceRemoveComponent,

    ],
    providers: [ /* declare in `forRoot()` */],
})
export class ModalsModule {

    static forRoot(): ModuleWithProviders<ModalsModule> {
        return {
            ngModule: ModalsModule,
            providers: []
        };
    }

}
