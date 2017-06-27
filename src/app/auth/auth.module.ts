import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  LoadingComponent,
  LoginComponent,
  RegisterComponent,
  NotLoggedInGuard
} from './index';

import { authRoutes } from './auth.routes';
import { ParseErrorPipe } from '../pipes/parse-error.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    LoadingComponent,
    ParseErrorPipe
  ],
  providers: [
    NotLoggedInGuard
  ]
})
export class AuthModule { }
