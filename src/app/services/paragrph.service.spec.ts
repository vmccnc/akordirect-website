import { TestBed } from '@angular/core/testing';

import { ParagrphService } from './paragrph.service';

describe('ParagrphService', () => {
  let service: ParagrphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParagrphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
