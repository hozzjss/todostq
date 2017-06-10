import { Injectable } from '@angular/core';
import { directory } from '../API/api-directory';
import { HttpRequestService } from './http-request.service';
import { Router } from '@angular/router';
import { LoginResponse } from 'app/models/login-response.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

  private user: LoginResponse;
  constructor(
    private http: HttpRequestService,
    private router: Router
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

  storeUser(user: LoginResponse) {
    // wait for the data then work with it
    const token$ = new Subject<LoginResponse>();
    token$.subscribe((value) => {
      this.user = value;
      this.router.navigate(['dashboard']);
    });
    token$.next(user);
  }

  renewSession() {
    this.router.navigate(['login']);
  }

}
