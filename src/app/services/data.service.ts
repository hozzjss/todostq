import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class DataService {
  private token: string;
  constructor(
    private router: Router
  ) { }
  registerToken(token: string) {
    this.token = token;
    this.router.navigate(['dashboard']);
  }
  getToken() {
    return this.token;
  }

  renewSession(error?) {
    console.log(error);
    this.router.navigate(['login']);
  }

}
