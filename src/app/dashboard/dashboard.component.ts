import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TodosService } from '../todos.service';
import { Todo } from '../models/todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  todosList: Todo[];

  constructor(
    private data: DataService,
    private todos: TodosService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.data.getToken()) {
      this.router.navigate(['login']);
    }
    this.todos.getTodos(this.data.getToken())
      .subscribe(response => {
        this.todosList = response.json();
      })
      ;
  }

}
