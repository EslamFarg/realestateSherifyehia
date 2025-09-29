import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorermaintenanceRoutingModule } from './explorermaintenance-routing.module';
import { ExplorermaintenanceComponent } from './explorermaintenance.component';


@NgModule({
  declarations: [
    ExplorermaintenanceComponent
  ],
  imports: [
    CommonModule,
    ExplorermaintenanceRoutingModule
  ]
})
export class ExplorermaintenanceModule { }
