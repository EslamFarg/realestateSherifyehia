import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypemaintenanceRoutingModule } from './typemaintenance-routing.module';
import { TypemaintenanceComponent } from './typemaintenance.component';


@NgModule({
  declarations: [
    TypemaintenanceComponent
  ],
  imports: [
    CommonModule,
    TypemaintenanceRoutingModule
  ]
})
export class TypemaintenanceModule { }
