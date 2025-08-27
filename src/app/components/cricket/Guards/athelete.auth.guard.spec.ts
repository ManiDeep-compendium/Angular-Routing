import { TestBed } from '@angular/core/testing';

import { AtheleteAuthGuard } from './athelete.auth.guard';

describe('AtheleteAuthGuard', () => {
  let guard: AtheleteAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AtheleteAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
