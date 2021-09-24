import { TestBed } from '@angular/core/testing';

import { CastlerService } from './castler.service';

describe('CastlerService', () => {
  let service: CastlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
