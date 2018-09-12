import { Ng2StateDeclaration } from '@uirouter/angular';

import { guardAuthenticated } from '@app/shared/guards/auth/auth.guard';
import { HomeComponent } from '@app/screens/frontend/home/home.component';
import { FrontendLayoutComponent } from '@app/layouts/frontend-layout/frontend-layout.component';


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
