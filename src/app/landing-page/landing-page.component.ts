import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

    byAddress = "Search a location by address the location's latitude and longitude values will be returned.";
    byCoordinate = "Search a location by latitude and longitude values and location's address will be returned.";
  constructor() { }

  ngOnInit() {
  }

}
