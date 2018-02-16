import { UIRouterModule, Transition } from "@uirouter/angular";
 
import { HomeComponent, LoginComponent, RegisterComponent } from './screens/index'
import { FrontendLayoutComponent, AuthLayoutComponent } from "./layouts/index";
import { UserService } from "./services/index";
import { AuthGuard } from './guards/index';


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
                resolveFn: (transition, authGurad) => authGurad.isLoggedIn(transition)
            }
        ],
    },
    {
        name: 'frontend.home',
        url: '/home',
        component: HomeComponent,
    },
]

export const RoutingModule = UIRouterModule.forRoot({
    states: appStates,
    //useHash: true,
    otherwise: '/',
})