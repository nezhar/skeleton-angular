import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-base',
    templateUrl: './modal-base.component.html',
    styleUrls: [
        './modal-base.component.scss'
    ]
})
export class ModalBaseComponent {

    constructor(protected activeModal: NgbActiveModal) {
    }

    closeAction() {
        this.activeModal.dismiss('Modal closed');
    }

    cancelAction() {
        this.activeModal.dismiss('Modal canceled');
    }

    confirmAction() {
        this.activeModal.close('Modal confirmed');
    }
}
