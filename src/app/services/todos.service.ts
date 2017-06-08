import { Injectable } from '@angular/core';
import { directory } from '../API/api-directory';
import { HttpRequestService } from './http-request.service';

@Injectable()
export class TodosService {

  constructor(
    private http: HttpRequestService
  ) { }

  create(todoTitle: FormData) {
    return this.http.request('post', directory.create, todoTitle);
  }

  getTodos() {
    return this.http.request('get', directory.getTodos);
  }

  getDone() {
    return this.http.request('get', directory.getDone);
  }

  markDone(todoId: number) {
    // an empty object is passed as the body as this put request doesn't send any data
    return this.http.request('put', directory.markDone + todoId, {});
  }
}
