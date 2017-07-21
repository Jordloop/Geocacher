import { Component } from '@angular/core';
import { GoogleMapsApiService } from '../google-maps-api.service';
import { GeocacheService } from '../geocache.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [ GoogleMapsApiService, GeocacheService ]
})
export class AddressComponent {
  heading = 'Search By Address!';
  addressResults: boolean = null;
  longitude: number;
  latitude: number;
  constructor(private googleMapsApi: GoogleMapsApiService) { }

  getByAddress(address: string ) {
    this.googleMapsApi.getCoordinatesByAddress(address).subscribe(response => {
      this.latitude = response.json().results[0].geometry.location.lat;
      this.longitude = response.json().results[0].geometry.location.lng;
      this.addressResults = true;
    })
  }
}
