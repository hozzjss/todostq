import { Injectable } from '@angular/core';
import { directory } from '../API/api-directory';
import { HttpRequestService } from './http-request.service';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { LoginResponse } from 'app/models/login-response.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private user: LoginResponse;
  constructor(
    private http: HttpRequestService,
    private router: Router,
    private notification: NotificationService
  ) { }

  register(form: FormData): Observable<Response> {
    return this.http.request(undefined, 'post', directory.register, form);
  }

  login(form: FormData): Observable<Response> {
    return this.http.request(undefined, 'post', directory.login, form);
  }

  getToken(): string {
    return this.user ? this.user.token : undefined;
  }

  getUser(): LoginResponse {
    return this.user;
  }

  storeUser(user: LoginResponse, type: string): void {
    this.notification.notify(type);
    this.user = user;
    this.router.navigate(['dashboard']);
  }

  renewSession(): void {
    this.router.navigate(['login']);
  }

}
