import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpaymentvoucherRoutingModule } from './addpaymentvoucher-routing.module';
import { AddpaymentvoucherComponent } from './addpaymentvoucher.component';


@NgModule({
  declarations: [
    AddpaymentvoucherComponent
  ],
  imports: [
    CommonModule,
    AddpaymentvoucherRoutingModule
  ]
})
export class AddpaymentvoucherModule { }
