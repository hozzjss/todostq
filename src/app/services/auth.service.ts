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
  stayLoggedIn: boolean;
  constructor(
    private http: HttpRequestService,
    private router: Router,
    private notification: NotificationService
  ) { }

  register(form: FormData, stayLoggedIn: boolean): Observable<Response> {
    this.stayLoggedIn = stayLoggedIn;
    return this.http.request(undefined, 'post', directory.register, form);
  }

  login(form: FormData, stayLoggedIn: boolean): Observable<Response> {
    this.stayLoggedIn = stayLoggedIn;
    return this.http.request(undefined, 'post', directory.login, form);
  }

  logout() {
    localStorage.removeItem('user');
    this.user = undefined;
    this.router.navigate(['login']);
    this.notification.notify('You\'ve been successfully logged out!');
  }

  getToken(): string {
    return this.user ? this.user.token : undefined;
  }

  getUser(): LoginResponse {
    if (!!localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return this.user;
  }

  storeUser(user: LoginResponse, type: string): void {
    if (this.stayLoggedIn) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    this.notification.notify(type);
    this.user = user;
    this.router.navigate(['dashboard']);
  }

  renewSession(): void {
    this.logout();
  }

}
