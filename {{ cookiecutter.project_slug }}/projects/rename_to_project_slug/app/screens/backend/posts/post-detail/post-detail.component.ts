import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../../../../services/resource/post.resource';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

    @Input() post: Post;

    constructor() {
    }

    ngOnInit() {
    }

}
