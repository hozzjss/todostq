import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { TodosService } from './services/todos.service';
import { DataService } from './services/data.service';
import { HttpRequestService } from './services/http-request.service';
import { OngoingTasksComponent } from './components/ongoing-tasks/ongoing-tasks.component';
import { DoneTasksComponent } from './components/done-tasks/done-tasks.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoComponent } from './components/todo/todo.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    OngoingTasksComponent,
    DoneTasksComponent,
    DashboardComponent,
    TodoComponent,
    AddTodoComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    TodosService,
    DataService,
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
