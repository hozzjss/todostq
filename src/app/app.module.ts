import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { OngoingTasksComponent } from './components/ongoing-tasks/ongoing-tasks.component';
import { DoneTasksComponent } from './components/done-tasks/done-tasks.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoComponent } from './components/todo/todo.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { NotificationComponent } from './components/notification/notification.component';

import { TodosService } from './services/todos.service';
import { DataService } from './services/data.service';
import { NotificationService } from './services/notification.service';
import { AuthService } from './services/auth.service';
import { HttpRequestService } from './services/http-request.service';



@NgModule({
  declarations: [
    AppComponent,
    OngoingTasksComponent,
    DoneTasksComponent,
    DashboardComponent,
    TodoComponent,
    AddTodoComponent,
    HeaderComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    TodosService,
    DataService,
    NotificationService,
    AuthService,
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
