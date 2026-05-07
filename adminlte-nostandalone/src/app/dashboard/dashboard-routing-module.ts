import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboardlanding } from './dashboardlanding/dashboardlanding';
import { DashboardContent } from './dashboard-content/dashboard-content';

const routes: Routes = [
  {path: '',component: Dashboardlanding,children:[
    {path: '',component:DashboardContent},
   
  ]},
   {path: '',redirectTo: 'dashboard',pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
