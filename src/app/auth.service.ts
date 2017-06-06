import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ENDPOINT, KEY } from './API';

@Injectable()
export class AuthService {
  // Content-Type: application/json' --header 'Accept: application/json' --header 'Authorization: Bearer 
  private headers = new Headers ({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  });
  constructor(
    private http: Http
  ) { }

  register(form: FormData) {
    return this.http.post(`${ENDPOINT}/register?api_key=${KEY}`, form, this.headers);
  }

  login(form: FormData) {
    return this.http.post(`${ENDPOINT}/login?api_key=${KEY}`, form, this.headers);
  }

}
