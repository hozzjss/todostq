// tslint:disable:curly
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginResponse } from '../models/login-response.model';
import { DataService } from '../services/data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = '';
  problem = false;

  constructor(
    private auth: AuthService,
    private data: DataService
  ) { }


  login(form: HTMLFormElement) {
    const handleError = (err: Response) => {
      // if the credentials are incorrect notify the user
      // else notify the user to try again
      console.log('ERR', err.status);
      this.problem = true;
      if (err.status == 401)
        this.error = 'Incorrect email or password';
      else
        this.error = 'please try again';
    };
    // register the token >> redirect to dashboard
    this.auth.login(new FormData(form))
      .subscribe(response => {
        const data: LoginResponse = response.json();
        this.data.registerToken(data.token);
      }, handleError);
  }
  ngOnInit() {
  }

}
