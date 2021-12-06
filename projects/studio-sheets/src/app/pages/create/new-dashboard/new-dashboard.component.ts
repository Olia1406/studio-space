import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarSection } from 'studio-lib-prefixed';

@Component({
  selector: 'app-new-dashboard',
  templateUrl: './new-dashboard.component.html',
  styleUrls: ['./new-dashboard.component.scss']
})
export class NewDashboardComponent implements OnInit {
  items: MenuItem[] = [];
  home: MenuItem = {};

  filterSectionData: Array<SidebarSection>;

  constructor() { 
    this.filterSectionData = [
      {
        displaySectionHeader: true,
        sectionHeaderName: 'Parameters',
        displayFilters: 'show',
        dropdownDataList: [
          {
            name: 'grpLevel',
            dropdownHeader: 'Group level',
            dropdownValue: '',
            filter: false,
            filterby: 'value',
            placeholder: 'select group level',
            dropdownItems: [
              { label: 'alpine', value: 'ag-theme-alpine' },
              { label: 'balham', value: 'ag-theme-balham' },
              { label: 'fresh', value: 'ag-theme-fresh' },
              { label: 'material', value: 'ag-theme-material' }
            ]
          },
          {
            name: 'name',
            dropdownHeader: 'Entity name',
            dropdownValue: '',
            filter: true,
            filterby: 'value',
            placeholder: 'select entity',
            dropdownItems: [
              { label: 'alpine', value: 'ag-theme-alpine' },
              { label: 'balham', value: 'ag-theme-balham' },
              { label: 'fresh', value: 'ag-theme-fresh' },
              { label: 'material', value: 'ag-theme-material' }
            ]
          },
          {
            name: 'drillable',
            dropdownHeader: 'Drillable status',
            dropdownValue: '',
            filter: false,
            filterby: 'value',
            placeholder: 'select drillable status',
            dropdownItems: [
              { label: 'alpine', value: 'ag-theme-alpine' },
              { label: 'balham', value: 'ag-theme-balham' },
              { label: 'fresh', value: 'ag-theme-fresh' },
              { label: 'material', value: 'ag-theme-material' }
            ]
          },
          {
            name: 'drillable',
            dropdownHeader: 'Drillable status',
            dropdownValue: '',
            filter: false,
            filterby: 'value',
            placeholder: 'select drillable status',
            dropdownItems: [
              { label: 'alpine', value: 'ag-theme-alpine' },
              { label: 'balham', value: 'ag-theme-balham' },
              { label: 'fresh', value: 'ag-theme-fresh' },
              { label: 'material', value: 'ag-theme-material' }
            ]
          },
          {
            name: 'drillable',
            dropdownHeader: 'Drillable status',
            dropdownValue: '',
            filter: false,
            filterby: 'value',
            placeholder: 'select drillable status',
            dropdownItems: [
              { label: 'alpine', value: 'ag-theme-alpine' },
              { label: 'balham', value: 'ag-theme-balham' },
              { label: 'fresh', value: 'ag-theme-fresh' },
              { label: 'material', value: 'ag-theme-material' }
            ]
          }
        ]
      }
    ];

   }

  ngOnInit(): void {
    this.items = [
      { label: 'dashboard editor' }
    ];
    this.home = { label: 'create', url: 'my-content/dashboards' }
  }

}
