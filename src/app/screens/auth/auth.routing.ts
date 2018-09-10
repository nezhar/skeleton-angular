import { Ng2StateDeclaration } from '@uirouter/angular';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';
import { stateAuthLogoutConfiguration } from '../../shared/guards/auth/auth.guard';


const stateAuth: Ng2StateDeclaration = {
    name: 'auth',
    url: '/auth',
    component: AuthLayoutComponent,
    redirectTo: 'auth.login',
};

const stateAuthLogin: Ng2StateDeclaration = {
    name: 'auth.login',
    url: '/login',
    component: LoginComponent,
};

const stateAuthRegister: Ng2StateDeclaration = {
    name: 'auth.register',
    url: '/register',
    component: RegisterComponent,
};

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
