import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './routing/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TodosService } from './todos.service';
import { DataService } from './data.service';
import { OngoingTasksComponent } from './ongoing-tasks/ongoing-tasks.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    OngoingTasksComponent,
    DoneTasksComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    TodosService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
