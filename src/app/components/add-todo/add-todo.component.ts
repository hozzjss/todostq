// tslint:disable:curly
import { Component, Output, EventEmitter } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { CreateResponse } from '../../models/create-response.model';
import { DataService } from '../../services/data.service';
import { Response } from '@angular/http';
import { objectToArray } from '../../util/util';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Output() updateCreated = new EventEmitter<Todo[][]>();
  @Output() cancel = new EventEmitter<any>();
  constructor(
    private todos: TodosService,
    private data: DataService
  ) { }
  save(form: HTMLFormElement, input: HTMLInputElement) {

    const handleError = (response: Response) => this.data.renewSession();
    // clear input and push the recieved todos to dashboard
    const pushTodo = (response: Response) => {
      input.value = '';
      const data: CreateResponse = response.json();
      // passing undefined triggers the default parameter and doesn't update the list
      this.updateCreated.emit([undefined, objectToArray(data.tasks)]);
    };

    if (input.value.length > 0)
      this.todos.create(new FormData(form)).subscribe(pushTodo, handleError);
    return false;
  }

  cancelAdding() {
    this.cancel.emit();
  }
}
