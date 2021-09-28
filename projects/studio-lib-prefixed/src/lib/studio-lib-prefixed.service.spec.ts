import { TestBed } from '@angular/core/testing';

import { StudioLibPrefixedService } from './studio-lib-prefixed.service';

describe('StudioLibPrefixedService', () => {
  let service: StudioLibPrefixedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudioLibPrefixedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
