import { TestBed } from '@angular/core/testing';

import { GuideAuthGuard } from './guide-auth.guard';

describe('GuideAuthGuard', () => {
  let guard: GuideAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuideAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
