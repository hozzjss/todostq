// tslint:disable:curly
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegisterResponse } from '../../models/register-response.model';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error = '';
  problem = false;
  constructor(
    private auth: AuthService,
    private data: DataService
  ) { }
  register(form: HTMLFormElement) {
    const handleError = (err: Response) => {
      this.problem = true;
      if (err.status === 422)
        this.error = 'Email already taken.';

      else
        this.error = 'Error, please try again';
    };

    this.auth.register(new FormData(form))
      .subscribe(response => {
        const data: RegisterResponse = response.json();
        this.data.storeUser(data.user);
      }, handleError);
  }
  ngOnInit() {
  }

}
