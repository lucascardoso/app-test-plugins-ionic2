import {Component} from '@angular/core';
import {SocialSharing} from 'ionic-native';
import {Page, NavController, Platform} from 'ionic-angular';
import {Generic} from '../../providers/generic/generic';

/*
  Generated class for the SocialPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/social/social.html',
  providers: [Generic]
})
export class SocialPage {
  socialSharing: any;
  platform: any;
  generic: any;

  constructor(platform: Platform, generic: Generic) {
    platform.ready().then(() => {
      this.socialSharing = SocialSharing;
    });
    this.platform = platform;
    this.generic = generic;
  }

  share(message, subject, file, link) {
    this.socialSharing.share(message, subject, file, link);
  }

  shareViaTwitter(message, image, link) {
    console.log(":shareViaTwitter:", this.socialSharing);
    this.socialSharing.canShareVia("twitter", message, null, image, link, (result) => {
      this.socialSharing.shareViaTwitter(message, image, link);
    }, (error) => {
      this.generic.showMessage("Twitter", "Para compartilhar com o twitter necessita ter instalado o mesmo no dispositivo");
      console.error(error);
    });
  }

  shareViaFacebook(message, image, link) {
    console.log(":shareViaFacebook:", this.socialSharing);
    this.socialSharing.canShareVia("facebook", message, null, image, link, (result) => {
      this.socialSharing.shareViaFacebook(message, image, link);
    }, (error) => {
      this.generic.showMessage("Facebook", "Para compartilhar com o facebook necessita ter instalado o mesmo no dispositivo");
      console.error(error);
    });
  }

  shareViaWhatsApp(message, image, link) {
    console.log("Generic: ", this.generic);
    console.log(":shareViaWhatsApp:", this.socialSharing);
    this.socialSharing.canShareVia("whatsapp", message, null, image, link, (result) => {
      this.socialSharing.shareViaWhatsApp(message, image, link);
    }, (error) => {
      this.generic.showMessage("WhatsApp", "Para compartilhar com o WhatsApp necessita ter instalado o mesmo no dispositivo");
      console.error(error);
    });
  }
}
