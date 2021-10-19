import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.scss']
})

export class DefaultDashboardComponent implements OnInit {

  dashboardID: any = '​64e1c2cb-bfdb-442d-a980-a5f117173b07​';

  items: MenuItem[] = [];
  home: MenuItem = {};

  selectedCity1: any;
  selectedCountry: any;

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ]

  countries = [
    {name: 'Australia', code: 'AU'},
    {name: 'Brazil', code: 'BR'},
    {name: 'China', code: 'CN'},
    {name: 'Egypt', code: 'EG'},
    {name: 'France', code: 'FR'},
    {name: 'Germany', code: 'DE'},
    {name: 'India', code: 'IN'},
    {name: 'Japan', code: 'JP'},
    {name: 'Spain', code: 'ES'},
    {name: 'United States', code: 'US'}
];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if( event instanceof NavigationEnd) {
        this.dashboardID = this.activatedRoute.snapshot.paramMap.get('id')
      }
    })
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Dashboard overview' }
    ];
    this.home = { label: 'Dashboards', url: 'my-content/dashboards' }
  }


}
