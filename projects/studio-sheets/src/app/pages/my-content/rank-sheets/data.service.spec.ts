import { TestBed } from '@angular/core/testing';
import { MobiusData } from './data.interface';

import { DataService } from './data.service';
import * as mockMobiusData from '../../../../assets/mockData.json'
import * as transformedMockMobiusData from '../../../../assets/transformedMockData.json'

describe('DataService', () => {
  let service: DataService;
  let mockData: Array<any> = (mockMobiusData as any).default;
  let transformedMockData: Array<MobiusData> = (transformedMockMobiusData as any).default;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#fromNestedToOneLevel returns proper value', () => {

    expect(service.fromNestedToOneLevel(mockData)).toEqual(transformedMockData)
  })


});
