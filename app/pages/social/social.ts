import {Component} from '@angular/core';
import {SocialSharing} from 'ionic-native';
import {Page, NavController, Platform} from 'ionic-angular';

/*
  Generated class for the SocialPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/social/social.html'
})
export class SocialPage {
  socialSharing: any;
  platform: any;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      this.socialSharing = SocialSharing;
    });
    this.platform = platform;
  }

  share(message, subject, file, link) {
    this.socialSharing.share(message, subject, file, link);
  }

  shareViaTwitter(message, image, link) {
    console.log(":shareViaTwitter:", this.socialSharing);
    this.socialSharing.canShareVia("twitter", message, null, image, link, (result) => {
      SocialSharing.shareViaTwitter(message, image, link);
    }, (error) => {
      console.error(error);
    });
  }
}
