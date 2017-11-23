import { TestBed, inject } from '@angular/core/testing';

import { DealdayService } from './dealday.service';

describe('DealdayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealdayService]
    });
  });

  it('should be created', inject([DealdayService], (service: DealdayService) => {
    expect(service).toBeTruthy();
  }));
});
