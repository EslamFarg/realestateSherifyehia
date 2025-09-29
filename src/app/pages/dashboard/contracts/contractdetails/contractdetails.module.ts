import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractdetailsRoutingModule } from './contractdetails-routing.module';
import { ContractdetailsComponent } from './contractdetails.component';


@NgModule({
  declarations: [
    ContractdetailsComponent
  ],
  imports: [
    CommonModule,
    ContractdetailsRoutingModule
  ]
})
export class ContractdetailsModule { }
