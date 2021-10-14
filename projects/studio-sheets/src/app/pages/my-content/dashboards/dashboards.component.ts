import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'studio-lib-prefixed';
import { DashboardsService } from './dashboards.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {

  dashboardsList: Array<Card> = [];
  widgetsList: Array<Card> = [];
  sharedDashboardsList: Array<Card> = [];

  constructor(private router: Router,
              private dashboardsService: DashboardsService) { }

  ngOnInit(): void {
    this.dashboardsList = this.dashboardsService.getDashboards();
    this.widgetsList = this.dashboardsService.getWidgets();
    this.sharedDashboardsList = this.dashboardsService.getSharedDashboards();
  }

  routeToPage(pagePathID: number | string) {
    this.router.navigateByUrl(`my-content/dashboard/${pagePathID}`)
  }

}
