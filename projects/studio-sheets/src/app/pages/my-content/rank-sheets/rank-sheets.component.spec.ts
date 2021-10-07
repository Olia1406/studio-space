import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankSheetsComponent } from './rank-sheets.component';

describe('RankSheetsComponent', () => {
  let component: RankSheetsComponent;
  let fixture: ComponentFixture<RankSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankSheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
