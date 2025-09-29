import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementVoucherComponent } from './disbursement-voucher.component';

describe('DisbursementVoucherComponent', () => {
  let component: DisbursementVoucherComponent;
  let fixture: ComponentFixture<DisbursementVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisbursementVoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisbursementVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
