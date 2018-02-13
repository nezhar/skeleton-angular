import { Routes, RouterModule } from '@angular/router';
 
import { HomeComponent, LoginComponent, RegisterComponent } from './screens/index'
import { AuthGuard } from './guards/index';
 
const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const Routing = RouterModule.forRoot(appRoutes);