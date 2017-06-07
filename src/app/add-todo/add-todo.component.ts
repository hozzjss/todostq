import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { CreateResponse } from '../models/create-response.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() updateCreated = new EventEmitter();
  constructor(
    private todos: TodosService,
    private data: DataService
  ) { }
  save(form: HTMLFormElement, input: HTMLInputElement) {
    // create the todo and notify dashboard of the change
    if (input.value.length > 0) {
      this.todos.create(new FormData(form))
        .subscribe(response => {
          if (response.status !== 200) {
            this.data.renewSession(response.status);
            return false;
          }
          input.value = '';
          const data: CreateResponse = response.json();
          this.updateCreated.emit({ ongoing: data.tasks, done: [] });
        });
    }
  }
  ngOnInit() {
  }

}
