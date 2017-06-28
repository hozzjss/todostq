// tslint:disable:curly
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  password: FormControl;
  email: FormControl;
  name: FormControl;
  loading: boolean;
  error = '';
  problem = false;
  constructor(
    private auth: AuthService
  ) { }
  register(form: HTMLFormElement): void {
    const handleError = (err: Response): void => {
      this.loading = false;
      this.problem = true;
      if (err.status === 422)
        this.error = 'Email already taken.';
      else
        this.error = 'Error, please try again';
    };
    this.loading = true;

    const checkboxEl = <HTMLInputElement>form.querySelector('#remember');
    this.auth.register(new FormData(form), checkboxEl.checked)
      .subscribe(response => this.auth.storeUser(response.json().user, 'Registered!'), handleError);
  }

  validateName() {
    return this.name.valid || this.name.untouched;
  }

  validateEmail() {
    return this.email.valid || this.email.untouched;
  }

  validatePassword() {
    return this.password.valid || this.password.untouched;
  }

  ngOnInit() {
    this.name = new FormControl('', [
      Validators.pattern('[a-zA-Z].*'),
      Validators.required
    ]);
    this.email = new FormControl('', [
      Validators.email,
      Validators.required
    ]);
    this.password = new FormControl('', Validators.required);
    this.registerForm = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }
}
