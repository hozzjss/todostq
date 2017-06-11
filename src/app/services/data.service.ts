import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { LoginResponse } from '../models/login-response.model';
import { Subject } from 'rxjs/Subject';
import { TodosService } from './todos.service';
import { Todo } from '../models/todo.model';
import 'rxjs/add/operator/map';
import { CreateResponse } from '../models/create-response.model';
import { objectToArray, genRandomId } from '../util/util';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable()
export class DataService {
  ongoingTodos: Todo[] = [];
  doneTodos: Todo[] = [];
  private user: LoginResponse;
  handleError = (response: Response) => {
    this.notificationService.notify('Session expired please relogin.');
    this.authService.renewSession();
  }
  constructor(
    private router: Router,
    private todos: TodosService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) { }

  getTodos(): void {
    this.todos.getTodos()
      .subscribe(response => this.ongoingTodos = response.json());
  }

  create(form: HTMLFormElement): void {
    // get Todo title
    const todoTitle = form.getElementsByTagName('input')[0].value;
    // construct todo being loaded and mark it as being loading
    const loadingTodo: Todo = { title: todoTitle, id: genRandomId(), loading: true };
    this.addToOngoing(loadingTodo);
    const handleResponse = (response: Response) => {
      const data: CreateResponse = response.json();

      // format new todos
      const newTodos: Todo[] = objectToArray(data.tasks);

      // sort it
      const orderedTodos = newTodos.sort((a, b) => a.id - b.id);

      // get the last element that's been added
      const lastAddedTodo = orderedTodos[orderedTodos.length - 1];

      // remove the loading todo and replace it with the recieved one
      this.ongoingTodos = this.ongoingTodos.filter(item => item.id !== loadingTodo.id);
      this.addToOngoing(lastAddedTodo);
    };

    this.todos.create(new FormData(form))
      .subscribe(handleResponse, this.handleError);
  }

  getDone(): void {
    // gets todos marked as done
    this.todos.getDone()
      .subscribe(response => this.doneTodos = response.json(), this.handleError);
  }

  addToDone(todo: Todo): void {
    // move it to done
    this.doneTodos.push(todo);
    // remove this todo from ongoingTodos
    this.ongoingTodos = this.ongoingTodos.filter(item => item.id !== todo.id);
  }

  markDone(todo: Todo): void {
    this.addToDone(todo);
    // send this todo to done todos list
    todo.loading = true;
    // send the request then
    this.todos.markDone(todo.id)
      // after that's done update the todo to be marked as loaded
      // the only error here is session expiration so renew session
      .subscribe(val => {
        todo.loading = false;
        todo.done = 1;
      }, this.handleError);
  }

  addToOngoing(todo: Todo): void {
    this.ongoingTodos.push(todo);
  }

}
