import {Page, NavController, Alert, Platform} from 'ionic-angular';
import {Component} from "@angular/core";
import {BarcodeScanner} from "ionic-native";
import {WifiPage} from "../wifi/wifi";
import {GeolocationPage} from "../geolocation/geolocation";
import {SocialPage} from "../social/social";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  platform: Platform;
  nav: NavController;
  mensagem: any = "";

  constructor(platform: Platform, navController: NavController) {
    this.platform = platform;
    this.nav = navController;
    this.mensagem = "nada";
  }

  scan() {
    BarcodeScanner.scan().then((barcodeData) => {
      this.mensagem = "Scan Results: "+ barcodeData.text;
      var success = Alert.create({
        title: "Scan Results",
        subTitle: barcodeData.text,
        buttons: ["Close"]
      });
      this.nav.present(success);
    }, (error) => {
      var err = Alert.create({
        title: "Attention!",
        subTitle: error,
        buttons: ["Close"]
      });
      this.nav.present(err);
    });
  }

  goToWifi(){
    this.nav.push(WifiPage);
  }

  goToBackGroundGeolocation(){
    this.nav.push(GeolocationPage);
    console.log("Nav: ", this.nav);
  }

  goToSocial(){
    this.nav.push(SocialPage);
  }
}
