import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Post } from '../../services/resource/post.resource';
import { ModalBaseComponent } from '../modal-base/modal-base.component';


@Component({
    selector: 'app-modal-post-detail',
    templateUrl: './modal-post-detail.component.html',
    styleUrls: ['./modal-post-detail.component.scss']
})
export class ModalPostDetailComponent extends ModalBaseComponent implements OnInit {

    @Input() post: Post;

    constructor(protected activeModal: NgbActiveModal) {
        super(activeModal);
    }

    ngOnInit() {
    }

}
