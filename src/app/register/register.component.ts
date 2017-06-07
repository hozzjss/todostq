import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RegisterResponse } from '../models/register-response.model';
import { Router } from "@angular/router";
import { DataService } from "app/services/data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private data: DataService
  ) { }
  register(form: HTMLFormElement) {
    this.auth.register(new FormData(form))
      .subscribe(response => {
        const data: RegisterResponse = response.json();
        this.data.registerToken(data.user.token);
      });
      return false;
  }
  ngOnInit() {
  }

}
