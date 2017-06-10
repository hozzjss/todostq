import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { DataService } from '../../services/data.service';
import { Todo } from '../../models/todo.model';
import { Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() updateDone = new EventEmitter<any[]>();
  constructor(
    private todoService: TodosService,
    private data: DataService
  ) { }

  markDone() {
    const handleError = (response: Response) => this.data.renewSession();
    // only if the todo is not marked as done
    if (this.todo.done === 0) {
      const loaded$ = new Subject<boolean>();
      // send this todo to done todos list
      this.todo.loading = true;
      this.updateDone.emit([this.todo, loaded$]);
      // send the request then
      this.todoService.markDone(this.todo.id)
        // after that's done update the todo to be marked as loaded
        // the only error here is session expiration so renew session
        .subscribe(() => loaded$.next(true), handleError);
    }
  }

}
