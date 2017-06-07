import { Injectable } from '@angular/core';
import { generateRequestLink, generateOptions } from '../util';
import { Http } from '@angular/http';
import { DataService } from './data.service';


@Injectable()
export class HttpRequestService {
  constructor(
    private http: Http,
    private data: DataService
  ) { }

  request(method: string, task: string, body?: any) {
    const token = this.data.getToken();
    const url = generateRequestLink(task);
    const options = generateOptions(token, method, body);
    return this.http.request(url, options);
  }
}
