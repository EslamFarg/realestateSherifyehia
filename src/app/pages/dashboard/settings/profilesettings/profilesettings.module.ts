import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesettingsRoutingModule } from './profilesettings-routing.module';
import { ProfilesettingsComponent } from './profilesettings.component';


@NgModule({
  declarations: [
    ProfilesettingsComponent
  ],
  imports: [
    CommonModule,
    ProfilesettingsRoutingModule
  ]
})
export class ProfilesettingsModule { }
