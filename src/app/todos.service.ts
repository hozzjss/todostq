import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ENDPOINT, KEY } from './API';

@Injectable()
export class TodosService {

  constructor(
    private http: Http,
  ) { }
  getTodos(token: string) {
    const headers = new Headers({
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const options = new RequestOptions({ headers });

    return this.http.get(`${ENDPOINT}/task/todo?api_key=${KEY}`, options)
      ;
  }
}
