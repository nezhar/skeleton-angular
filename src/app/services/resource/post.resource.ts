import {Injectable} from "@angular/core";

import {Resource} from "ngx-resource-factory/resource/resource";
import {ResourceConfiguration} from "ngx-resource-factory/resource/resource-configuration";
import {ResourceInstance} from "ngx-resource-factory/resource/resource-instance";


export class Post extends ResourceInstance {
    userId: number;
    id: number;
    title: string;
    body: string;
}

@Injectable()
@ResourceConfiguration({
    name: 'PostResource',
    url: 'https://jsonplaceholder.typicode.com/posts/:pk/',
    pkAttr: 'id',
    instanceClass: Post,
})
export class PostResource extends Resource<Post> {

}
