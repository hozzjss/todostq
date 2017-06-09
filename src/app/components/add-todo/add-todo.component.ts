// tslint:disable:curly
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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
export class AddTodoComponent implements OnInit {
  @Output() updateCreated = new EventEmitter<Todo[][]>();
  @Output() cancel = new EventEmitter<any>();
  add = 'Save';
  loading: boolean;
  constructor(
    private todos: TodosService,
    private data: DataService
  ) {
  }
  save(form: HTMLFormElement, input: HTMLInputElement, event: Event) {
    event.preventDefault();
    const handleError = (response: Response) => this.data.renewSession();
    // clear input and push the recieved todos to dashboard
    const pushTodo = (response: Response) => {
      this.loading = false;
      input.value = '';
      const data: CreateResponse = response.json();
      // passing undefined triggers the default parameter and doesn't update the list
      this.updateCreated.emit([undefined, objectToArray(data.tasks)]);
      this.add = 'Keep adding';
    };

    if (input.value.length > 0) {
      this.loading = true;
      this.todos.create(new FormData(form)).subscribe(pushTodo, handleError);
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
    const adjustLayout = () => {
      const bodyHeight = document.getElementsByTagName('body')[0].clientHeight;
      const dashboardHeight = document.getElementsByClassName('dashboard')[0].clientHeight;
      const headerHeight = document.getElementsByTagName('header')[0].clientHeight;
      const totalHeight = dashboardHeight + headerHeight + 'px';
      const addTodoEl = document.getElementById('add-todo');
      const formEl = document.getElementById('add-todo-form');
      addTodoEl.style.height = totalHeight;
      formEl.style.top = (window.innerHeight / 2) - (formEl.clientHeight / 2) + 'px';
    };
    adjustLayout();
    window.onresize = adjustLayout;
  }
}
