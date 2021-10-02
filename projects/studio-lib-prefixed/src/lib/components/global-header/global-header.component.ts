import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import {ITab} from "./tab.interface";

@Component({
  selector: 'st-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent implements OnInit {
  
  @Input() tabs:ITab[] = [
  {title: "Some", onClick: () => {}, isActive: false},
  {title: "My Content", onClick: () => {}, isActive: false},
  {title: "Discover", onClick: () => {}, isActive: false},
  {title: "Create", onClick: () => {}, isActive: false},
  {title: "Notifications & Signals", onClick: () => {}, isActive: false}
];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

getActivePage(currentTab: any) {
  for(let tab of this.tabs) {
     if( tab.title === currentTab.title) {
       tab.isActive = true
     } else {
       tab.isActive = false
     }
  }
  currentTab.onClick()
}

}
