import {TestBed } from '@angular/core/testing';

import { DropdownDataService } from './dropdown-data.service';

describe('DropdownDataService', () => {
  let service: DropdownDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('behaviourSubject returns a correct value', () => {
    const mockDropdownsValuesList = {d1: 'first value', d2: 'second value'};

    service.filterValuesList.next(mockDropdownsValuesList);

    service.filterValuesList.subscribe( result => {
      expect(result).toBe(mockDropdownsValuesList)
    })
  })

});
