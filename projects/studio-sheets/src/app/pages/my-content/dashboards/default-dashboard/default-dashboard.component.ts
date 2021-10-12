import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.scss']
})

// interface City {
//   name: string,
//   code: string
// }

export class DefaultDashboardComponent implements OnInit {

  items: MenuItem[] = [];
  home: MenuItem = {};

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ]

  selectedCity1: any;

  
  selectedCountry: any;
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

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Dashboard overview' }
    ];
    this.home = { label: 'Dashboards', url: 'my-content/dashboards' }
  }


}
