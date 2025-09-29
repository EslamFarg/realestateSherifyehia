import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpaymentreceiptComponent } from './addpaymentreceipt.component';

describe('AddpaymentreceiptComponent', () => {
  let component: AddpaymentreceiptComponent;
  let fixture: ComponentFixture<AddpaymentreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddpaymentreceiptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpaymentreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
