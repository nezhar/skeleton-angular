import { Injectable } from '@angular/core';

import { Resource } from 'ngx-resource-factory/resource/resource';
import { ResourceConfiguration } from 'ngx-resource-factory/resource/resource-configuration';
import { User } from './user.resource';
import { ResourceAction } from 'ngx-resource-factory/resource/resource-action';
import { ResourceActionHttpMethod } from 'ngx-resource-factory/resource/resource-action-http-method';
import { ResourceActionMethod } from 'ngx-resource-factory/resource/resource-action-method';


@Injectable()
@ResourceConfiguration({
    name: 'AuthenticationResource',
    url: '/api/authenticate/',
    pkAttr: 'id',
    instanceClass: User,
    stripTrailingSlashes: true,
})
export class AuthenticationResource extends Resource<User> {
    @ResourceAction({
        method: ResourceActionHttpMethod.POST,
        paramDefaults: [],
        isList: false,
    })
    login: ResourceActionMethod<any, {username: string, password: string}, User>;

    @ResourceAction({
        method: ResourceActionHttpMethod.DELETE,
        paramDefaults: [],
        isList: false,
    })
    logout: ResourceActionMethod<any, {token: string}, null>;

    @ResourceAction({
        method: ResourceActionHttpMethod.POST,
        paramDefaults: [],
        isList: false,
        urlSuffix: '../authverify',
        reportProgress: true,
    })
    verify: ResourceActionMethod<any, {token: string}, null>;

    @ResourceAction({
        method: ResourceActionHttpMethod.POST,
        paramDefaults: [],
        isList: false,
        urlSuffix: '../authrefresh/',
        reportProgress: true,
    })
    refresh: ResourceActionMethod<any, { token: string }, null>;
}
