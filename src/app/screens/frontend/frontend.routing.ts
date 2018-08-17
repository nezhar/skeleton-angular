import { Ng2StateDeclaration } from "@uirouter/angular";

import { FrontendLayoutComponent } from "../../layouts/frontend-layout/frontend-layout.component";
import { stateAuthGuardConfiguration } from "../../shared/guards";
import { HomeComponent } from "./home/home.component";


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
