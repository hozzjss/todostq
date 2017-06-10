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


  login(form: HTMLFormElement, event: Event) {
    event.preventDefault();
    const handleError = (err: Response) => {
      // triggers showing the error notification
      this.loading = false;
      this.problem = true;
      if (err.status === 401)
        this.error = 'Incorrect email or password';
      else
        this.error = 'please try again';
    };

    this.loading = true;

    // register the token >> redirect to dashboard
    this.auth.login(new FormData(form))
      .subscribe(response => this.auth.storeUser(response.json(), 'Logged in!'), handleError);
  }
}
