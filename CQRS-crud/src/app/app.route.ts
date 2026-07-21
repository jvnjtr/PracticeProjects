import { Routes } from '@angular/router';
import { AddUser } from './add-user/add-user';
import { ViewUser } from './view-user/view-user';
import { LoginComponent } from './login/login';
export const appRoutes: Routes = [
    {
    path: '',
    component: AddUser
  },
  {
  path: 'add',
  component: AddUser
  },
  {
    path:'add/:id',
    component: AddUser
  },
  {
    path: 'view',
    component: ViewUser
  },
  {
    path:'login',
    component:LoginComponent
  }
];