import { TestBed, inject } from '@angular/core/testing';

import { HttpRequestService } from './http-request.service';
import { HttpModule } from '@angular/http/';

describe('SearchSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestService],
      imports: [HttpModule]
    });
  });

  it('should make an http request', inject([HttpRequestService], (service: HttpRequestService) => {
    // service.request('', 'get', directory.getTodos)
    //   .subscribe((response) => {
    //     expect(response).toBeTruthy();
    //   });
  }));
});
