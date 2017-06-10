// tslint:disable:curly
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { CreateResponse } from '../../models/create-response.model';
import { DataService } from '../../services/data.service';
import { Response } from '@angular/http';
import { objectToArray, adjustLayout, genRandomId } from '../../util/util';
import { Todo } from '../../models/todo.model';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() updateCreated = new EventEmitter<any[]>();
  @Output() cancel = new EventEmitter<any>();
  add = 'Save';
  loading: boolean;
  constructor(
    private todos: TodosService,
    private data: DataService
  ) { }

  save(form: HTMLFormElement, input: HTMLInputElement, event: Event) {
    // this should wait for the todo to be loaded
    const todoLoading$ = new Subject<Todo>();

    // prevent the form from reloading the page
    event.preventDefault();
    const handleError = (response: Response) => this.data.renewSession();
    const handleResponse = (response: Response) => {
      const data: CreateResponse = response.json();
      // format new todos
      const newTodos: Todo[] = objectToArray(data.tasks);
      // sort it
      const orderedTodos = newTodos.sort((a, b) => a.id - b.id);
      // get the last element that's been added
      const lastAddedTodo = orderedTodos[orderedTodos.length - 1];
      // then push it to the subject that's been waiting for it to load
      todoLoading$.next(lastAddedTodo);
    };

    const pushTodo = () => {
      this.add = 'Keep adding';
      // get Todo title
      const todoTitle = input.value;
      // construct todo being loaded
      const loadingTodo: Todo = { title: todoTitle, id: genRandomId(), loading: true };
      // send it to dashboard with a subject
      // that's waiting for the todo to be loaded
      this.updateCreated.emit([loadingTodo, todoLoading$]);
    };

    const sendTodo = () => {
      pushTodo();
      // then make the request in the background
      this.todos.create(new FormData(form)).subscribe(handleResponse, handleError);
      // clear input for new todo input
      input.value = '';
    };

    if (input.value.length > 0) {
      sendTodo();
    }
  }

  dontCancel(event: Event) {
    event.stopPropagation();
  }

  cancelAdding() {
    this.add = 'Save';
    this.cancel.emit();
  }

  ngOnInit() {
    adjustLayout();
    window.onresize = adjustLayout;
  }
}
