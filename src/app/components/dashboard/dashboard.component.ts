// tslint:disable:curly
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  addTodos = false;
  ongoingTodos: Todo[];
  doneTodos: Todo[];
  constructor(
    private data: DataService,
    private todos: TodosService
  ) { }

  getTodos() {
    this.todos.getTodos()
      .subscribe(response => {
        this.ongoingTodos = response.json();
        this.getDone();
      });
  }

  getDone() {
    // gets todos marked as done
    this.todos.getDone().subscribe(response => this.doneTodos = response.json());
  }

  toggleAdd() {
    this.addTodos = !this.addTodos;
  }

  updateTodos(done = this.doneTodos, ongoing = this.ongoingTodos) {
    // takes new updates instead of making another request
    this.doneTodos = done;
    this.ongoingTodos = ongoing;
  }

  ngOnInit() {
    // once the component is loaded grab todos
    // if the user is not authenticated log them in else load!
    if (!this.data.getToken())
      this.data.renewSession('Not logged in');
    else
      this.getTodos();
  }

}
