import {Component, OnInit} from '@angular/core';
import {Post, PostResource} from "../../services/resource/post.resource";
import {ResourceModel} from "ngx-resource-factory/resource/resource-model";


@Component({
    selector: 'app-widgets-screen',
    template: require('./widgets-screen.component.html'),
    styles: [
        require('./widgets-screen.component.scss')
    ]
})
export class WidgetsScreenComponent implements OnInit {
    // Selectize examples
    selectizeItems = [];
    singleSelectizeValue = null;
    multiSelectizeValue = [];

    momentValue = null;

    constructor(public postResource: PostResource) { }

    ngOnInit() {
        console.log('Widgets screen component initialised');

        this.selectizeItems = this.postResource.query(
                function success (result: ResourceModel<ResourceModel<Post>[]>) {
                    console.log(result[0].id);
                    console.log(result.$resolved === false);

                    console.log('PostResource success:');
                    console.log(result);

                    result[0].$update(
                        function success (result) {
                            console.log('PostResource instance update success:');
                            console.log(result);
                        },
                        function error (response) {
                            console.log('PostResource instance update error:');
                            console.log(response);
                        }
                    );
                },
                function error (response) {
                    console.log('PostResource error:');
                    console.log(response);
                }
            );

        console.log('PostResource start:');
        console.log(this.selectizeItems);
    }
}