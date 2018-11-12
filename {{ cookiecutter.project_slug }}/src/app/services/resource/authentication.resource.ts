import { Injectable } from '@angular/core';

import { Resource } from 'ngx-resource-factory/resource/resource';
import { ResourceConfiguration } from 'ngx-resource-factory/resource/resource-configuration';
import { ResourceInstance } from 'ngx-resource-factory/resource/resource-instance';
import { User } from './user.resource';
import { ResourceAction } from 'ngx-resource-factory/resource/resource-action';
import { ResourceActionHttpMethod } from 'ngx-resource-factory/resource/resource-action-http-method';
import { ResourceActionMethod } from 'ngx-resource-factory/resource/resource-action-method';

export class AuthenticationUserToken extends ResourceInstance {
    token: string;
    user: User;
}

@Injectable()
@ResourceConfiguration({
    name: 'AuthenticationResource',
    url: '/api/authenticate/',
    pkAttr: 'id',
    instanceClass: AuthenticationUserToken,
    stripTrailingSlashes: true,
})
export class AuthenticationResource extends Resource<AuthenticationUserToken> {
    @ResourceAction({
        method: ResourceActionHttpMethod.POST,
        paramDefaults: [],
        isList: false,
    })
    login: ResourceActionMethod<any, {username: string, password: string}, AuthenticationUserToken>;

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
    verify: ResourceActionMethod<any, {token: string}, AuthenticationUserToken>;

    @ResourceAction({
        method: ResourceActionHttpMethod.POST,
        paramDefaults: [],
        isList: false,
        urlSuffix: '../authrefresh/',
        reportProgress: true,
    })
    refresh: ResourceActionMethod<any, { token: string }, AuthenticationUserToken>;
}
