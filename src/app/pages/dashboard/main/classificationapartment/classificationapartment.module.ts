import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificationapartmentRoutingModule } from './classificationapartment-routing.module';
import { ClassificationapartmentComponent } from './classificationapartment.component';


@NgModule({
  declarations: [
    ClassificationapartmentComponent
  ],
  imports: [
    CommonModule,
    ClassificationapartmentRoutingModule
  ]
})
export class ClassificationapartmentModule { }
