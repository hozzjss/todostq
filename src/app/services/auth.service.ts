import { Injectable } from '@angular/core';
import { directory } from '../API/api-directory';
import { HttpRequestService } from './http-request.service';

@Injectable()
export class AuthService {

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
