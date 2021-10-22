import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-rank-sheets',
  templateUrl: './rank-sheets.component.html',
  styleUrls: ['./rank-sheets.component.scss']
})
export class RankSheetsComponent implements OnInit {
  rankSheetData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.rankSheetData = this.dataService.transformNestedData(this.dataService.nestedData);
    console.log('data', this.dataService.nestedData);
    console.log('transformed', this.rankSheetData);
  }

}
