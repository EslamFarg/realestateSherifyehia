import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorerpaymentreceiptRoutingModule } from './explorerpaymentreceipt-routing.module';
import { ExplorerpaymentreceiptComponent } from './explorerpaymentreceipt.component';


@NgModule({
  declarations: [
    ExplorerpaymentreceiptComponent
  ],
  imports: [
    CommonModule,
    ExplorerpaymentreceiptRoutingModule
  ]
})
export class ExplorerpaymentreceiptModule { }
