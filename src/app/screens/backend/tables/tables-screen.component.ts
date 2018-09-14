import { Component, OnInit } from '@angular/core';

import { PostResource } from '@app/services/resource/post.resource';


@Component({
    templateUrl: './tables-screen.component.html',
    styleUrls: [
        './tables-screen.component.scss'
    ]
})
export class TablesScreenComponent implements OnInit {
    items = [];

    constructor(public postResource: PostResource) { }

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
    }
}
