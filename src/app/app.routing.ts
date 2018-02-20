import {Ng2StateDeclaration} from "@uirouter/angular";

import {stateAuthGuardConfiguration} from './shared/guards';

import {authStates} from './screens/auth/auth.routing'
import {backendStates} from './screens/backend/backend.routing'
import {frontendStates} from "./screens/frontend/frontend.routing";


/**
 * @type Ng2StateDeclaration {{name: string; url: string; resolve: any[]}}
 */
const stateHome: Ng2StateDeclaration = {
    name: 'root',
    url: '/',
    resolve: [
        ...stateAuthGuardConfiguration
    ],
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
};
