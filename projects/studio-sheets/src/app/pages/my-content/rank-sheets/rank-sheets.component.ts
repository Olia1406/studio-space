import { Component, OnInit} from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { Card } from 'studio-lib-prefixed';

@Component({
  selector: 'app-rank-sheets',
  templateUrl: './rank-sheets.component.html',
  styleUrls: ['./rank-sheets.component.scss']
})
export class RankSheetsComponent implements OnInit {
  rankSheetList: Array<Card>;

  constructor(private dataService: DataService, private router: Router) {
    this.rankSheetList = this.dataService.rankSheetList; 
  }

  ngOnInit(): void {
  }

  routeToPage(pagePathID: number | string) {
    this.router.navigateByUrl(`my-content/rank-sheet/${pagePathID}`)
  }


}
