import {Component} from '@angular/core';
import {InAppBrowser} from 'ionic-native';
import {Page, NavController, Platform} from 'ionic-angular';
import {Generic} from '../../providers/generic/generic';


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
    providers: [Generic]
})
export class LoginPage {
  platform: any;
  nav: any;
  appBrowser: any;
  generic: any;

  constructor(platform: Platform, generic: Generic) {
    this.platform = platform;
    platform.ready().then(() => {
      this.appBrowser = InAppBrowser;
      this.generic = generic;
    });
    console.log("plataform: ", platform.platforms());
  }

  facebookLogin() {
    var win :any;
    if (this.platform.is('mobileweb')){
      alert("entrou");
      win = this.appBrowser.open
    } else{
      alert("entrou 2");
      win = (url, x, y) => {
        var x :any;
        x = document.createElement('iframe');
        x.href = url;
        return x;
      }
    }
    var browserRef = win("https://www.facebook.com/v2.6/dialog/oauth?client_id=" + "283050272042689" + "&redirect_uri=http://localhost/callback&response_type=token&scope=email", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
    console.log(":facebookLogin: ", browserRef);
    browserRef.addEventListener("loadstart", (event) => {
      console.log(":eventUrl:", (event));
      this.generic.showMessage("URL", window.location);
      if ((event.url).indexOf("http://localhost/callback") === 0) {
        browserRef.removeEventListener("exit", (event) => {});
        browserRef.close();
        var responseParameters = ((event.url).split("#")[1]).split("&");
        var parsedResponse = {};
        for (var i = 0; i < responseParameters.length; i++) {
          parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
        }
        if (parsedResponse["access_token"] !== undefined && parsedResponse["access_token"] !== null) {
          this.generic.showMessage("Success login", parsedResponse);
        } else {
          this.generic.showMessage("Error login", "Problem authenticating with Facebook");
        }
      }
    });

    browserRef.addEventListener("exit", function(event) {
      this.generic.showMessage("Error login", "The Facebook sign in flow was canceled");
    });
  }
}
