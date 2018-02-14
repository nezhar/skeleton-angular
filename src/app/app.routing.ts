import { UIRouterModule } from "@uirouter/angular";
 
import { HomeComponent, LoginComponent, RegisterComponent } from './screens/index'
import { AuthGuard } from './guards/index';
import { UserService } from "./services/index";


let authGuard = new AuthGuard();
const appStates = [
    {
        name: 'home',
        url: '/',
        component: HomeComponent,
        onEnter: authGuard.isLoggedIn
    },
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
]
 
// export const RoutingModule = RouterModule.forRoot(appRoutes);
export const RoutingModule = UIRouterModule.forRoot({
    states: appStates,
    useHash: true,
    otherwise: '/',
})