import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddsendmessageRoutingModule } from './addsendmessage-routing.module';
import { AddsendmessageComponent } from './addsendmessage.component';


@NgModule({
  declarations: [
    AddsendmessageComponent
  ],
  imports: [
    CommonModule,
    AddsendmessageRoutingModule
  ]
})
export class AddsendmessageModule { }
