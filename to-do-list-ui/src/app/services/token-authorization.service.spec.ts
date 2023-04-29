import { TestBed } from '@angular/core/testing';

import { TokenAuthorizationService } from './token-authorization.service';

describe('TokenAuthorizationService', () => {
  let service: TokenAuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenAuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
