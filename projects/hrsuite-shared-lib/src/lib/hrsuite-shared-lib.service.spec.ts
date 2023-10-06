import { TestBed } from '@angular/core/testing';

import { HRSuiteSharedLibService } from './hrsuite-shared-lib.service';

describe('HRSuiteSharedLibService', () => {
  let service: HRSuiteSharedLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HRSuiteSharedLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
