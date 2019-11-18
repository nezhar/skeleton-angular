import { Component, OnInit } from '@angular/core';
import { User } from '@app/services/resource/user.resource';
import { Select } from '@ngxs/store';

import { Observable } from 'rxjs';
import { AuthState } from '@app/shared/state/auth/auth.state';
import { AuthStateModel } from '@app/shared/state/auth/auth.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from '@app/modals/modal-confirm/modal-confirm';
import { TranslateService } from '@ngx-translate/core';
import { StateService } from '@uirouter/angular';


@Component({
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit {
    currentUser: User;

    @Select(AuthState) auth: Observable<AuthStateModel>;

    constructor(private modalService: NgbModal,
                private translateService: TranslateService,
                private state: StateService) {
    }

    ngOnInit() {
        this.auth.subscribe(data => {
            this.currentUser = data.user;
        });
    }

    logout() {
        const modalRef = this.modalService.open(ModalConfirmComponent, {size: 'lg'});
        modalRef.componentInstance.headerText = this.translateService.instant('LOGOUT.TITLE');
        modalRef.componentInstance.bodyText = this.translateService.instant('LOGOUT.MSG');
        modalRef.componentInstance.btnCancelText = this.translateService.instant('LOGOUT.CANCEL');
        modalRef.componentInstance.btnConfirmText = this.translateService.instant('LOGOUT.CONFIRM');
        modalRef.result.then(() => {
            this.state.go('auth.logout');
        }).catch(() => {
            console.log('logout cancelled');
        });
    }
}
