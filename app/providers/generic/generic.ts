import {Injectable} from '@angular/core';
import {NavController, Alert, Platform} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Generic provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Generic {
  nav: any;

  constructor(nav: NavController) {
    this.nav = nav;
  }

  showMessage(title, message){
    var alert = Alert.create({
      title: title,
      subTitle: message,
      buttons: ["Close"]
    });
    this.nav.present(alert);
  }

  captalizeName(value: String) {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
   }
}
