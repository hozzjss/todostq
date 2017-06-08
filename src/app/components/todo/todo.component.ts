import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodosService } from '../../services/todos.service';
import { DoneResponse } from '../../models/done-response.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() updateDone = new EventEmitter<{}>();
  constructor(
    private todoService: TodosService,
    private data: DataService
  ) { }

  markDone() {
    if (!this.todo.done) {
      this.todoService.markDone(this.todo.id)
        .subscribe(response => {
          if (response) {
            const data: DoneResponse = response.json();
            this.updateDone.emit({
              ongoing: data.todo,
              done: data.done
            });
          }
        });
    }
  }

  ngOnInit() {
  }

}
