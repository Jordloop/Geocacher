import { Component } from '@angular/core';
import { GoogleMapsApiService } from '../google-maps-api.service';
import { GeocacheService } from '../geocache.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css'],
  providers: [ GeocacheService, GoogleMapsApiService ]
})
export class CoordinatesComponent {
  heading = 'Search By Coordinates!';
  coordinatesResults: boolean = null;
  address: string;


  constructor(private googleMapsApi: GoogleMapsApiService) { }

  getByCoordinates(latitude: number, longitude: number) {
    this.googleMapsApi.getAddressByCoordinates(latitude, longitude).subscribe(response => {
      this.address =response.json().results[0].formatted_address;
      this.coordinatesResults = true;
      console.log(response.json());
    })
  }
}
// 45.5206322 -122.6773577
