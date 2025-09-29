import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerpaymentreceiptComponent } from './explorerpaymentreceipt.component';

describe('ExplorerpaymentreceiptComponent', () => {
  let component: ExplorerpaymentreceiptComponent;
  let fixture: ComponentFixture<ExplorerpaymentreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplorerpaymentreceiptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorerpaymentreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
