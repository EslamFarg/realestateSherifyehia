import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddsalifsRoutingModule } from './addsalifs-routing.module';
import { AddsalifsComponent } from './addsalifs.component';


@NgModule({
  declarations: [
    AddsalifsComponent
  ],
  imports: [
    CommonModule,
    AddsalifsRoutingModule
  ]
})
export class AddsalifsModule { }
