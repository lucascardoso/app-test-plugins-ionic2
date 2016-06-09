import {Component} from '@angular/core';
import {Page, NavController, Alert} from 'ionic-angular';
import {LocationTracker} from '../../providers/location-tracker/location-tracker';

/*
  Generated class for the GeolocationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/geolocation/geolocation.html',
  providers: [LocationTracker]
})
export class GeolocationPage {
  tracker: LocationTracker;
  latitude: any;
  longitude: any;

  /*static get parameters(){
    return [[LocationTracker]];
  }*/

  constructor(public nav: NavController, tracker: LocationTracker) {
    this.tracker = tracker;
  }

  start() {
    this.tracker.startTracking().subscribe((position) => {
        console.log(":start:", position.coords.latitude);
        console.log(":start:", position.coords.longitude);
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        var alert = Alert.create({
          title: "Coordenadas posição",
          subTitle: "Latitude: "+position.coords.latitude+" Longitude: "+position.coords.longitude,
          buttons: ["Close"]
        });
        this.nav.present(alert);
    });
  }

  stop() {
    this.tracker.stopTracking();
  }
}
