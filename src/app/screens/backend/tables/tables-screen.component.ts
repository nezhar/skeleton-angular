import { Component, EventEmitter, OnInit } from '@angular/core';

import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { TableColumn } from '@swimlane/ngx-datatable';

import { PostResource } from '@app/services/resource/post.resource';


@Component({
    templateUrl: './tables-screen.component.html',
    styleUrls: [
        './tables-screen.component.scss'
    ]
})
export class TablesScreenComponent implements OnInit {
    items = [];
    tableColumns: TableColumn[] = [];
    languageSubscription: EventEmitter<LangChangeEvent> = null;
    paginationLimit = 10;

    constructor(public postResource: PostResource,
                private translateService: TranslateService) {
    }

    ngOnInit() {
        console.log('Tables screen component initialised');

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
