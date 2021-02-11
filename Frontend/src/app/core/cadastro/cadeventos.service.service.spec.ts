import { TestBed } from '@angular/core/testing';

import { Cadeventos.ServiceService } from './cadeventos.service.service';

describe('Cadeventos.ServiceService', () => {
  let service: Cadeventos.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cadeventos.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
