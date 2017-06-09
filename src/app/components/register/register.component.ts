// tslint:disable:curly
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

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
    private auth: AuthService,
    private data: DataService
  ) { }
  register(form: HTMLFormElement, event: Event) {
    event.preventDefault();
    const handleError = (err: Response) => {
      this.loading = false;
      this.problem = true;
      if (err.status === 422)
        this.error = 'Email already taken.';
      else
        this.error = 'Error, please try again';
    };
    this.loading = true;

    this.auth.register(new FormData(form))
      .subscribe(response => this.data.storeUser(response.json().user), handleError);
  }
}
