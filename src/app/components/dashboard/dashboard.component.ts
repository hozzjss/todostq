// tslint:disable:curly
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Todo } from '../../models/todo.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // this should be the switch that shows and hides add-todo interface
  addTodos = false;
  ongoingTodos: Todo[];
  doneTodos: Todo[];
  constructor(
    public data: DataService,
    private auth: AuthService
  ) { }

  getTodos() {
    this.data.getTodos();
  }

  getDone() {
    // gets todos marked as done
    this.data.getDone();
  }

  toggleAdd() {
    // this should toggle showing add-todo
    this.addTodos = !this.addTodos;
  }

  ngOnInit() {
    // once the component is loaded grab todos
    // if the user is not authenticated log them in else load!
    if (!this.auth.getToken()) {
      this.auth.renewSession();
    } else {
      this.getTodos();
      this.getDone();
    }
  }

}
