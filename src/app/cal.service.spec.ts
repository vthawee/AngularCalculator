/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalService } from './cal.service';

describe('CalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalService]
    });
  });

  it('should ...', inject([CalService], (service: CalService) => {
    expect(service).toBeTruthy();
  }));
});
