import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorerpaymentvoucherRoutingModule } from './explorerpaymentvoucher-routing.module';
import { ExplorerpaymentvoucherComponent } from './explorerpaymentvoucher.component';


@NgModule({
  declarations: [
    ExplorerpaymentvoucherComponent
  ],
  imports: [
    CommonModule,
    ExplorerpaymentvoucherRoutingModule
  ]
})
export class ExplorerpaymentvoucherModule { }
