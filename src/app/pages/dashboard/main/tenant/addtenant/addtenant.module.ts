import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtenantRoutingModule } from './addtenant-routing.module';
import { AddtenantComponent } from './addtenant.component';


@NgModule({
  declarations: [
    AddtenantComponent
  ],
  imports: [
    CommonModule,
    AddtenantRoutingModule
  ]
})
export class AddtenantModule { }
