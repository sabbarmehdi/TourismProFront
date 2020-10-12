import { TestBed } from '@angular/core/testing';

import { TripTouristService } from './trip-tourist.service';

describe('TripTouristService', () => {
  let service: TripTouristService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripTouristService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
