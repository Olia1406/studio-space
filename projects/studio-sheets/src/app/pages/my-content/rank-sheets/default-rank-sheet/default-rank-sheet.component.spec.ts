import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRankSheetComponent } from './default-rank-sheet.component';

describe('DefaultRankSheetComponent', () => {
  let component: DefaultRankSheetComponent;
  let fixture: ComponentFixture<DefaultRankSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultRankSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultRankSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
