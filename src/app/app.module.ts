import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { TodosService } from './services/todos.service';
import { DataService } from './services/data.service';
import { HttpRequestService } from './services/http-request.service';
import { OngoingTasksComponent } from './ongoing-tasks/ongoing-tasks.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    OngoingTasksComponent,
    DoneTasksComponent,
    DashboardComponent,
    TodoComponent,
    AddTodoComponent
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
    DataService,
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
