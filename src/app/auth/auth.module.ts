import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LoadingComponent,
  LoginComponent,
  RegisterComponent,
  NotLoggedInGuard
} from './index';

import { authRoutes } from './auth.routes';


@NgModule({
  imports: [
    CommonModule,
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
