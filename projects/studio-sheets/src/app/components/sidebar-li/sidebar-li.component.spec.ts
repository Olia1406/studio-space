import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLiComponent } from './sidebar-li.component';

describe('SidebarLiComponent', () => {
  let component: SidebarLiComponent;
  let fixture: ComponentFixture<SidebarLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarLiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
