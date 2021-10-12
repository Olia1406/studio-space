import { Injectable } from '@angular/core';
import { Card } from 'projects/studio-lib-prefixed/src/lib/components/studio-card/card.interface';
// import { ICard } from 'dist/studio-lib-prefixed/lib/components/studio-card/card.interface';


@Injectable({
  providedIn: 'root'
})
export class DashboardsService {

  dashboardsList: Array<Card> = [
    {
      id: 11,
      contentItemSrc: '',
      cardName: 'Default dashboard',
      cardIconClass: 'bi bi-house-door-fill'
    },
    {
      id: 12,
      contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
      cardName: 'Rank sheet',
      cardIconClass: 'bi bi-house-door-fill'
    },
    {
      id: 13,
      contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
      cardName: 'Rank sheet',
      cardIconClass: 'bi bi-house-door-fill'
    }
  ];
  widgetsList: Array<Card> = [
    {
      id: 21,
      contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
      cardName: 'Rank sheet',
      cardIconClass: 'bi bi-tablet-landscape-fill'
    },
    {
      id: 22,
      contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
      cardName: 'My Portfolio chart',
      cardIconClass: 'bi bi-house-door-fill'
    }
  ];
  sharedDashboardsList: Array<Card> = [
    {
      id: 31,
      contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
      cardName: 'Default dashboard',
      cardIconClass: 'bi bi-house-door-fill'
    },
    {
      id: 32,
      contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
      cardName: 'Rank sheet',
      cardIconClass: 'bi bi-house-door-fill'
    }
  ];

  constructor() { }

  getDashboards(): Array<Card> {
    return this.dashboardsList
  }
  getWidgets(): Array<Card> {
    return this.widgetsList
  }
  getSharedDAshboards(): Array<Card> {
    return this.sharedDashboardsList
  }

}
