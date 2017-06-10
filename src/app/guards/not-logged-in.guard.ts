import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class NotLoggedInGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  canActivate() {
    if (!this.auth.getUser()) {
      return true;
    }
    return false;
  }
}
