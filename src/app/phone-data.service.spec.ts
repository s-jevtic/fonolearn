import { TestBed } from '@angular/core/testing';

import { PhoneDataService } from './phone-data.service';

describe('PhoneDataService', () => {
  let service: PhoneDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
