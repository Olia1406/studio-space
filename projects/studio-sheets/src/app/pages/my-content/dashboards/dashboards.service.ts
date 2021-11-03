import { Injectable } from '@angular/core';
import { Card } from 'projects/studio-lib-prefixed/src/lib/components/studio-card/card.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService {

  dashboardsList: Array<Card> = [
    {
      id: '​fa1270e7-7a7d-43b2-9cb0-631e7a05d7fc​',
      contentItemSrc: 'dashboard.png',
      cardName: 'Default dashboard',
      cardIconClass: 'bi bi-house-door-fill'
    },
    {
      id: '​d84c161a-c96d-4fd1-bccd-b107da0c31be​',
      contentItemSrc: 'd-multiple.png',
      cardName: 'Rank sheet',
      cardIconClass: 'bi bi-house-door-fill'
    },
    {
      id: '​64e1c2cb-bfdb-442d-a980-a5f117173b07​',
      contentItemSrc: 'd-2.jpg',
      cardName: 'Rank sheet',
      cardIconClass: 'bi bi-house-door-fill'
    }
  ];
  widgetsList: Array<Card> = [
    {
      id: '​64e1c2cb-bfdb-442d-a980-a5f117173b07​',
      contentItemSrc: 'd-multiple.png',
      cardName: 'Rank sheet',
      cardIconClass: 'bi bi-tablet-landscape-fill'
    },
    {
      id: '​64e1c2cb-bfdb-442d-a980-a5f117173b07​',
      contentItemSrc: 'financial.png',
      cardName: 'My Portfolio chart',
      cardIconClass: 'bi bi-house-door-fill'
    }
  ];
  sharedDashboardsList: Array<Card> = [
    {
      id:  '​64e1c2cb-bfdb-442d-a980-a5f117173b07​',
      contentItemSrc: 'sheet.png',
      cardName: 'Default dashboard',
      cardIconClass: 'bi bi-house-door-fill'
    },
    {
      id:  '​64e1c2cb-bfdb-442d-a980-a5f117173b07​',
      contentItemSrc: 'datatable.png',
      cardName: 'Rank sheet',
      cardIconClass: 'bi bi-house-door-fill'
    }
  ];
  // contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',

  constructor() { }

  getDashboards(): Array<Card> {
    return this.dashboardsList
  }
  getWidgets(): Array<Card> {
    return this.widgetsList
  }
  getSharedDashboards(): Array<Card> {
    return this.sharedDashboardsList
  }

}
