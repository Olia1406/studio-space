import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CellClassParams, ColDef, NewValueParams, ValueFormatterParams } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import * as dayjs from 'dayjs'
import { DataService } from '../data.service';
import { MobiusData } from '../data.interface';

@Component({
  selector: 'app-default-rank-sheet',
  templateUrl: './default-rank-sheet.component.html',
  styleUrls: ['./default-rank-sheet.component.scss']
})
export class DefaultRankSheetComponent implements OnInit {
  // breadcrumps data
  items: MenuItem[] = [];
  home: MenuItem = {};

  // dropdown data
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
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];

  // agGrid data
  @ViewChild("agGrid", { static: false }) agGrid: AgGridAngular | any;

  rankSheetData: any;
  grpLevelsListValues: Array<number>;
  colorsList: Array<string>;

  selectedDataStringPresentation: string = '';

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    floatingFilter: true,
  };

  columnDefs: any = [
    {
      headerName: 'Group Level',
      field: 'grpLevel',
      lockPosition: true,
      width: 100,
      suppressSizeToFit: true,
      checkboxSelection: true,
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

  rowData: any;

  constructor(private dataService: DataService) {
    this.rankSheetData = this.dataService.transformNestedData(this.dataService.nestedData);
    this.grpLevelsListValues = this.getFieldValuesList(this.rankSheetData.performanceData, 'grpLevel');
    this.colorsList = this.defineColorsList(this.grpLevelsListValues.length);

    this.rowData = this.rankSheetData.performanceData;
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Rank Sheet overview' }
    ];
    this.home = { label: 'Rank Sheet', url: 'my-content/rank-sheets' };
  }

  getFieldValuesList(arr: any, field: string): Array<any> {
    const set = new Set();
    for (const item of arr) {
      set.add(item[field])
    }
    return Array.from(set)
  }

  defineColorsList(colorsCount: number): Array<string> {
    const colorsList = [];
    for (let i = 0; i < colorsCount; i++) {
      colorsList.push(`${this.colorRenderer()}`)
    }
    return colorsList;
  }

  colorRenderer() {
    let o = Math.round, r = Math.random, s = 255;
    return `rgb(${o(r() * s)}, ${o(r() * s)}, ${o(r() * s)})`;
  }

  changeRGBtoRGBA(rgb: string) {
    return `rgba(${rgb.slice(4, rgb.length - 1)}, 0.3)`;
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    this.selectedDataStringPresentation = selectedData.map(
      (data: MobiusData) =>
        `${data.name} - start at\r\n ${dayjs(data.benchmarks[0].startDate).format('DD/MM/YYYY')} \n\r  \n `
    ).join(' ');
  }

}
