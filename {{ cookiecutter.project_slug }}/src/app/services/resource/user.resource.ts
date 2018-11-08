import { Injectable } from '@angular/core';

import { Resource } from 'ngx-resource-factory/resource/resource';
import { ResourceConfiguration } from 'ngx-resource-factory/resource/resource-configuration';
import { ResourceInstance } from 'ngx-resource-factory/resource/resource-instance';


export class User extends ResourceInstance {
    id: number;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    token: string;
    superuser: boolean;
}

@Injectable({
    providedIn: 'root'
})
@ResourceConfiguration({
    name: 'UserResource',
    url: '/api/users/:pk/',
    pkAttr: 'id',
    instanceClass: User,
    stripTrailingSlashes: true,
})
export class UserResource extends Resource<User> {

}
