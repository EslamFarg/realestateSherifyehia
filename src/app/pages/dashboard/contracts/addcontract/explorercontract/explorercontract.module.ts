import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorercontractRoutingModule } from './explorercontract-routing.module';
import { ExplorercontractComponent } from './explorercontract.component';


@NgModule({
  declarations: [
    ExplorercontractComponent
  ],
  imports: [
    CommonModule,
    ExplorercontractRoutingModule
  ]
})
export class ExplorercontractModule { }
