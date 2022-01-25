import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { RankSheetsComponent } from './rank-sheets.component';
import {RouterTestingModule} from "@angular/router/testing";
import { routes } from "../../../../app/app-routing.module"
import {Router} from "@angular/router";
import {Location} from "@angular/common";

describe('RankSheetsComponent', () => {
  let component: RankSheetsComponent;
  let fixture: ComponentFixture<RankSheetsComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ RankSheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(RankSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method "routeToPage" navigates to appropriate page', fakeAsync(() => {
    component.routeToPage('1');
    tick();
    expect(location.path()).toBe('/my-content/rank-sheet/1')
  }));


});
