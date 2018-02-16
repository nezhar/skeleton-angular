import { Transition } from "@uirouter/angular";

import {WidgetsScreenComponent} from "./screens/widgets/widgets-screen.component";
import {TablesScreenComponent} from "./screens/tables/tables-screen.component";
import {UsersScreenComponent} from "./screens/users/users-screen.component";
import {PermissionsScreenComponent} from "./screens/permissions/permissions-screen.component";

import {HomeComponent, LoginComponent, RegisterComponent} from './screens'
import {FrontendLayoutComponent, AuthLayoutComponent} from "./layouts";
import {AuthGuard} from './guards';

const appStates = [
    /**
     * Root Route
     */
    {
        name: 'root',
        url: '/',
        redirectTo: 'frontend',
    },

    /**
     * Auth Routes
     */
    {
        name: 'auth',
        url: '/auth',
        component: AuthLayoutComponent,
        redirectTo: 'auth.login',
    },
    {
        name: 'auth.login',
        url: '/login',
        component: LoginComponent,
    },
    {
        name: 'auth.register',
        url: '/register',
        component: RegisterComponent,
    },

    /**
     * Frontend Routes
     */
    {
        name: 'frontend',
        url: '/frontend',
        component: FrontendLayoutComponent,
        redirectTo: 'frontend.home',
        resolve: [
            { 
                token: 'frontend', 
                deps: [Transition, AuthGuard],
                resolveFn: (transition, authGuard) => authGuard.isLoggedIn(transition)
            }
        ],
    },
    {
        name: 'frontend.home',
        url: '/home',
        component: HomeComponent,
    },
    {
        name: 'frontend.widgets',
        url: '/widgets',
        component: WidgetsScreenComponent,
    },
    {
        name: 'frontend.tables',
        url: '/tables',
        component: TablesScreenComponent,
    },
    {
        name: 'frontend.users',
        url: '/users',
        component: UsersScreenComponent,
    },
    {
        name: 'frontend.permissions',
        url: '/permissions',
        component: PermissionsScreenComponent,
    },
];

export const routingConfig = {
    states: appStates,
    useHash: true,
    otherwise: '/',
};
