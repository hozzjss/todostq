import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { directory } from '../API/api-directory';
import { HttpRequestService } from './http-request.service';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodosService {

  constructor(
    private http: HttpRequestService,
    private auth: AuthService
  ) { }

  create(todoTitle: FormData): Observable<Response> {
    return this.http.request(this.auth.getToken(), 'post', directory.create, todoTitle);
  }

  getTodos(): Observable<Response> {
    return this.http.request(this.auth.getToken(), 'get', directory.getTodos);
  }

  getDone(): Observable<Response> {
    return this.http.request(this.auth.getToken(), 'get', directory.getDone);
  }

  markDone(todoId: number): Observable<Response> {
    // an empty object is passed as the body as this put request doesn't send any data
    return this.http.request(this.auth.getToken(), 'put', directory.markDone + todoId, {});
  }
}
