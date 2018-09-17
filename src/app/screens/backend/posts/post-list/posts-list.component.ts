import { Component, ElementRef, EventEmitter, OnInit, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Post, PostResource } from '@app/services/resource/post.resource';
import { ModalPostDetailComponent } from '@app/modals/modal-post-detail/modal-post-detail.component';
import { Subscription, combineLatest } from 'rxjs';
import { debounceTime, startWith } from 'rxjs/operators';


@Component({
    templateUrl: './posts-list.component.html',
    styleUrls: [
        './posts-list.component.scss'
    ]
})
export class PostsListComponent implements OnInit, OnDestroy {
    items = [];
    tableColumns: TableColumn[] = [];
    languageSubscription: EventEmitter<LangChangeEvent> = null;
    paginationLimit = 10;

    @ViewChild('titleColumn') titleColumn: TemplateRef<ElementRef>;
    @ViewChild('actionsColumn') actionsColumn: TemplateRef<ElementRef>;

    filterForm: FormGroup;
    filterFormSubscription: Subscription;

    userIds = [
        {'id': 1, 'label': 'User 1'},
        {'id': 2, 'label': 'User 2'},
        {'id': 3, 'label': 'User 3'},
        {'id': 4, 'label': 'User 4'},
        {'id': 5, 'label': 'User 5'},
        {'id': 6, 'label': 'User 6'},
        {'id': 7, 'label': 'User 7'},
        {'id': 8, 'label': 'User 8'},
        {'id': 9, 'label': 'User 9'},
        {'id': 10, 'label': 'User 10'},
    ];

    constructor(public postResource: PostResource,
                private translateService: TranslateService,
                private modalService: NgbModal) {
    }

    ngOnInit() {
        this.filterForm = new FormGroup({
            'userId': new FormControl(null, null, null),
            'search': new FormControl('', null, null),
        });

        this.filterFormSubscription  = combineLatest(
            this.filterForm.get('userId').valueChanges.pipe(startWith(null)),
            this.filterForm.get('search').valueChanges.pipe(debounceTime(500), startWith('')),
        ).subscribe((values) => {
            this.loadPosts({
                userId: values[0],
                search: values[1],
            });
        });

        this.tableColumns = this.getTableColumns(); // This is required as the subscriber bellow fires only on the first load
        this.languageSubscription = this.translateService.onLangChange.subscribe(
            () => {
                this.tableColumns = this.getTableColumns();
            }
        );
    }

    ngOnDestroy() {
        this.languageSubscription.unsubscribe();
        this.filterFormSubscription.unsubscribe();
    }

    loadPosts(filter: {userId: string, search: string}) {
        // This must be removed because the test REST API cannot handle null values
        if (filter.userId === null) {
            delete filter.userId;
        }

        this.postResource.query(filter).$promise
            .then((data) => {
                console.log('PostResource success:');
                console.log(data);

                // The filter is only implemented because the test REST API has no implemented search filter
                this.items = data.filter(post => post.title.startsWith(filter.search));
            })
            .catch((reason) => {
                console.log('PostResource error:');
                console.log(reason);
            });
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
