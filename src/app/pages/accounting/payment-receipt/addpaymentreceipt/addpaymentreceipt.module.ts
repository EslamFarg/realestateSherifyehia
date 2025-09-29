import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpaymentreceiptRoutingModule } from './addpaymentreceipt-routing.module';
import { AddpaymentreceiptComponent } from './addpaymentreceipt.component';


@NgModule({
  declarations: [
    AddpaymentreceiptComponent
  ],
  imports: [
    CommonModule,
    AddpaymentreceiptRoutingModule
  ]
})
export class AddpaymentreceiptModule { }
