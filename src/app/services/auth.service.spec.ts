import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http/';
import { directory } from 'app/API/api-directory';

describe('SearchSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpModule]
    });
  });

  it('should make an http request', inject([AuthService], (service: AuthService) => {
    // service
  }));
});
