import { TestBed } from '@angular/core/testing';

import { StudioLibService } from './studio-lib.service';

describe('StudioLibService', () => {
  let service: StudioLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudioLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
