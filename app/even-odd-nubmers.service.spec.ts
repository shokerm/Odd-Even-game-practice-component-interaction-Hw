import { TestBed } from '@angular/core/testing';

import { EvenOddNubmersService } from './even-odd-nubmers.service';

describe('EvenOddNubmersService', () => {
  let service: EvenOddNubmersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenOddNubmersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
