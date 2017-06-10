// tslint:disable:curly
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loading: boolean;
  error = '';
  problem = false;
  constructor(
    private auth: AuthService
  ) { }
  register(form: HTMLFormElement, event: Event): void {
    event.preventDefault();
    const handleError = (err: Response): void => {
      this.loading = false;
      this.problem = true;
      if (err.status === 422)
        this.error = 'Email already taken.';
      else
        this.error = 'Error, please try again';
    };
    this.loading = true;

    this.auth.register(new FormData(form))
      .subscribe(response => this.auth.storeUser(response.json().user, 'Registered!'), handleError);
  }
}
