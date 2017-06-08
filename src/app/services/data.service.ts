import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/login-response.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  private user: LoginResponse;
  private token: string;
  constructor(
    private router: Router
  ) { }

  getToken() {
    return this.token;
  }

  getUser() {
    return this.user;
  }

  storeUser(user: LoginResponse) {
    this.user = user;
    // wait for the token then work with it
    const token$ = new Subject<string>();
    token$.subscribe((value) => {
      this.token = value;
      this.router.navigate(['dashboard']);
    });
    token$.next(this.user.token);
  }

  renewSession() {
    this.router.navigate(['login']);
  }

}
