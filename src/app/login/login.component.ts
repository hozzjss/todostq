import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginResponse } from '../models/login-response.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private data: DataService
  ) { }
  login(form: HTMLFormElement) {
    this.auth.login(new FormData(form))
      .subscribe(response => {
        // if logged in successfully register the token and redirect to user dashboard
        if (response.status === 200) {
          const data: LoginResponse = response.json();
          this.data.registerToken(data.token);
          this.router.navigate(['dashboard']);
        } else if (response.status === 401) {
          // if the credentials are incorrect notify the user
        } else {
          // else notify the user to try again
        }
      })
    ;
  }
  ngOnInit() {
  }

}
