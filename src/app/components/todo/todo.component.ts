import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { DataService } from '../../services/data.service';
import { DoneResponse } from '../../models/done-response.model';
import { Todo } from '../../models/todo.model';
import { objectToArray } from '../../util/util';
import { Response } from '@angular/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent  {
  @Input() todo: Todo;
  @Output() updateDone = new EventEmitter<Todo[][]>();
  constructor(
    private todoService: TodosService,
    private data: DataService
  ) { }

  markDone() {
    const handleError = (response: Response) => this.data.renewSession();
    // only if the todo is not marked as done
    if (!this.todo.done) {
      const emitUpdate = (response: Response) => {
        const data: DoneResponse = response.json();
        this.updateDone.emit([objectToArray(data.done), objectToArray(data.todo)]);
      };
      this.todoService.markDone(this.todo.id).subscribe(emitUpdate, handleError);
    }
  }

}
