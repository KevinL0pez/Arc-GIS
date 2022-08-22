import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Set our map properties
  mapCenter = [-74.081178, 4.701009];
  basemapType = 'streets-navigation-vector';
  mapZoomLevel = 13;

  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }
}
