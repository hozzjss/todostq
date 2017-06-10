// tslint:disable:curly
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { adjustLayout } from '../../util/util';
import { Todo } from '../../models/todo.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() cancel = new EventEmitter<any>();
  add = 'Save';
  loading: boolean;
  constructor(
    private data: DataService,
  ) { }

  save(form: HTMLFormElement, input: HTMLInputElement, event: Event): void {
    // prevent the form from reloading the page
    event.preventDefault();

    if (input.value.length > 0) {
      this.data.create(form);
      // clear input for new todo input
      input.value = '';
      this.add = 'Add more';
    }
  }

  dontCancel(event: Event): void {
    event.stopPropagation();
  }

  cancelAdding(): void {
    this.add = 'Save';
    window.onresize = undefined;
    this.cancel.emit();
  }

  ngOnInit(): void {
    adjustLayout();
    window.onresize = adjustLayout;
  }
}
