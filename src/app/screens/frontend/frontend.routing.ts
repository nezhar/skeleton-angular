import {Ng2StateDeclaration} from "@uirouter/angular";

import {FrontendLayoutComponent} from "app/layouts";
import {stateAuthGuardConfiguration} from 'app/shared/guards';

import {HomeComponent} from "."


/**
 * @type Ng2StateDeclaration {{name: string; url: string; component: FrontendLayoutComponent; redirectTo: string; resolve: any[]}}
 */
const stateFrontend: Ng2StateDeclaration = {
    name: 'frontend',
    url: '/frontend',
    component: FrontendLayoutComponent,
    redirectTo: 'frontend.home',
    resolve: [
        ...stateAuthGuardConfiguration
    ]
};

/**
 * @type Ng2StateDeclaration {{name: string; url: string; component: any}}
 */
const stateFrontendHome: Ng2StateDeclaration = {
    name: 'frontend.home',
    url: '/home',
    component: HomeComponent,
};

export const frontendStates = [
    stateFrontend,
    stateFrontendHome,
];
