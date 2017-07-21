import { Injectable } from '@angular/core';
import { geoKey } from './api-keys';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GeocacheService } from './geocache.service';

@Injectable()
export class GoogleMapsApiService {

  constructor(private http: Http, private photoService: GeocacheService) { }

  getAddressByCoordinates(latitude: number, longitude: number) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=" + geoKey);
 }

}
