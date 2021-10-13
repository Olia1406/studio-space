import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Card, StudioCardComponent } from 'studio-lib-prefixed';

import { DashboardsComponent } from './dashboards.component';

describe('DashboardsComponent', () => {
  let component: DashboardsComponent;
  let fixture: ComponentFixture<DashboardsComponent>;
  let cards: Array<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    cards =  [
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

  it('should contain list title "My dashboards"', () => {
    const dashboardElement: HTMLElement = fixture.nativeElement;
    const title = dashboardElement.querySelectorAll('h3')[0];

    expect(title.textContent).toContain('My dashboards')
  })

  it('should have proper count of card-elements', () => {
    const cardComponents = fixture.debugElement.queryAll(By.directive(StudioCardComponent));

    component.dashboardsList = cards;
    fixture.detectChanges();

    expect(cardComponents.length).toBe(3);
  })

});
