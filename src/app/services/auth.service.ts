import { Injectable } from '@angular/core';
import { directory } from '../API/api-directory';
import { HttpRequestService } from './http-request.service';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
import { LoginResponse } from 'app/models/login-response.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

  private user: LoginResponse;
  constructor(
    private http: HttpRequestService,
    private router: Router,
    private notification: NotificationService
  ) { }

  register(form: FormData) {
    return this.http.request(undefined, 'post', directory.register, form);
  }

  login(form: FormData) {
    return this.http.request(undefined, 'post', directory.login, form);
  }

  getToken(): string {
    return this.user ? this.user.token : undefined;
  }

  getUser() {
    return this.user;
  }

  storeUser(user: LoginResponse, type: string) {
    this.notification.notify(type);
    this.user = user;
    this.router.navigate(['dashboard']);
  }

  renewSession() {
    this.router.navigate(['login']);
  }

}
