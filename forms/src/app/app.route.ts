import { Route, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ReactiveSignupComponent } from "./auth/reactive-signup/reactive-signup.component";
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path:'reactive',component:ReactiveSignupComponent
  },
  // Invalid URL redirect
  {
    path: '**',
    redirectTo: ''
  }
];