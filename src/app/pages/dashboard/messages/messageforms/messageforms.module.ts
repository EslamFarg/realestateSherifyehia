import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageformsRoutingModule } from './messageforms-routing.module';
import { MessageformsComponent } from './messageforms.component';


@NgModule({
  declarations: [
    MessageformsComponent
  ],
  imports: [
    CommonModule,
    MessageformsRoutingModule
  ]
})
export class MessageformsModule { }
