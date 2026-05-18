import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login-module';
import { DashboardModule } from './dashboard/dashboard-module';
import { Registration } from './login/registration/registration';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',component: Registration,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login-module').then(m => m.LoginModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard-module').then(m=>m.DashboardModule)
  },
  {
    path:'study',
    loadChildren:()=>import('./study/rxjstest/rxjstest-module').then(m=>m.RxjstestModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
