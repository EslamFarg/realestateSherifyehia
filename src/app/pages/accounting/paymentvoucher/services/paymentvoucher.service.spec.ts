import { TestBed } from '@angular/core/testing';

import { PaymentvoucherService } from './paymentvoucher.service';

describe('PaymentvoucherService', () => {
  let service: PaymentvoucherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentvoucherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
