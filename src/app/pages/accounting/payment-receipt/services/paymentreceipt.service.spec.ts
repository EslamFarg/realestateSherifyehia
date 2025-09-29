import { TestBed } from '@angular/core/testing';

import { PaymentreceiptService } from './paymentreceipt.service';

describe('PaymentreceiptService', () => {
  let service: PaymentreceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentreceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
