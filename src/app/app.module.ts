import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { EsriMapService } from './esri-map/esri-map.service';

@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EsriMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
