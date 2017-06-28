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
        path: 'auth',
        loadChildren: '../auth/auth.module#AuthModule'
    },
    {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule'
    }
];
