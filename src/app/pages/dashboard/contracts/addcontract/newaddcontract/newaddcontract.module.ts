import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewaddcontractRoutingModule } from './newaddcontract-routing.module';
import { NewaddcontractComponent } from './newaddcontract.component';


@NgModule({
  declarations: [
    NewaddcontractComponent
  ],
  imports: [
    CommonModule,
    NewaddcontractRoutingModule
  ]
})
export class NewaddcontractModule { }
