import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddapartmentRoutingModule } from './addapartment-routing.module';
import { AddapartmentComponent } from './addapartment.component';


@NgModule({
  declarations: [
    AddapartmentComponent
  ],
  imports: [
    CommonModule,
    AddapartmentRoutingModule
  ]
})
export class AddapartmentModule { }
