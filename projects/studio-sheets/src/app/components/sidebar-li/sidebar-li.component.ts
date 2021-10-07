import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-li',
  templateUrl: './sidebar-li.component.html',
  styleUrls: ['./sidebar-li.component.scss']
})
export class SidebarLiComponent implements OnInit {

@Input() iconClass = 'bi bi-alarm-fill';
@Input() itemName = 'Dashboards'

  constructor() { }

  ngOnInit(): void {
  }

}
