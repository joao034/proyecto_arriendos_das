import { TestBed } from '@angular/core/testing';

import { ApiArriendosService } from './api-arriendos.service';

describe('ApiArriendosService', () => {
  let service: ApiArriendosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiArriendosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
