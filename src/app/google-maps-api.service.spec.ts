import { TestBed, inject } from '@angular/core/testing';

import { GoogleMapsApiService } from './google-maps-api.service';

describe('GoogleMapsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleMapsApiService]
    });
  });

  it('should ...', inject([GoogleMapsApiService], (service: GoogleMapsApiService) => {
    expect(service).toBeTruthy();
  }));
});
