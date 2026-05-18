import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RxjstestRoutingModule } from './rxjstest-routing-module';
import { Study1 } from './study1/study1';
import { ReactiveFormsModule } from '@angular/forms';
import { Study2 } from './study2/study2';
import { Study3 } from './study3/study3';
import { SubjectBehaviourSubject } from './subject-behaviour-subject/subject-behaviour-subject';
import { Landing } from './landing/landing';

@NgModule({
  declarations: [Study1, Study2, Study3, SubjectBehaviourSubject, Landing],
  imports: [CommonModule, RxjstestRoutingModule, ReactiveFormsModule],
})
export class RxjstestModule {}
