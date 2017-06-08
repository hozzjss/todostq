import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-ongoing-tasks',
  templateUrl: './ongoing-tasks.component.html',
  styleUrls: ['./ongoing-tasks.component.scss']
})
export class OngoingTasksComponent {
  @Input() todos: Todo[];
  @Output() updateTodos = new EventEmitter<Todo[][]>();

  handleDone(event) {
    this.updateTodos.emit(event);
  }
}
