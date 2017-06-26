import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { NotLoggedInGuard } from '../guards/not-logged-in.guard';
import { RegisterComponent } from '../components/register/register.component';


export const authRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
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

]