import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaindataRoutingModule } from './maindata-routing.module';
import { MaindataComponent } from './maindata.component';


@NgModule({
  declarations: [
    MaindataComponent
  ],
  imports: [
    CommonModule,
    MaindataRoutingModule
  ]
})
export class MaindataModule { }
