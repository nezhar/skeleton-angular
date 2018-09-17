import { Ng2StateDeclaration } from '@uirouter/angular';

import { BackendLayoutComponent } from '@app/layouts/backend-layout/backend-layout.component';
import { HomeComponent } from './home/home.component';
import { PostsScreenComponent } from './posts/posts-screen.component';
import { UsersScreenComponent } from './users/users-screen.component';
import { PermissionsScreenComponent } from './permissions/permissions-screen.component';
import { guardAuthenticated } from 'src/app/shared/guards/auth/auth.guard';


const stateBackend: Ng2StateDeclaration = {
    name: 'backend',
    url: '/backend',
    component: BackendLayoutComponent,
    redirectTo: 'backend.home',
    data: {
        guard: guardAuthenticated,
    },
};

const stateBackendHome = {
    name: 'backend.home',
    url: '/home',
    component: HomeComponent,
};

const stateBackendPosts = {
    name: 'backend.tables',
    url: '/tables',
    component: PostsScreenComponent,
};

const stateBackendUsers = {
    name: 'backend.users',
    url: '/users',
    component: UsersScreenComponent,
};

const stateBackendPermissions = {
    name: 'backend.permissions',
    url: '/permissions',
    component: PermissionsScreenComponent,
};

export const backendStates = [
    stateBackend,
    stateBackendHome,
    stateBackendPermissions,
    stateBackendPosts,
    stateBackendUsers,
];
