// tslint:disable:curly
import { Component} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from '../../models/login-response.model';
import { DataService } from '../../services/data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error = '';
  problem = false;

  constructor(
    private auth: AuthService,
    private data: DataService
  ) { }


  login(form: HTMLFormElement) {
    const handleError = (err: Response) => {
      // triggers showing the error notification
      this.problem = true;
      if (err.status === 401)
        this.error = 'Incorrect email or password';
      else
        this.error = 'please try again';
    };

    // register the token >> redirect to dashboard
    this.auth.login(new FormData(form))
      .subscribe(response => this.data.storeUser(response.json()) , handleError);
  }
}
