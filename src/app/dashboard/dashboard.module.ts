import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  OngoingTasksComponent,
  AddTodoComponent,
  DashboardComponent,
  DoneTasksComponent,
  HeaderComponent,
  TodoComponent,
  DataService,
  TodosService,
  LoggedInGuard
} from './index';


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
