import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Card, ContentHeaderComponent, StudioCardComponent } from 'studio-lib-prefixed';

import { DashboardsComponent } from './dashboards.component';
import { DashboardsService } from './dashboards.service';

fdescribe('DashboardsComponent', () => {
  let component: DashboardsComponent;
  let fixture: ComponentFixture<DashboardsComponent>;
  let CARDS: Array<Card>;
  let mockDashboardsService: any;
  let mockRouter; 

  beforeEach(async () => {
    mockDashboardsService = jasmine.createSpyObj(['getDashboards', 'getWidgets', 'getSharedDAshboards']);
    mockRouter = jasmine.createSpyObj(['navigateByUrl']);
    await TestBed.configureTestingModule({
      imports: [Router],
      declarations: [
        DashboardsComponent,
        StudioCardComponent,
        ContentHeaderComponent
      ],
      providers: [
        {provide: DashboardsService, useValue: mockDashboardsService},
        {provide: Router, usevalue: mockRouter}
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
      },
      {
        id: 13,
        contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
        cardName: 'Rank sheet',
        cardIconClass: 'bi bi-house-door-fill'
      }
    ];
    fixture = TestBed.createComponent(DashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('should set dashboardsList correctly from the service', () => {
    mockDashboardsService.getDashboards.and.returnValue(CARDS);
    fixture.detectChanges();

    expect(component.dashboardsList.length).toBe(3);
  })

  it('should contain list title "My dashboards"', () => {
    const dashboardElement: HTMLElement = fixture.nativeElement;
    const title = dashboardElement.querySelectorAll('h3')[0];

    expect(title.textContent).toContain('My dashboards')
  })

  it('should have proper count of card-elements', () => {
    mockDashboardsService.getDashboards.and.returnValue(CARDS);
    fixture.detectChanges();

    const cardsInDashboardsList = fixture.debugElement.queryAll(By.css('.dashboard-items-container'))[0].children;
    
    expect(cardsInDashboardsList.length).toBe(3);
    expect(cardsInDashboardsList[0].componentInstance.cardData.cardName).toEqual('Default dashboard');
  })

});
