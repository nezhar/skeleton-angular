import { Ng2StateDeclaration } from '@uirouter/angular';

import { guardAuthenticated } from '@app/shared/guards/auth/auth.guard';
import { BackendLayoutComponent } from '@app/layouts/backend-layout/backend-layout.component';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { UsersComponent } from './users/users.component';


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
    name: 'backend.posts',
    url: '/posts',
    component: PostsComponent,
    redirectTo: 'backend.posts.list',
};

const stateBackendPostsList = {
    name: 'backend.posts.list',
    url: '',
    component: PostListComponent,
};

const stateBackendPostsDetail = {
    name: 'backend.posts.detail',
    url: '/{post:Post}',
    component: PostDetailComponent,
};

const stateBackendUsers = {
    name: 'backend.users',
    url: '/users',
    component: UsersComponent,
};


export const backendStates = [
    stateBackend,
    stateBackendHome,
    stateBackendPosts,
    stateBackendPostsList,
    stateBackendPostsDetail,
    stateBackendUsers,
];
