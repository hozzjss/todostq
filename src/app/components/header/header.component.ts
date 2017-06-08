import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LoginResponse } from '../../models/login-response.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: LoginResponse;

  constructor(private data: DataService) {  }

  ngOnInit() {
    this.user = this.data.getUser();
  }

}
