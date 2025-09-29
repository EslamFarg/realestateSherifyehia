import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
    children:[
      {path:'',redirectTo:'owner',pathMatch:'full'},
      {path:'owner',loadChildren:()=>import('./main/owner/owner.module').then(m=>m.OwnerModule)},
      {path:'realtor',loadChildren:()=>import('./main/realtor/realtor.module').then(m=>m.RealtorModule)},
      {path:'tenant',loadChildren:()=>import('./main/tenant/tenant.module').then(m=>m.TenantModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
