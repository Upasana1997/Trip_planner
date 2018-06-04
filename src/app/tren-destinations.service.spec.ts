import { TestBed, inject } from '@angular/core/testing';

import { TrenDestinationsService } from './tren-destinations.service';

describe('TrenDestinationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrenDestinationsService]
    });
  });

  it('should be created', inject([TrenDestinationsService], (service: TrenDestinationsService) => {
    expect(service).toBeTruthy();
  }));
});
