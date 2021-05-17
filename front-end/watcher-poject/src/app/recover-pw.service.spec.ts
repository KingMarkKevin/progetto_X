import { TestBed } from '@angular/core/testing';

import { RecoverPWService } from './recover-pw.service';

describe('RecoverPWService', () => {
  let service: RecoverPWService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverPWService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
