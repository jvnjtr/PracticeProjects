import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboardlanding } from './dashboardlanding/dashboardlanding';
import { LayoutModule } from '../layout/layout-module';
import { DashboardContent } from './dashboard-content/dashboard-content';

@NgModule({
  declarations: [Dashboardlanding, DashboardContent],
  imports: [CommonModule, DashboardRoutingModule, LayoutModule],
})
export class DashboardModule {}
