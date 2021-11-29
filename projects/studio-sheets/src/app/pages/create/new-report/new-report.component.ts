import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent implements OnInit {

  items: MenuItem[] = [];
  home: MenuItem = {};

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Create new report' }
    ];
    this.home = { label: 'Create', url: 'create' }
  }

}
