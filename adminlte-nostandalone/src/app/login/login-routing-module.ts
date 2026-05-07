import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLogin } from './user-login/user-login';
import { DashboardModule } from '../dashboard/dashboard-module';
import { Registration } from './registration/registration';

const routes: Routes = [
   {path: '',component: UserLogin},
   {path: 'login',component: UserLogin},
   {path: 'register',component: Registration},
   {path:'dashboard',loadChildren:()=>import('../dashboard/dashboard-module').then(m=>m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
