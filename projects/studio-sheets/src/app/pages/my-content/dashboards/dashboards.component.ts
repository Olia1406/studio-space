import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from 'dist/studio-lib-prefixed/lib/components/studio-card/card.interface';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {

  dashboardsList: Array<ICard> = [
    {
      id: 11,
      contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
      cardName: 'Default dashboard',
      cardIconClass: 'bi bi-house-door-fill',
      onClick: () => {this.routeToPage('11') }
    },
    {
      id: 12,
      contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
      cardName: 'Rank sheet',
      cardIconClass: 'bi bi-house-door-fill',
      onClick: () => { }
    }
  ];
  widgetsList = [
    {
      id: 21,
      contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
      cardName: 'Rank sheet',
      cardIconClass: 'bi bi-tablet-landscape-fill',
      onClick: () => { }
    },
    {
      id: 22,
      contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
      cardName: 'My Portfolio chart',
      cardIconClass: 'bi bi-house-door-fill',
      onClick: () => { }
    }
  ];
  sharedDashboardsList = [
    {
      id: 31,
      contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
      cardName: 'Default dashboard',
      cardIconClass: 'bi bi-house-door-fill',
      onClick: () => { }
    },
    {
      id: 32,
      contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
      cardName: 'Rank sheet',
      cardIconClass: 'bi bi-house-door-fill',
      onClick: () => { }
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToPage(pagePathID: string) {
    this.router.navigateByUrl(`my-content/dashboard/${pagePathID}`)
  }

}
