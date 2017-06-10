// tslint:disable:curly
import { Injectable } from '@angular/core';
import { generateRequestLink, generateOptions } from '../util/util';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class HttpRequestService {
  constructor(
    private http: Http
  ) { }

  request(token: string, method: string, task: string, body?: any) {
    const url = generateRequestLink(task);
    const options = generateOptions(token, method, body);
    return this.http.request(url, options);
  }
}
