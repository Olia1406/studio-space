import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CellClassParams, ColDef, NewValueParams, ValueFormatterParams } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import * as dayjs from 'dayjs'
import { DataService } from '../data.service';
import { MobiusData } from '../data.interface';
import { DropdownDataService, DropdownItem, SidebarSection } from 'studio-lib-prefixed';
import { FullMobiusData } from 'projects/studio-sheets/src/app/shared/interfaces/rankSheetData.interface';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-default-rank-sheet',
  templateUrl: './default-rank-sheet.component.html',
  styleUrls: ['./default-rank-sheet.component.scss']
})
export class DefaultRankSheetComponent implements OnInit, OnDestroy {
  // breadcrumps data
  items: MenuItem[];
  home: MenuItem;
  // filters data
  filterSectionData: Array<SidebarSection>;
  destroy = new Subject<void>();

  // agGrid data
  @ViewChild("agGrid", { static: false }) agGrid!: AgGridAngular;

  rankSheetData: FullMobiusData;
  grpLevelsListValues: Array<number>;
  colorsList: Array<string>;
  selectedDataStringPresentation = '';
  selectedTheme = '';

  rowData: Array<MobiusData>;
  clonedRowData: Array<MobiusData>;
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    floatingFilter: true,
  };
  columnDefs = [
    {
      headerName: 'Group Level',
      field: 'grpLevel',
      lockPosition: true,
      width: 100,
      suppressSizeToFit: true,
      rowDrag: true,
      // checkboxSelection: true,
      cellStyle: (params: CellClassParams): any => {
        for (let i = 0; i < this.grpLevelsListValues.length; i++) {
          if (params.value === this.grpLevelsListValues[i]) {
            return { color: this.colorsList[i], backgroundColor: this.changeRGBtoRGBA(this.colorsList[i]) };
          }
        }
      }
    },
    {
      headerName: 'Entity Name',
      field: 'name',
      toolPanelClass: ['tp-bronze'],
      width: 200,
      filter: 'agTextColumnFilter',
      editable: true, singleClickEdit: true, onCellValueChanged: (event: NewValueParams) => alert(event.newValue)
    },
    {
      headerName: 'Benchmarks',
      children: [{
        headerName: 'Start Date', width: 150,
        field: 'benchmarks',
        filter: 'agTextColumnFilter',
        // cellRenderer: (params: any) => dayjs(params.value[0].startDate).format('DD/MM/YYYY'),
        valueGetter: (params: any) => params.data.benchmarks[0].startDate
      },
      {
        headerName: 'Name', width: 150,
        field: 'benchmarks',
        filter: 'agTextColumnFilter',
        editable: true,
        singleClickEdit: true,
        valueGetter: (params: any) => params.data.benchmarks[0].name
      },]
    },
    {
      headerName: 'Periods',
      children: [
        {
          headerName: 'Benchmark Weight',
          width: 150,
          filter: 'agNumberColumnFilter',
          field: 'periods',
          valueGetter: (params: any) => params.data.periods[0].benchmarkWeight,
        },
        {
          headerName: 'Fund Weight',
          width: 150,
          filter: 'agNumberColumnFilter',
          field: 'periods',
          valueGetter: (params: any) => params.data.periods[0].fundWeight,
        },
        {
          headerName: 'Value add',
          width: 150,
          filter: 'agNumberColumnFilter',
          field: 'periods',
          valueGetter: (params: any) => params.data.periods[0].valueAdd,
        }]
    },
    { field: 'drillable', width: 100, filter: true, pinned: 'right' },
    { field: 'securities', width: 100 },
    { field: 'calculationType', width: 100 },
    { field: 'methodology' },
    {
      headerName: 'Entity id', field: 'id', width: 100, filter: 'agTextColumnFilter',
      valueFormatter: (value: ValueFormatterParams) => value.value + "*"
    },
    { field: 'parentId', width: 100, filter: 'agTextColumnFilter' }
  ];

  constructor(private dataService: DataService, private dropdownDataServ: DropdownDataService) {
    this.items = [
      { label: 'Rank Sheet overview' }
    ];
    this.home = { label: 'Rank Sheet', url: 'my-content/rank-sheets' };

    this.rankSheetData = { ...this.dataService.transformNestedData(this.dataService.nestedData) };
    this.grpLevelsListValues = this.getFieldValuesList(this.rankSheetData.performanceData, 'grpLevel');
    this.colorsList = this.defineColorsList(this.grpLevelsListValues.length);
    this.rowData = this.rankSheetData.performanceData;
    this.clonedRowData = JSON.parse(JSON.stringify(this.rowData));

    this.filterSectionData = [
      {
        displaySectionHeader: true,
        sectionHeaderName: 'Common parameters',
        displayFilters: 'show',
        dropdownDataList: [
          {
            name: 'theme',
            dropdownHeader: 'Select table theme',
            dropdownValue: 'ag-theme-alpine',
            filter: false,
            filterby: 'value',
            placeholder: 'select theme',
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
        sectionHeaderName: 'Filters category',
        displayFilters: 'show',
        dropdownDataList: [
          {
            name: 'grpLevel',
            dropdownHeader: 'Group level',
            dropdownValue: '',
            filter: false,
            filterby: 'value',
            placeholder: 'select group level',
            dropdownItems: this.getDropDownList(this.rankSheetData.performanceData, 'grpLevel')
          },
          {
            name: 'name',
            dropdownHeader: 'Entity name',
            dropdownValue: '',
            filter: true,
            filterby: 'value',
            placeholder: 'select entity',
            dropdownItems: this.getDropDownList(this.rankSheetData.performanceData, 'name')
          },
          {
            name: 'drillable',
            dropdownHeader: 'Drillable status',
            dropdownValue: '',
            filter: false,
            filterby: 'value',
            placeholder: 'select drillable status',
            dropdownItems: this.getDropDownList(this.rankSheetData.performanceData, 'drillable')
          }
        ]
      }
    ];

    this.dropdownDataServ.filterValuesList
      .pipe(takeUntil(this.destroy))
      .subscribe(dropdownValues => {
        this.selectedTheme = dropdownValues.theme;

        this.rowData = this.clonedRowData.filter(((row: MobiusData | any) => {
            let result = true;
            for (const key in dropdownValues) {
              if(dropdownValues.hasOwnProperty(key) && row.hasOwnProperty(key)) {
                result &&= row[key].toString()===dropdownValues[key] || !dropdownValues[key]
              }
            }
            return result
        }))
      })
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  // methods which get lists to fill dropdown
  getFieldValuesList(arr: Array<any>, field: string): Array<any> {
    console.log(arr)
    const set = new Set();
    for (const item of arr) {
      set.add(item[field])
    }
    return Array.from(set)
  }

  getDropDownList(arr: Array<any>, field: string): Array<DropdownItem> {
    return this.getFieldValuesList(arr, field).map((item) => ({ 'label': item.toString(), 'value': item.toString() }))
  }
  // -----------

  // methods which get list of random colors
  defineColorsList(colorsCount: number): Array<string> {
    const colorsList = [];
    for (let i = 0; i < colorsCount; i++) {
      colorsList.push(`${this.colorRenderer()}`)
    }
    return colorsList;
  }

  colorRenderer() {
    return `rgb(${Math.round(Math.random() * 225)}, ${Math.round(Math.random() * 225)}, ${Math.round(Math.random() * 225)})`;
  }

  changeRGBtoRGBA(rgb: string) {
    return `rgba(${rgb.slice(4, rgb.length - 1)}, 0.3)`;
  }
  // ------------

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    this.selectedDataStringPresentation = selectedData.map(
      (data: MobiusData) =>
        `${data.name} - start at\r\n ${dayjs(data.benchmarks[0].startDate).format('DD/MM/YYYY')} \n\r  \n `
    ).join(' ');
  }


}


