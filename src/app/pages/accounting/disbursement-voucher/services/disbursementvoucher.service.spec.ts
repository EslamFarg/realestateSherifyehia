import { TestBed } from '@angular/core/testing';

import { DisbursementvoucherService } from './disbursementvoucher.service';

describe('DisbursementvoucherService', () => {
  let service: DisbursementvoucherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisbursementvoucherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
