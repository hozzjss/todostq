import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { NotificationComponent } from './components/notification/notification.component';

import { NotificationService } from './services/notification.service';
import { AuthService } from './services/auth.service';
import { HttpRequestService } from './services/http-request.service';



@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    NotificationService,
    AuthService,
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
