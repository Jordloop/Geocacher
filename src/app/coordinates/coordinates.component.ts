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


  constructor(private googleMapsApi: GoogleMapsApiService) { }

  getByCoordinates(latitude: number, longitude: number) {
    this.googleMapsApi.getAddressByCoordinates(latitude, longitude).subscribe(response => {
      console.log(response.json().results[0].address_components[0].long_name);
      console.log(response.json());
    })
  }

}
