import {Ng2StateDeclaration} from "@uirouter/angular";

import {HomeComponent, PermissionsScreenComponent, TablesScreenComponent, UsersScreenComponent, WidgetsScreenComponent} from ".";
import {BackendLayoutComponent} from "app/layouts";
import {stateAuthGuardConfiguration} from "app/shared/guards";


/**
 * @type Ng2StateDeclaration {{name: string; url: string; component: any; redirectTo: string}}
 */
const stateBackend: Ng2StateDeclaration = {
    name: 'backend',
    url: '/backend',
    component: BackendLayoutComponent,
    resolve: [
        ...stateAuthGuardConfiguration
    ],
    redirectTo: 'backend.home',
};

/**
 * @type Ng2StateDeclaration {{name: string; url: string; component: any}}
 */
const stateBackendHome = {
    name: 'backend.home',
    url: '/home',
    component: HomeComponent,
};

/**
 * @type Ng2StateDeclaration {{name: string; url: string; component: any}}
 */
const stateBackendWidgets = {
    name: 'backend.widgets',
    url: '/widgets',
    component: WidgetsScreenComponent,
};

/**
 * @type Ng2StateDeclaration {{name: string; url: string; component: any}}
 */
const stateBackendTables = {
    name: 'backend.tables',
    url: '/tables',
    component: TablesScreenComponent,
};

/**
 * @type Ng2StateDeclaration {{name: string; url: string; component: any}}
 */
const stateBackendUsers = {
    name: 'backend.users',
    url: '/users',
    component: UsersScreenComponent,
};

/**
 * @type Ng2StateDeclaration {{name: string; url: string; component: any}}
 */
const stateBackendPermissions = {
    name: 'backend.permissions',
    url: '/permissions',
    component: PermissionsScreenComponent,
};

export const backendStates = [
    stateBackend,
    stateBackendHome,
    stateBackendWidgets,
    stateBackendPermissions,
    stateBackendTables,
    stateBackendUsers
];
