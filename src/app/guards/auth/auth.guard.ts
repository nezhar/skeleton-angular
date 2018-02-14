import { UIRouterModule, Transition } from "@uirouter/angular";
import { UserService } from "../../services/index";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard {
    constructor(private userService: UserService) {}
 
    isLoggedIn(transition: Transition) {
        let state = transition.router.stateService;

        if (!localStorage.getItem('currentUser')) {
            state.go('login');
        }
    }

    isLoggedOut(transition: Transition) {
        let state = transition.router.stateService;

        if (localStorage.getItem('currentUser')) {
            state.go('frontend.home')
        }
    }
}
