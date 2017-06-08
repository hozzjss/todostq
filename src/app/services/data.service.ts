import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/login-response.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  private user: LoginResponse;
  constructor(
    private router: Router
  ) { }

  getToken(): string {
    return this.user.token;
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
