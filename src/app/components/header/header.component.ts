import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../../models/login-response.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: LoginResponse;

  constructor(private auth: AuthService) {  }

  ngOnInit() {
    this.user = this.auth.getUser();
  }

}
