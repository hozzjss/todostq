import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-ongoing-tasks',
  templateUrl: './ongoing-tasks.component.html',
  styleUrls: ['./ongoing-tasks.component.scss']
})
export class OngoingTasksComponent {
  @Input() todos: Todo[];
  @Output() updateTodos = new EventEmitter<any[]>();

  handleDone(event: any[]) {
    // pass the passed todo to dashboard so that it adds it to done todos
    this.updateTodos.emit(event);
  }
}
