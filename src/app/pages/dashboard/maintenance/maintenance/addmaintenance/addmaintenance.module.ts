import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddmaintenanceRoutingModule } from './addmaintenance-routing.module';
import { AddmaintenanceComponent } from './addmaintenance.component';


@NgModule({
  declarations: [
    AddmaintenanceComponent
  ],
  imports: [
    CommonModule,
    AddmaintenanceRoutingModule
  ]
})
export class AddmaintenanceModule { }
