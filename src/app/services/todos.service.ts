import { Injectable } from '@angular/core';
import { directory } from '../API/api-directory';
import { HttpRequestService } from './http-request.service';
import { AuthService } from './auth.service';

@Injectable()
export class TodosService {

  constructor(
    private http: HttpRequestService,
    private auth: AuthService
  ) { }

  create(todoTitle: FormData) {
    return this.http.request(this.auth.getToken(), 'post', directory.create, todoTitle);
  }

  getTodos() {
    return this.http.request(this.auth.getToken(), 'get', directory.getTodos);
  }

  getDone() {
    return this.http.request(this.auth.getToken(), 'get', directory.getDone);
  }

  markDone(todoId: number) {
    // an empty object is passed as the body as this put request doesn't send any data
    return this.http.request(this.auth.getToken(), 'put', directory.markDone + todoId, {});
  }
}
