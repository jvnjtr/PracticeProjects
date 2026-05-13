import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { DashboardItemComponent } from "../dashboard/dashboard-item/dashboard-item.component";
import { ServerStatusComponent } from "../server-status/server-status.component";
import { TrafficComponent } from "../dashboard/traffic/traffic.component";
import { TicketsComponent } from "../dashboard/tickets/tickets.component";

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [HeaderComponent, DashboardItemComponent, ServerStatusComponent, TrafficComponent, TicketsComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

}
