import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { RxjstestModule } from './study/rxjstest/rxjstest-module';


@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,RxjstestModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
