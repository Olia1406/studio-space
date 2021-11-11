import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Dropdown } from '../../shared/interfaces/dropdown.iterface';
import { DropdownItem } from '../../shared/interfaces/dropdownItems.interface';
import { SidebarSection } from '../../shared/interfaces/sidebarSection.interface';
import { DropdownDataService } from './dropdown-data.service';

@Component({
  selector: 'st-content-sidebar-section',
  templateUrl: './content-sidebar-section.component.html',
  styleUrls: ['./content-sidebar-section.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        overflow: 'hidden',
        height: '*',
      })),
      state('hide', style({
        overflow: 'hidden',
        height: '0px',
      })),
      transition('show => hide', animate('500ms ease-in-out')),
      transition('hide => show', animate('500ms ease-in-out'))
    ])
  ]
})
export class ContentSidebarSectionComponent implements OnInit {
  dropdownValuesList: Array<DropdownItem> = [];
  @Input() filterSectionData: Array<SidebarSection> = [
    {
      displaySectionHeader: true,
      sectionHeaderName: 'Common params',
      displayFilters: 'show',
      dropdownDataList: [
        {
          name: 'd1',
          dropdownHeader: 'First dropdown',
          dropdownValue: '',
          filter: false,
          filterby: 'value',
          placeholder: 'select item',
          dropdownItems: [
            { label: 'alpine', value: 'ag-theme-alpine' },
            { label: 'balham', value: 'ag-theme-balham' },
            { label: 'fresh', value: 'ag-theme-fresh' },
            { label: 'material', value: 'ag-theme-material' }
          ]
        },
        {
          name: 'd2',
          dropdownHeader: 'Second dropdown',
          dropdownValue: '',
          filter: false,
          filterby: 'value',
          placeholder: 'select another item',
          dropdownItems: [
            { label: 'alpine', value: 'ag-theme-alpine' },
            { label: 'balham', value: 'ag-theme-balham' },
            { label: 'fresh', value: 'ag-theme-fresh' },
            { label: 'material', value: 'ag-theme-material' }
          ]
        }
      ]
    },
    {
      displaySectionHeader: true,
      sectionHeaderName: 'Another category',
      displayFilters: 'show',
      dropdownDataList: [
        {
          name: 'd3',
          dropdownHeader: 'First dropdown',
          dropdownValue: '',
          filter: true,
          filterby: 'value',
          placeholder: 'select item',
          dropdownItems: [
            { label: 'alpine', value: 'ag-theme-alpine' },
            { label: 'balham', value: 'ag-theme-balham' },
            { label: 'fresh', value: 'ag-theme-fresh' },
            { label: 'material', value: 'ag-theme-material' }
          ]
        },
        {
          name: 'd4',
          dropdownHeader: 'First dropdown',
          dropdownValue: '',
          filter: true,
          filterby: 'value',
          placeholder: 'select some item',
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

  constructor(private dropdownDataServ: DropdownDataService) { }

  ngOnInit(): void {
    this.dropdownDataServ.filterValuesList.next(this.getDropdownValuesList(this.filterSectionData))
  };

  onChange(event: { originalEvent: PointerEvent, value: DropdownItem }) {
    this.dropdownDataServ.filterValuesList.next(this.getDropdownValuesList(this.filterSectionData))
  }

  getDropdownValuesList(sectionsData: Array<SidebarSection>) {
    return sectionsData
      .map((section: SidebarSection) => section.dropdownDataList
        .reduce((acc, el) => ({ ...acc, ...{ [el.name]: el.dropdownValue } }), {})
      )
      .reduce((accum, curr) => ({ ...accum, ...curr }), {})
  }


  resetFilters() {
    this.filterSectionData
      .forEach((section: SidebarSection) => section.dropdownDataList
        .forEach((dropdown: Dropdown) => {
          if (dropdown.name !== 'theme') dropdown.dropdownValue = ''
        })
      )
    this.dropdownDataServ.filterValuesList.next(this.getDropdownValuesList(this.filterSectionData))
  }

}
