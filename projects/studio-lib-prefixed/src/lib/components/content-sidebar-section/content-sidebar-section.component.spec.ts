import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { ContentSidebarSectionComponent } from './content-sidebar-section.component';
import {DropdownDataService} from "./dropdown-data.service";
import {BehaviorSubject} from "rxjs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {By} from "@angular/platform-browser";

describe('ContentSidebarSectionComponent', () => {
  let component: ContentSidebarSectionComponent;
  let fixture: ComponentFixture<ContentSidebarSectionComponent>;
  let dropdownDataServStub: Partial<DropdownDataService>;
  let dropdownDataServ: DropdownDataService;
  const mockSectionData = [
    {
      displaySectionHeader: true,
      sectionHeaderName: 'Common params',
      displayFilters: 'show',
      dropdownDataList: [
        {
          name: 'd1',
          dropdownHeader: 'First dropdown',
          dropdownValue: 'one',
          filter: false,
          filterby: 'value',
          placeholder: 'select item',
          dropdownItems: [
            { label: 'alpine', value: 'ag-theme-alpine' },
            { label: 'balham', value: 'ag-theme-balham' },
            { label: 'fresh', value: 'ag-theme-fresh' },
            { label: 'material', value: 'ag-theme-material' }
          ]
        },
        {
          name: 'd2',
          dropdownHeader: 'Second dropdown',
          dropdownValue: 'two',
          filter: false,
          filterby: 'value',
          placeholder: 'select another item',
          dropdownItems: [
            { label: 'alpine', value: 'ag-theme-alpine' },
            { label: 'balham', value: 'ag-theme-balham' },
            { label: 'fresh', value: 'ag-theme-fresh' },
            { label: 'material', value: 'ag-theme-material' }
          ]
        }
      ]
    },
    {
      displaySectionHeader: false,
      sectionHeaderName: 'Another category',
      displayFilters: 'show',
      dropdownDataList: [
        {
          name: 'd3',
          dropdownHeader: 'Third dropdown',
          dropdownValue: 'three',
          filter: true,
          filterby: 'value',
          placeholder: 'select item',
          dropdownItems: [
            { label: 'alpine', value: 'ag-theme-alpine' },
            { label: 'balham', value: 'ag-theme-balham' },
            { label: 'fresh', value: 'ag-theme-fresh' },
            { label: 'material', value: 'ag-theme-material' }
          ]
        }
      ]
    }
  ];

  beforeEach(async () => {
    dropdownDataServStub = {filterValuesList: new BehaviorSubject<any>({})}
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ ContentSidebarSectionComponent ],
      providers: [{ provide: DropdownDataService, useValue: dropdownDataServStub }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSidebarSectionComponent);
    component = fixture.componentInstance;
    dropdownDataServ = TestBed.inject(DropdownDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'method "getDropdownValuesList" returns correct result', () => {
    const expectedResult = {d1: 'one', d2: 'two', d3: 'three'};

    const result = component.getDropdownValuesList(mockSectionData);

    expect(result).toEqual(expectedResult)
  })

  it( 'method "onChange" changes behaviorSubject properly in service', () => {
    const expectedResult = {d1: 'one', d2: 'two', d3: 'three'};
    component.filterSectionData = mockSectionData;

    component.onChange();

    dropdownDataServ.filterValuesList.subscribe( value => {
      expect(value).toEqual(expectedResult)
    })
  })

  it('has a proper count of sections', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const sections = fixture.debugElement.queryAll(By.css('.filters-container'));

    expect(sections.length).toBe(component.filterSectionData.length)
  })

  it('there is a proper count of dropdowns in template', () => {
    component.filterSectionData = mockSectionData;
    component.ngOnInit();
    fixture.detectChanges();

    const dropdowns = fixture.debugElement.queryAll(By.css('p-dropdown'));

    expect(Object.keys(component.getDropdownValuesList(component.filterSectionData)).length).toBe(dropdowns.length);
  })

  it('first section header has proper text content', () => {
    component.filterSectionData = mockSectionData;
    component.ngOnInit();
    fixture.detectChanges();

    const sections = fixture.debugElement.queryAll(By.css('.parameters-title'));

    expect(sections[0].nativeNode.innerText).toContain('Common params');
  })

});
