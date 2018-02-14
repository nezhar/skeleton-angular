import { UserService } from '../../services/index';
import { UIRouterModule, StateService, Transition } from "@uirouter/angular";

export class AuthGuard {
    constructor() {}
 
    isLoggedIn(transition: Transition) {
        let state = transition.router.stateService;

        if (!localStorage.getItem('currentUser')) {
            state.go('login');
        }
    }

    isLoggedOut(transition: Transition) {
        let state = transition.router.stateService;

        if (localStorage.getItem('currentUser')) {
            state.go('home')
        }
    }
}
