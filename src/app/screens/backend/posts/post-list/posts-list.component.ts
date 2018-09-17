import { Component, ElementRef, EventEmitter, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Post, PostResource } from '@app/services/resource/post.resource';
import { ModalPostDetailComponent } from '@app/modals/modal-post-detail/modal-post-detail.component';


@Component({
    templateUrl: './posts-list.component.html',
    styleUrls: [
        './posts-list.component.scss'
    ]
})
export class PostsListComponent implements OnInit {
    items = [];
    tableColumns: TableColumn[] = [];
    languageSubscription: EventEmitter<LangChangeEvent> = null;
    paginationLimit = 10;

    @ViewChild('titleColumn') titleColumn: TemplateRef<ElementRef>;
    @ViewChild('actionsColumn') actionsColumn: TemplateRef<ElementRef>;

    constructor(public postResource: PostResource,
                private translateService: TranslateService,
                private modalService: NgbModal) {
    }

    ngOnInit() {
        console.log('Post list component initialised');

        this.postResource.query({}).$promise
            .then((data) => {
                console.log('PostResource success:');
                console.log(data);

                this.items = data;
            })
            .catch((reason) => {
                console.log('PostResource error:');
                console.log(reason);
            });

        this.tableColumns = this.getTableColumns(); // This is required as the subscriber bellow fires only on the first load
        this.languageSubscription = this.translateService.onLangChange.subscribe(
            () => {
                this.tableColumns = this.getTableColumns();
            }
        );
    }

    getTableColumns(): TableColumn[] {
        return [
            {
                name: this.translateService.instant('ID'),
                prop: 'id',
                resizeable: false,
            },
            {
                name: this.translateService.instant('User ID'),
                prop: 'userId',
                resizeable: false,
            },
            {
                name: this.translateService.instant('Title'),
                prop: 'title',
                resizeable: false,
                cellTemplate: this.titleColumn,
            },
            {
                name: this.translateService.instant('Loaded at'),
                prop: 'loadedAt',
                resizeable: false,
                sortable: false,
            },
            {
                name: this.translateService.instant('Actions'),
                resizeable: false,
                sortable: false,
                cellTemplate: this.actionsColumn,
                cellClass: 'text-right'
            },
        ];
    }

    openPostDetail(post: Post) {
        const modalRef = this.modalService.open(ModalPostDetailComponent, {size: 'lg'});
        modalRef.componentInstance.post = post;

        modalRef.result
            .then((result) => {
                console.log('Modal success: ' + result);
            })
            .catch((reason) => {
                console.log('Modal dismissed: ' + reason);
            });
    }
}
