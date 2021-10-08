import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'st-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

@Input() iconClass = 'bi bi-alarm-fill';
@Input() itemName = 'Dashboards';

  constructor() { }

  ngOnInit(): void {
  }

}
