import { Routes } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NotLoggedInGuard } from '../guards/not-logged-in.guard';
import { LoggedInGuard } from '../guards/logged-in.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotLoggedInGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NotLoggedInGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [LoggedInGuard]
    }
];
