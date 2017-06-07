import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { generateRequestLink } from '../util';
import { directory } from '../api-directory';
import { HttpRequestService } from './http-request.service';

@Injectable()
export class AuthService {
  private headers = new Headers ({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  });
  constructor(
    private http: HttpRequestService
  ) { }

  register(form: FormData) {
    return this.http.request('post', directory.register, form);
  }

  login(form: FormData) {
    return this.http.request('post', directory.login, form);
  }

}
