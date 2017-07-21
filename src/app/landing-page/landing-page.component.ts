import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

    content = 'Nulla massa est, luctus vitae porta quis, ultricies ac lectus. Sed faucibus dui id lectus rhoncus porttitor. Vestibulum quis tortor sapien. Mauris laoreet massa a semper gravida. Integer vulputate nec diam at accumsan. Maecenas non arcu nisi. Ut at mi maximus, gravida sem non, laoreet enim. In vitae odio eget dui placerat mattis. Duis in leo sit amet felis venenatis maximus. Suspendisse ex urna, cursus sit amet odio nec, faucibus congue orci.'
  constructor() { }

  ngOnInit() {
  }

}
