import {Injectable} from '@angular/core';
import {Geolocation} from 'ionic-native';
import {Platform} from 'ionic-angular'
import {Observable} from 'rxjs/Observable';
import {BackgroundGeolocation} from 'ionic-native';

@Injectable()
export class LocationTracker {
  positionObserver: any;
  position: any;
  watch: any;
  platform: Platform;
  backGeolocation: any;

  constructor(platform: Platform) {
    this.positionObserver = null;
    this.platform = platform;
    this.position = Observable.create(observer => {
      this.positionObserver = observer;
    });
    this.backGeolocation = new BackgroundGeolocation;
    console.log(":constructor: ", this.backGeolocation);
  }

  startTracking() {
    console.log(":startTracking: ", BackgroundGeolocation);
    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = Geolocation.watchPosition(options);

    this.watch.subscribe((data) => {
      alert("latitude: "+data.coords.latitude);
      alert("longitude: "+data.coords.longitude);
      console.log("latitude: "+data.coords.latitude);
      console.log("longitude: "+data.coords.longitude);
      this.notifyLocation(data.coords);
    });

    let backgroundOptions = {
      desiredAccuracy: 10,
      stationaryRadius: 10,
      distanceFilter: 30
    };

    this.backGeolocation.configure((location) => {
      this.notifyLocation(location);
    }, (err) => {
      console.log(err);
    }, backgroundOptions);

    this.backGeolocation.start();

    return this.position;
  }

  stopTracking() {
    this.backGeolocation.finish();
    this.watch.unsubscribe();
  }

  notifyLocation(location) {
    this.positionObserver.next(location);
  }
}
