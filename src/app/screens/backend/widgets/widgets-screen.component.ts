import { Component, OnInit } from '@angular/core';

import { PostResource } from 'src/app/services/resource/post.resource';


@Component({
    selector: 'app-widgets-screen',
    templateUrl: './widgets-screen.component.html',
    styleUrls: [
        './widgets-screen.component.scss'
    ]
})
export class WidgetsScreenComponent implements OnInit {
    items = [];

    constructor(public postResource: PostResource) { }

    ngOnInit() {
        console.log('Widgets screen component initialised');

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
