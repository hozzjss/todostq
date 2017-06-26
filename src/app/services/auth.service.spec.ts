import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http/';
import { directory } from 'app/API/api-directory';
import { HttpRequestService } from './http-request.service';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from '../routing/app-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { AppModule } from 'app/app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('SearchSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
      imports: [AppModule]
    });
  });

  it('should authenticate user', inject([AuthService], (service: AuthService) => {
    // service
  }));
});
