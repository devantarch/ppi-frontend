import { TestBed } from '@angular/core/testing';

import { PfDataFetchService } from './pf-data-fetch.service';

describe('PfDataFetchService', () => {
  let service: PfDataFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PfDataFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
