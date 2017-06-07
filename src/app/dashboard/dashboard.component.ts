// tslint:disable:curly
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo.model';
import { Router } from '@angular/router';
import { objectToArray } from '../util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ongoingTodos: Todo[];
  doneTodos: Todo[];

  constructor(
    private data: DataService,
    private todos: TodosService,
    private router: Router
  ) { }

  getTodos() {
    this.todos.getTodos()
      .subscribe(response => {
        if (response.status !== 200) {
          this.data.renewSession(response.status);
          return false;
        }
        const data: Todo[] = response.json();
        this.ongoingTodos = data;
        this.getDone();
      });
  }
  getDone() {
    // gets todos marked as done
    this.todos.getDone()
      .subscribe(response => {
        if (response.status !== 200) {
          this.data.renewSession(response.status);
          return false;
        }
        const data: Todo[] = response.json();
        this.doneTodos = data;
      });
  }
  updateTodos(Todos: { done: Todo[], ongoing: {} }) {
    // re-init arrays and add the newly received updates
    // ongoing todos is an array only if it's empty
    if (Todos.ongoing instanceof Array)
      this.ongoingTodos = [];

    if (Todos.done.length > 0)
      this.doneTodos = Todos.done;

    if (Object.keys(Todos.ongoing).length > 0) {
      this.ongoingTodos = [];
      this.ongoingTodos = objectToArray(Todos.ongoing);
    }
  }
  // once the component is loaded grab todos
  ngOnInit() {
    // if the user is not authenticated log them in else load!
    if (!this.data.getToken())
      this.router.navigate(['login']);
    else
      this.getTodos();
  }

}