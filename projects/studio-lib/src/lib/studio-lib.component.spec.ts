import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioLibComponent } from './studio-lib.component';

describe('StudioLibComponent', () => {
  let component: StudioLibComponent;
  let fixture: ComponentFixture<StudioLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
