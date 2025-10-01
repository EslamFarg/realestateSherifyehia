import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
    children:[
      {path:'',redirectTo:'owner',pathMatch:'full'},
      {path:'owner',loadChildren:()=>import('./main/owner/owner.module').then(m=>m.OwnerModule)},
      {path:'realtor',loadChildren:()=>import('./main/realtor/realtor.module').then(m=>m.RealtorModule)},
      {path:'tenant',loadChildren:()=>import('./main/tenant/tenant.module').then(m=>m.TenantModule)},
      {path:'building',loadChildren:()=>import('./main/building/building.module').then(m=>m.BuildingModule)},
      {path:'apartment',loadChildren:()=>import('./main/apartment/apartment.module').then(m=>m.ApartmentModule)},
      {path:'classification',loadChildren:()=>import('./main/classificationapartment/classificationapartment.module').then(m=>m.ClassificationapartmentModule)},
      {path:'treereal',loadChildren:()=>import('./main/treereal/treereal.module').then(m=>m.TreerealModule)},
      {path:'maintenance',loadChildren:()=>import('./maintenance/maintenance/maintenance.module').then(m=>m.MaintenanceModule)},
      {path:'typemaintenance',loadChildren:()=>import('./maintenance/typemaintenance/typemaintenance.module').then(m=>m.TypemaintenanceModule)},
      {path:'employees',loadChildren:()=>import('./employees/employees/employees.module').then(m=>m.EmployeesModule)},
      {path:'salarydisbursement',loadChildren:()=>import('./employees/salary-disbursement/salary-disbursement.module').then(m=>m.SalaryDisbursementModule)},
      {path:'salifis',loadChildren:()=>import('./employees/salifis/salifis.module').then(m=>m.SalifisModule)},
      {path:'newuser',loadChildren:()=>import('./users/newuser/newuser.module').then(m=>m.NewuserModule)},
      {path:'groupusers',loadChildren:()=>import('./users/group/group.module').then(m=>m.GroupModule)},
      {path:'activitytracking',loadChildren:()=>import('./users/activitytracking/activitytracking.module').then(m=>m.ActivitytrackingModule)},
      {path:'msgform',loadChildren:()=>import('./messages/messageforms/messageforms.module').then(m=>m.MessageformsModule)},
      {path:'sendmessage',loadChildren:()=>import('./messages/sendmessage/sendmessage.module').then(m=>m.SendmessageModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
