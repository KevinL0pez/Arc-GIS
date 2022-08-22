import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { EsriMapService} from './esri-map.service';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})

export class EsriMapComponent implements OnInit {

  // Private vars with default values
  private _zoom = 10;
  private _center = [0.1278, 51.5074];
  private _basemap = 'streets';

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Input()
  set center(center: any[]) {
    this._center = center;
  }

  get center(): any[] {
    return this._center;
  }

  @Input()
  set basemap(basemap: string) {
    this._basemap = basemap;
  }

  get basemap(): string {
    return this._basemap;
  }

  @Output() mapLoaded = new EventEmitter<boolean>();

  // this is needed to be able to create the MapView at the DOM element in this component
  @ViewChild('mapViewNode', { static: true }) public mapViewEl!: ElementRef;

  constructor(private esriMapService: EsriMapService) { }

  public ngOnInit() {

    this.esriMapService.loadMap(this._basemap, this._center, this._zoom, this.mapViewEl)
      .then((r) => {
        console.log(r);
        this.mapLoaded.emit(true);
      });
  } // ngOnInit

}

