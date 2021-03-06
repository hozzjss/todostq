// tslint:disable:curly
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading: boolean;
  error = '';
  problem = false;

  constructor(
    private auth: AuthService
  ) { }


  login(form: HTMLFormElement, event: Event): void {
    event.preventDefault();
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
