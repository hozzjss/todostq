// tslint:disable:curly
import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Response } from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: FormControl;
  email: FormControl;
  emailError: string[];
  loginForm: FormGroup;
  loading: boolean;
  error = '';
  problem = false;

  constructor(
    private auth: AuthService
  ) { }


  login(form): void {
    if (this.loginForm.valid) {
      const handleError = (err: Response): void => {
        // triggers showing the error notification
        this.loading = false;
        this.problem = true;
        if (err.status === 401)
          this.error = 'Incorrect email or password';
        else
          this.error = 'please try again';
      };

      this.loading = true;
      const checkboxEl = <HTMLInputElement>form.querySelector('#remember');
      // register the token >> redirect to dashboard
      this.auth.login(new FormData(form), checkboxEl.checked)
        .subscribe(response => this.auth.storeUser(response.json(), 'Logged in!'), handleError);
    }
  }

  validateEmail() {
    return this.email.valid || this.email.untouched;
  }

  validatePassword() {
    return this.password.valid || this.password.untouched;
  }

  ngOnInit(): void {
    this.email = new FormControl('', [
      Validators.email,
      Validators.required
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }
}
