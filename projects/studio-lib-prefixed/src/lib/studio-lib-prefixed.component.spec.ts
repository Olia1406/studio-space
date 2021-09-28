import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioLibPrefixedComponent } from './studio-lib-prefixed.component';

describe('StudioLibPrefixedComponent', () => {
  let component: StudioLibPrefixedComponent;
  let fixture: ComponentFixture<StudioLibPrefixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioLibPrefixedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioLibPrefixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
