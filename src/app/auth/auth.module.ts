import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { LoadingComponent } from '../components/loading/loading.component';

import { authRoutes } from './auth.routes';
import { NotLoggedInGuard } from '../guards/not-logged-in.guard';
import { LoggedInGuard } from '../guards/logged-in.guard';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    LoadingComponent,
  ],
  providers: [
    NotLoggedInGuard
  ]
})
export class AuthModule { }
