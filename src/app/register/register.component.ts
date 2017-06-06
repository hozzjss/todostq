import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterResponse } from '../models/register-response.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }
  register(form: HTMLFormElement) {
    this.auth.register(new FormData(form))
      .subscribe(response => {
        const data: RegisterResponse = response.json();
      })
      ;
      return false;
  }
  ngOnInit() {
  }

}
