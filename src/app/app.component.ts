import { Component, NgZone } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { HomeComponent } from './home/home.component';

@Component({
  selector: 'ion-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootPage:any;

  // Configuration of the time picker (format 12H with a default date and time)
  //private config = { hour: 7, minute: 15, meriden: 'PM', format: 12 };

  constructor(
    private ngZone: NgZone,
    private platform:Platform,
    private statusBar:StatusBar,
    private splashScreen:SplashScreen,
    private push: Push
  ) {
    window['ngAppComponent'] = {
      zone: this.ngZone,
      component: this,
      cordovaReady: () => this.cordovaReady()
    };
  }

  cordovaReady():void {
    // make sure the cordova device ready event is fired before invoking ionic plugin
    console.log("cordova device ready event received by Angular");
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("ionic platform ready");
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // to check if we have permission
      this.push.hasPermission()
      .then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }
      });

      this.ngZone.run(() => {
        console.log("navigating to Home Component until Cordova is ready");
        this.rootPage = HomeComponent;
      })
    });
  }
}
