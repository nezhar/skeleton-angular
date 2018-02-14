import { UIRouterModule } from "@uirouter/angular";
 
import { HomeComponent, LoginComponent, RegisterComponent } from './screens/index'
import { AuthGuard } from './guards/index';
import { UserService } from "./services/index";
import { FrontendLayoutComponent } from "./widgets/frontend-layout/frontend-layout.component";


let authGuard = new AuthGuard();

const appStates = [
    {
        name: 'login',
        url: '/login',
        component: LoginComponent,
    },
    {
        name: 'register',
        url: '/register',
        component: RegisterComponent,
        onEnter: authGuard.isLoggedOut,
    },

    {
        name: 'root',
        url: '/',
        redirectTo: 'frontend',
    },

    {
        name: 'frontend',
        url: '/frontend',
        component: FrontendLayoutComponent,
        redirectTo: 'frontend.home',

        onEnter: authGuard.isLoggedIn,
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