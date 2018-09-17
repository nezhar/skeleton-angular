import { Injector } from '@angular/core';

import { UrlType } from 'ngx-ui-router-url-type-factory/factory/url-type-factory.service';
import { Post, PostResource } from '@app/services/resource/post.resource';


export class PostType implements UrlType<Post> {
    name = 'Post';
    match = /\d+/;
    bindable = true;

    represent(obj: Post): string {
        return String(obj.id);
    }

    resolve(matched: string, injector: Injector) {
        const
            resource = injector.get(PostResource);

        return resource.get({pk: matched});
    }
}
