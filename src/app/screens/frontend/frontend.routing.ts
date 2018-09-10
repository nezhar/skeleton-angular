import { Ng2StateDeclaration } from '@uirouter/angular';

import { HomeComponent } from './home/home.component';
import { FrontendLayoutComponent } from 'src/app/layouts/frontend-layout/frontend-layout.component';
import { stateAuthGuardConfiguration } from 'src/app/shared/guards/auth/auth.guard';


const stateFrontend: Ng2StateDeclaration = {
    name: 'frontend',
    url: '/frontend',
    component: FrontendLayoutComponent,
    redirectTo: 'frontend.home',
    resolve: [
        ...stateAuthGuardConfiguration
    ]
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
