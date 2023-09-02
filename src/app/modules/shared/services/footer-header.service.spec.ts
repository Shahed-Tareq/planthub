import { TestBed } from '@angular/core/testing';

import { FooterHeaderService } from './footer-header.service';

describe('FooterHeaderService', () => {
  let service: FooterHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
