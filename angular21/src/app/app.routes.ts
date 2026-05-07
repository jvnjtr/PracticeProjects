import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { HomeComponent } from './home-component/home-component';
import { PropertyBinding } from './property-binding/property-binding';
import { ApplicationComponent } from './application-component/application-component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'propertyBinding',component:PropertyBinding},
    {path:'app',component:ApplicationComponent},
    {path:'header',component:HeaderComponent}
];
export const routing = RouterModule.forRoot(routes, { useHash: true });
