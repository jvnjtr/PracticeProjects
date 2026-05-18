import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Study1 } from './study1/study1';
import { Study2 } from './study2/study2';
import { Study3 } from './study3/study3';
import { Landing } from './landing/landing';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'landing',
      pathMatch: 'full'
    },
    {path: 'landing', component: Landing},
    {
      path: 'switchmap',component: Study1,
    },
    {
      path: 'mergemap',component: Study2,
    },
    {
      path: 'combinelatest',component: Study3,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjstestRoutingModule {}
