import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'st-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

@Input() contentItemName = 'Dashboards';
@Input() contentItemDescription = 'Add your favorite files'

  constructor() { }

  ngOnInit(): void {
  }

}
