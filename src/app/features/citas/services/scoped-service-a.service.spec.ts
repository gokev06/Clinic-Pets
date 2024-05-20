import { TestBed } from '@angular/core/testing';

import { ScopedServiceAService } from './scoped-service-a.service';

describe('ScopedServiceAService', () => {
  let service: ScopedServiceAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScopedServiceAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
