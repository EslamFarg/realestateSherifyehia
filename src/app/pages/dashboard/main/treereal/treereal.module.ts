import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreerealRoutingModule } from './treereal-routing.module';
import { TreerealComponent } from './treereal.component';


@NgModule({
  declarations: [
    TreerealComponent
  ],
  imports: [
    CommonModule,
    TreerealRoutingModule
  ]
})
export class TreerealModule { }
