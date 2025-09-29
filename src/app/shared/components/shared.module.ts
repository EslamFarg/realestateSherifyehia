import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountsRoutingModule } from "../../pages/accounting/accounts/accounts-routing.module";




@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    NgbAccordionModule,
    AccountsRoutingModule
],
  exports:[HeaderComponent,SidebarComponent]
})
export class SharedModule { }
