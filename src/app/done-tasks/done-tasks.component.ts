import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.scss']
})
export class DoneTasksComponent implements OnInit {
  @Input() todos: Todo[];
  constructor() { }

  ngOnInit() {
  }

}
