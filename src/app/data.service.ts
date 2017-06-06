import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private token: string;
  registerToken(token: string) {
    this.token = token;
  }
  getToken() {
    return this.token;
  }
  constructor() { }

}
