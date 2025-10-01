import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddsendmessageRoutingModule } from './addsendmessage-routing.module';
import { AddsendmessageComponent } from './addsendmessage.component';
import { PageHeadingComponent } from '../../../../../shared/ui/page-heading/page-heading.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchmsgComponent } from "../../../../../shared/ui/searchmsg/searchmsg.component";

@NgModule({
  declarations: [
    AddsendmessageComponent
  ],
  imports: [
    CommonModule,
    AddsendmessageRoutingModule,
    PageHeadingComponent,
    NgbNavModule,
    SearchmsgComponent
]
})
export class AddsendmessageModule { }
