import { Component, Input } from '@angular/core';
import { ModalBaseComponent } from '@app/modals/modal-base/modal-base.component';
import { TranslateService } from '@ngx-translate/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-modal-confirm',
    templateUrl: 'modal-confirm.html'
})
export class ModalConfirmComponent extends ModalBaseComponent {
    @Input() public headerText: string = this.translateService.instant('CONFIRM.DIALOG.HEAD');
    @Input() public bodyText: string = this.translateService.instant('CONFIRM.DIALOG.BODY');
    @Input() public btnCancelText: string = this.translateService.instant('Cancel');
    @Input() public btnConfirmText: string = this.translateService.instant('Confirm');

    btnCancelRole = 'secondary';
    btnConfirmRole = 'primary';

    constructor(protected activeModal: NgbActiveModal,
                private translateService: TranslateService) {
        super(activeModal);
    }
}
