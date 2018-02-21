import {Ng2StateDeclaration} from "@uirouter/angular";

import {LoginComponent, RegisterComponent} from '.'
import {AuthLayoutComponent} from "app/layouts";
import {stateAuthLogoutConfiguration} from 'app/shared/guards';


/**
 * @type Ng2StateDeclaration {{name: string; url: string; component: any; redirectTo: string}}
 */
const stateAuth: Ng2StateDeclaration = {
    name: 'auth',
    url: '/auth',
    component: AuthLayoutComponent,
    redirectTo: 'auth.login',
};

/**
 * @type Ng2StateDeclaration {{name: string; url: string; component: any}}
 */
const stateAuthLogin: Ng2StateDeclaration = {
    name: 'auth.login',
    url: '/login',
    component: LoginComponent,
};

/**
 * Ng2StateDeclaration @type {{name: string; url: string; component: any}}
 */
const stateAuthRegister: Ng2StateDeclaration = {
    name: 'auth.register',
    url: '/register',
    component: RegisterComponent,
};

/**
 * @type Ng2StateDeclaration {{name: string; url: string; resolve: any[]}}
 */
const stateAuthLogout: Ng2StateDeclaration = {
    name: 'auth.logout',
    url: '/logout',
    resolve: [
        ...stateAuthLogoutConfiguration,
    ],
};

export const authStates = [
    stateAuth,
    stateAuthLogin,
    stateAuthLogout,
    stateAuthRegister,
];
