import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { regulrUserGuard } from './regulr-user.guard';

describe('regulrUserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => regulrUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
