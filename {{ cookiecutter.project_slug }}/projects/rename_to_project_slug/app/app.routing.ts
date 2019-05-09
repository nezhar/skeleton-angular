import { Injector } from '@angular/core';

import { Ng2StateDeclaration, StatesModule, Transition, UIRouter } from '@uirouter/angular';

import { configure } from 'ngx-ui-router-url-type-factory/factory/url-type-factory';

import { authStates } from '@app/screens/auth/auth.routing';
import { backendStates } from '@app/screens/backend/backend.routing';
import { frontendStates } from '@app/screens/frontend/frontend.routing';
import { AuthenticationGuard } from '@app/shared/guards/auth/auth.guard';


/**
 * @type Ng2StateDeclaration {{name: string; url: string; resolve: any[]}}
 */
const stateHome: Ng2StateDeclaration = {
    name: 'root',
    url: '/',
    redirectTo: 'frontend',
};

const appStates = [
    stateHome,
    ...authStates,
    ...backendStates,
    ...frontendStates,
];

export const routingConfig = {
    states: appStates,
    useHash: true,
    otherwise: '/',
    config: configureRouter,
};


export function configureRouter(router: UIRouter, injector: Injector, module: StatesModule) {

    configure(router, injector, module);

    router.transitionService.onBefore({
        to: (state: any) => {
            return state && state.data && !!state.data.guard;
        }
    }, (transition: Transition) => {
        const
            authenticationGuard = injector.get(AuthenticationGuard),
            guardFunction = transition.to().data.guard;

        return guardFunction(transition, authenticationGuard).catch((er) => {
            console.error(er);
        });
    });
}
