import { TestBed, inject } from '@angular/core/testing';

import { FetchFlightsService } from './fetch-flights.service';

describe('FetchFlightsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchFlightsService]
    });
  });

  it('should be created', inject([FetchFlightsService], (service: FetchFlightsService) => {
    expect(service).toBeTruthy();
  }));
});
