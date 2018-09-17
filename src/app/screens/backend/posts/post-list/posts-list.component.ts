import { Component, ElementRef, EventEmitter, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { TableColumn } from '@swimlane/ngx-datatable';

import { PostResource } from '@app/services/resource/post.resource';


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

    constructor(public postResource: PostResource,
                private translateService: TranslateService) {
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
        ];
    }
}
