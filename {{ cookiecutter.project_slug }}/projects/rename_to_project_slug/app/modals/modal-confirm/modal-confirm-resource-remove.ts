import { Component, Input } from '@angular/core';

import { ResourceModel } from 'ngx-resource-factory/resource/resource-model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBaseComponent } from '@app/modals/modal-base/modal-base.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-modal-confirm-resource-remove',
    templateUrl: 'modal-confirm.html',
})
export class ModalConfirmResourceRemoveComponent extends ModalBaseComponent {
    @Input() public headerText: string = this.translateService.instant('DELETE.DIALOG.HEAD');
    @Input() public bodyText: string = this.translateService.instant('DELETE.DIALOG.BODY');
    @Input() public btnCancelText: string = this.translateService.instant('Cancel');
    @Input() public btnConfirmText: string = this.translateService.instant('Delete');
    @Input() public instance: ResourceModel<any>;
    @Input() public catchFunction = ((reason) => {
        // Error
        console.log('Instance not deleted!');
        console.log(reason);
        // Todo: Add toaster service alert
        this.activeModal.dismiss();
    });

    btnCancelRole = 'secondary';
    btnConfirmRole = 'danger';

    constructor(protected activeModal: NgbActiveModal,
                private translateService: TranslateService) {
        super(activeModal);
    }

    confirmAction() {
        this.instance.$remove().$promise
            .then(() => {
                this.activeModal.close();
            })
            .catch(this.catchFunction);
    }
}
