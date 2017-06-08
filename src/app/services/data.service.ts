import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/login-response.model';

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
    this.token = user.token;
    this.router.navigate(['dashboard']);
  }

  renewSession(error?) {
    console.log(error);
    this.router.navigate(['login']);
  }

}
