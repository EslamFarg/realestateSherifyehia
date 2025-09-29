import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptVoucherRoutingModule } from './receipt-voucher-routing.module';
import { ReceiptVoucherComponent } from './receipt-voucher.component';


@NgModule({
  declarations: [
    ReceiptVoucherComponent
  ],
  imports: [
    CommonModule,
    ReceiptVoucherRoutingModule
  ]
})
export class ReceiptVoucherModule { }
