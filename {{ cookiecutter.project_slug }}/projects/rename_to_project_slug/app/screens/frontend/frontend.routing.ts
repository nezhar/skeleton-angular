import { Ng2StateDeclaration } from '@uirouter/angular';

import { guardAuthenticated } from '@app/shared/guards/auth/auth.guard';
import { FrontendLayoutComponent } from '@app/layouts/frontend-layout/frontend-layout.component';

import { HomeComponent } from './home/home.component';


const stateFrontend: Ng2StateDeclaration = {
    name: 'frontend',
    url: '/frontend',
    component: FrontendLayoutComponent,
    redirectTo: 'frontend.home',
    data: {
        guard: guardAuthenticated,
    },
};

const stateFrontendHome: Ng2StateDeclaration = {
    name: 'frontend.home',
    url: '/home',
    component: HomeComponent,
};

export const frontendStates = [
    stateFrontend,
    stateFrontendHome,
];
