import { Injectable } from '@angular/core';

import { Resource } from 'ngx-resource-factory/resource/resource';
import { ResourceConfiguration } from 'ngx-resource-factory/resource/resource-configuration';
import { ResourceInstance } from 'ngx-resource-factory/resource/resource-instance';

import { startOfDay } from 'date-fns';


export class Post extends ResourceInstance {
    userId: number;
    id: number;
    title: string;
    body: string;
    loadedAt: Date;

    /**
     * This is an example that shows how to use the `load` method on the model
     * definition, to process the REST-API response before it is assigned to the
     * model instance.
     *
     * @param {object} data Raw data from the server
     * @returns {ResourceInstance} Processed resource instance
     */
    public load(data: object): ResourceInstance {
        data['loadedAt'] = startOfDay(new Date());

        return super.load(data);
    }

    /**
     * This is an example that shows how to use the `dump` method on the model
     * definition, to process the resource instance data before it is sent to the
     * server.
     *
     * @returns {object} Object sent to the server
     */
    public dump(): object {
        const data = super.dump();

        data['dumpedAt'] = startOfDay(new Date());

        return data;
    }
}

@Injectable({
    providedIn: 'root'
})
@ResourceConfiguration({
    name: 'PostResource',
    url: 'https://jsonplaceholder.typicode.com/posts/:pk/',
    pkAttr: 'id',
    instanceClass: Post,
})
export class PostResource extends Resource<Post> {

}
