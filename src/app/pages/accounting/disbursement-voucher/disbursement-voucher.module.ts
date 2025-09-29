import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisbursementVoucherRoutingModule } from './disbursement-voucher-routing.module';
import { DisbursementVoucherComponent } from './disbursement-voucher.component';


@NgModule({
  declarations: [
    DisbursementVoucherComponent
  ],
  imports: [
    CommonModule,
    DisbursementVoucherRoutingModule
  ]
})
export class DisbursementVoucherModule { }
