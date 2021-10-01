import {Component, Input, OnInit} from '@angular/core';
import {ITab} from "./tab.interface";

@Component({
  selector: 'st-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent implements OnInit {
@Input() tabs:ITab[] = [
  {title: "Some", onClick: () => {}},
  {title: "My Content", onClick: () => {}},
  {title: "Discover", onClick: () => {}},
  {title: "Create", onClick: () => {}},
  {title: "Notifications & Signals", onClick: () => {}}
];
  constructor() { }

  ngOnInit(): void {
  }

}
