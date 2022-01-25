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

  it('method "getDropDownList" returns a proper list for dropdowns', () => {
    const mockData = [
      {id: 'id1', name: 'name1', title: 'title1'},
      {id: 'id2', name: 'name2', title: 'title2'},
      {id: 'id3', name: 'name3', title: 'title3'}
    ]
    const getFieldValuesListSpy = spyOn(component, 'getFieldValuesList');
    const arrOfVals = ['name1', 'name2', 'name3'];

    getFieldValuesListSpy.and.returnValue(arrOfVals);

    expect(component.getDropDownList(mockData, 'name')).toEqual([
      {label: 'name1', value: 'name1'},
      {label: 'name2', value: 'name2'},
      {label: 'name3', value: 'name3'}
    ])
    expect(getFieldValuesListSpy).toHaveBeenCalledWith(mockData, 'name');
  });

});
