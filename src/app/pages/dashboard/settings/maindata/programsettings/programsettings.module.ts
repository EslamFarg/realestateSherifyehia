import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsettingsRoutingModule } from './programsettings-routing.module';
import { ProgramsettingsComponent } from './programsettings.component';


@NgModule({
  declarations: [
    ProgramsettingsComponent
  ],
  imports: [
    CommonModule,
    ProgramsettingsRoutingModule
  ]
})
export class ProgramsettingsModule { }
