import {Transition, StateService} from "@uirouter/angular";

import {WidgetsScreenComponent} from "./screens/widgets/widgets-screen.component";
import {TablesScreenComponent} from "./screens/tables/tables-screen.component";
import {UsersScreenComponent} from "./screens/users/users-screen.component";
import {PermissionsScreenComponent} from "./screens/permissions/permissions-screen.component";

import {HomeComponent, LoginComponent, RegisterComponent} from './screens'
import {AuthLayoutComponent, FrontendLayoutComponent, BackendLayoutComponent} from "./layouts";
import {AuthGuard} from './shared/guards';
import {AuthenticationService} from "./services";


const appStates = [
    /**
     * Root Route
     */
    {
        name: 'root',
        url: '/',
        resolve: [
            {
                token: 'backend',
                deps: [Transition, AuthGuard],
                resolveFn: (transition, authGuard) => authGuard.isLoggedIn(transition)
            }
        ],
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
        name: 'auth.logout',
        url: '/logout',
        resolve: [
            {
                token: 'logout',
                deps: [StateService, AuthenticationService],
                resolveFn: (stateService, authenticationService) => {
                    authenticationService.logout();
                    stateService.go('auth');
                },
            }
        ],
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

    /**
     * Backend Routes
     */
    {
        name: 'backend',
        url: '/backend',
        component: BackendLayoutComponent,
        redirectTo: 'backend.home',
        resolve: [
            { 
                token: 'backend',
                deps: [Transition, AuthGuard],
                resolveFn: (transition, authGuard) => authGuard.isLoggedIn(transition)
            }
        ],
    },
    {
        name: 'backend.home',
        url: '/home',
        component: HomeComponent,
    },
    {
        name: 'backend.widgets',
        url: '/widgets',
        component: WidgetsScreenComponent,
    },
    {
        name: 'backend.tables',
        url: '/tables',
        component: TablesScreenComponent,
    },
    {
        name: 'backend.users',
        url: '/users',
        component: UsersScreenComponent,
    },
    {
        name: 'backend.permissions',
        url: '/permissions',
        component: PermissionsScreenComponent,
    },
];

export const routingConfig = {
    states: appStates,
    useHash: true,
    otherwise: '/',
};
