import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import {Network, Connection} from 'ionic-native';

/*
  Generated class for the WifiPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/wifi/wifi.html',
})
export class WifiPage {

  constructor(public nav: NavController) {}

  checkNetwork(){
    var networkState: any;
    networkState = Network.connection;
    console.log(networkState);

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
    console.log(":States: ", states);
    var alert = Alert.create({
      title: "Connection Status",
      subTitle: states[networkState],
      buttons: ["Close"]
    });
    this.nav.present(alert);
  }

}
