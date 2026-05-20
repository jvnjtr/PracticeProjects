import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { RxjstestModule } from './study/rxjstest/rxjstest-module';
import { ReactiveRegistration } from './reactive-registration/reactive-registration';
import { OnlyCharacter } from './directives/only-character';
import { Arrayfunction } from './study/arrayfunction/arrayfunction';

@NgModule({
  declarations: [App, ReactiveRegistration, OnlyCharacter, Arrayfunction],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, RxjstestModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
