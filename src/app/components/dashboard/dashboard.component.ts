// tslint:disable:curly
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo.model';
import { Subject } from 'rxjs/Subject';

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
      .subscribe(response => this.ongoingTodos = response.json());
  }

  getDone() {
    // gets todos marked as done
    this.todos.getDone()
      .subscribe(response => this.doneTodos = response.json());
  }

  toggleAdd() {
    // this should toggle showing add-todo
    this.addTodos = !this.addTodos;
  }

  addToOngoing(todo: Todo, loaded$: Subject<Todo>) {
    this.ongoingTodos.push(todo);
    loaded$.subscribe((todoLoaded$) => {
      // find the todo we pushed and remove it
      // it would have a randomly generated id
      this.ongoingTodos = this.ongoingTodos.filter(item => item.id !== todo.id);
      // push then the received todo to the list
      this.ongoingTodos.push(todoLoaded$);
      console.log(this.ongoingTodos);
    });
  }

  addToDone(todo: Todo, loaded$: Subject<boolean>) {
    this.doneTodos.push(todo);
    loaded$.subscribe(val => {
      todo.loading = false;
      todo.done = 1;
    });
    this.ongoingTodos = this.ongoingTodos.filter(item => item.id !== todo.id);
  }

  updateTodos(done = this.doneTodos, ongoing = this.ongoingTodos) {
    // takes new updates instead of making another request
    this.doneTodos = done;
    this.ongoingTodos = ongoing;
  }

  ngOnInit() {
    // once the component is loaded grab todos
    // if the user is not authenticated log them in else load!
    if (!this.data.getToken()) {
      this.data.renewSession();
    } else {
      this.getTodos();
      this.getDone();
    }
  }

}
