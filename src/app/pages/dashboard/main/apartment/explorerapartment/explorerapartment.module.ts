import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorerapartmentRoutingModule } from './explorerapartment-routing.module';
import { ExplorerapartmentComponent } from './explorerapartment.component';


@NgModule({
  declarations: [
    ExplorerapartmentComponent
  ],
  imports: [
    CommonModule,
    ExplorerapartmentRoutingModule
  ]
})
export class ExplorerapartmentModule { }
