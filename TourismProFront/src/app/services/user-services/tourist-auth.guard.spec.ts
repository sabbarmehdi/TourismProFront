import { TestBed } from '@angular/core/testing';

import { TouristAuthGuard } from './tourist-auth.guard';

describe('TouristAuthGuard', () => {
  let guard: TouristAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TouristAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
