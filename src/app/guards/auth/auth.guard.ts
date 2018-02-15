import { UIRouterModule, Transition } from "@uirouter/angular";
import { AuthenticationService, AlertService } from "../../services/index";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard {
    constructor(
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
    ) {}
 
    isLoggedIn(transition: Transition) {
        var state = transition.router.stateService;

        if (!localStorage.getItem('currentUser')) {
            state.go('login');
        } else {
            let user = JSON.parse(localStorage.getItem('currentUser'));
            
            this.authenticationService.verify_token(user.token)
                .subscribe(
                data => {
                    // Valid token
                },
                error => {
                    this.alertService.error(error);
                    state.go('login');
                }
            );
        }
    }

    isLoggedOut(transition: Transition) {
        let state = transition.router.stateService;

        if (localStorage.getItem('currentUser')) {
            state.go('frontend.home')
        }
    }
}
