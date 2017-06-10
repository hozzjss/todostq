import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  canActivate() {
    if (!!this.auth.getUser()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
