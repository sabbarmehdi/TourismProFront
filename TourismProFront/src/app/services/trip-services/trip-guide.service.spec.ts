import { TestBed } from '@angular/core/testing';

import { TripGuideService } from './trip-guide.service';

describe('TripGuideService', () => {
  let service: TripGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
