import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { HttpRequestService } from '../services/http-request.service';
import { NotificationService } from '../services/notification.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthService,
    HttpRequestService,
    NotificationService
  ]
})
export class SharedModule { }
