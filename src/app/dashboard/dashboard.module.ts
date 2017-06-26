import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OngoingTasksComponent } from '../components/ongoing-tasks/ongoing-tasks.component';
import { DoneTasksComponent } from '../components/done-tasks/done-tasks.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { TodoComponent } from '../components/todo/todo.component';
import { HeaderComponent } from '../components/header/header.component';
import { AddTodoComponent } from '../components/add-todo/add-todo.component';

import { TodosService } from '../services/todos.service';
import { DataService } from '../services/data.service';


import { LoggedInGuard } from '../guards/logged-in.guard';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent, canActivate: [LoggedInGuard] }])
  ],
  declarations: [
    OngoingTasksComponent,
    DoneTasksComponent,
    DashboardComponent,
    TodoComponent,
    HeaderComponent,
    AddTodoComponent
  ],
  providers: [
    LoggedInGuard,
    DataService,
    TodosService
  ]
})
export class DashboardModule { }
