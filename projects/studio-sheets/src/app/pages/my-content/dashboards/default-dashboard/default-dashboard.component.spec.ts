import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { DefaultDashboardComponent } from './default-dashboard.component';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {BehaviorSubject, from, Observable, of} from "rxjs";
import {HomeComponent} from "../../../home/home.component";

describe('DefaultDashboardComponent', () => {
  let component: DefaultDashboardComponent;
  let fixture: ComponentFixture<DefaultDashboardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultDashboardComponent ],
      imports: [RouterTestingModule.withRoutes([{path: 'some/:id', component: HomeComponent}])],
      providers: [  {
        provide: ActivatedRoute,
        useValue: {
          params: of([{id: 1}]),
        },
      },]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(DefaultDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('constructor listens router events changes and gets dashboardId from url', fakeAsync(() => {
    const actRoute = new ActivatedRoute();
    const comp = new DefaultDashboardComponent(router, actRoute);
    let currentId : string | null;

    router.navigateByUrl(`some/3`);
    tick(1000);
    fixture.detectChanges();

    router.events.subscribe((ev) => {
      if( ev instanceof NavigationEnd) {
        currentId = actRoute.snapshot.paramMap.get('id');
        console.log(currentId)
        expect(component.dashboardID).toBe(currentId)
      }
    })
  }))

});
