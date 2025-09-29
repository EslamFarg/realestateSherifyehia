import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitytrackingRoutingModule } from './activitytracking-routing.module';
import { ActivitytrackingComponent } from './activitytracking.component';


@NgModule({
  declarations: [
    ActivitytrackingComponent
  ],
  imports: [
    CommonModule,
    ActivitytrackingRoutingModule
  ]
})
export class ActivitytrackingModule { }
