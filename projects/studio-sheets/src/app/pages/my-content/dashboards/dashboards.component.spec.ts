import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Card, ContentHeaderComponent, StudioCardComponent } from 'studio-lib-prefixed';

import { DashboardsComponent } from './dashboards.component';
import { DashboardsService } from './dashboards.service';
import {RouterTestingModule} from "@angular/router/testing";

describe('DashboardsComponent', () => {
  let component: DashboardsComponent;
  let fixture: ComponentFixture<DashboardsComponent>;
  let CARDS: Array<Card>;
  let mockDashboardsService: any;

  beforeEach(async () => {
    mockDashboardsService = jasmine.createSpyObj(['getDashboards', 'getWidgets', 'getSharedDashboards']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        DashboardsComponent,
        StudioCardComponent,
        ContentHeaderComponent
      ],
      providers: [
        {provide: DashboardsService, useValue: mockDashboardsService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    CARDS =  [
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
      }
    ];
    fixture = TestBed.createComponent(DashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component is created', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('dashboardsList is set correctly from the service', () => {
    mockDashboardsService.getDashboards.and.returnValue(CARDS);
    component.ngOnInit();

    expect(component.dashboardsList.length).toBe(2);
  })

  it('contain list title "My dashboards"', () => {
    const dashboardElement: HTMLElement = fixture.nativeElement;
    const title = dashboardElement.querySelectorAll('#my-dashboards-title')[0];

    expect(title.textContent).toContain('My dashboards')
  })

  it('has proper count of card-elements', () => {
    mockDashboardsService.getDashboards.and.returnValue(CARDS);
    component.ngOnInit();
    fixture.detectChanges();

    const cardsInDashboardsList = fixture.debugElement.queryAll(By.css('.dashboard-items-container'))[0].children;

    expect(cardsInDashboardsList.length).toBe(2);
  })

  it('first cart has correct title', () => {
    mockDashboardsService.getDashboards.and.returnValue(CARDS);
    component.ngOnInit();
    fixture.detectChanges();

    const cardsInDashboardsList = fixture.debugElement.queryAll(By.css('.dashboard-items-container'))[0].children;

    expect(cardsInDashboardsList[0].componentInstance.cardData.cardName).toEqual('Default dashboard');
  })

});
