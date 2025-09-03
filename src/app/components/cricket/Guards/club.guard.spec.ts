import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { clubGuard } from './club.guard';

describe('clubGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => clubGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
