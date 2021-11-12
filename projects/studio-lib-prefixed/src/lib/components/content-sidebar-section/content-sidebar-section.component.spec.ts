import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSidebarSectionComponent } from './content-sidebar-section.component';

describe('ContentSidebarSectionComponent', () => {
  let component: ContentSidebarSectionComponent;
  let fixture: ComponentFixture<ContentSidebarSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSidebarSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSidebarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
