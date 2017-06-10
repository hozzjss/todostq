import { Component, Input } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { DataService } from '../../services/data.service';
import { Todo } from '../../models/todo.model';
import { Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo;
  constructor(
    private data: DataService
  ) { }

  markDone() {
    // only if the todo is not marked as done
    if (this.todo.done === 0) {
      this.data.markDone(this.todo);
    }
  }

}
