import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StartComponent } from './start/start.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
export const routes: Routes = [
    { path: '', component: StartComponent },
    { path:'test',component:TestComponent},
    { path:'elementRef',component:ElementRefComponent},
    { path: '**',redirectTo: ''}
];