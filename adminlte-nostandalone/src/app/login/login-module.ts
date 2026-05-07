import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing-module';
import { UserLogin } from './user-login/user-login';
import { Registration } from './registration/registration';

@NgModule({
  declarations: [UserLogin, Registration],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
