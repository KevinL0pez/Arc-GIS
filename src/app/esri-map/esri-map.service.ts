import { ElementRef, Injectable } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Injectable()
export class EsriMapService {
  constructor() {}

  loadMap(
    basemap: string,
    center: Array<number>,
    zoom: number,
    mapContainer: ElementRef
  ) {
    const promise = new Promise((resolve, reject) => {
      loadModules(['esri/Map', 'esri/views/MapView'])
        .then(([EsriMap, EsriMapView]) => {
          const map: esri.Map = new EsriMap({
            basemap,
          });

          const mapView: esri.MapView = new EsriMapView({
            container: mapContainer.nativeElement,
            center,
            zoom,
            map,
          });

          mapView.when(
            () => {
              // All the resources in the MapView and the map have loaded. Now execute additional processes
              resolve('true');
            },
            (err: any) => {
              console.error(err);
              reject(err);
            }
          );
        })
        .catch((err: any) => {
          console.error(err);
          reject(err);
        });
    });

    return promise;
  }
}
