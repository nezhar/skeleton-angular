import { UIRouterModule, Transition } from "@uirouter/angular";
 
import { HomeComponent, LoginComponent, RegisterComponent } from './screens/index'
import { AuthGuard } from './guards/index';
import { UserService } from "./services/index";
import { FrontendLayoutComponent } from "./widgets/frontend-layout/frontend-layout.component";


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
        name: 'login',
        url: '/login',
        component: LoginComponent,
    },
    {
        name: 'register',
        url: '/register',
        component: RegisterComponent,
        //onEnter: authGuard.isLoggedOut,
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
 
// export const RoutingModule = RouterModule.forRoot(appRoutes);
export const RoutingModule = UIRouterModule.forRoot({
    states: appStates,
    useHash: true,
    otherwise: '/',
})