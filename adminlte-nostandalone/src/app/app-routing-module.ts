import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login-module';
import { DashboardModule } from './dashboard/dashboard-module';
import { Registration } from './login/registration/registration';
import { ReactiveRegistration } from './reactive-registration/reactive-registration';
import { Arrayfunction } from './study/arrayfunction/arrayfunction';

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
   path:'registerReactive',component:ReactiveRegistration
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
  },
  {path:'array',component:Arrayfunction},
  {path:'**',redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
