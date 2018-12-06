import { Component, NgZone } from '@angular/core';

import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { HomeComponent } from './home/home.component';
import { RestService } from './rest.service';
import { environment } from '../environments/environment';
import { ActivitiesComponent } from './activities/activities.component';

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
    private push: Push,
    private restService: RestService,
    private events : Events
  ) {
    console.log(`creating ${this.constructor.name}`);

    window['ngAppComponent'] = {
      zone: this.ngZone,
      component: this,
      cordovaReady: () => this.cordovaReady(),
      notificationReceived: () => this.getNotifications()
    };
  }

  ngOnInit(): void {
    console.log(`ngOnInit ${this.constructor.name}`);

    if (environment.production == false) {
      this.ngZone.run(() => {
        console.log("debug mode: hard delay 5s before redirect to main page");
        setTimeout(()=> {
          this.cordovaReady();
        }, 5000);
      });
    }

    this.events.subscribe("LOGOUT",() => {
      this.ngZone.run(() => {
        this.rootPage = ActivitiesComponent
      });
    });
  }

  cordovaReady():void {
    console.log(`cordovaReady ${this.constructor.name}`);

    // make sure the cordova device ready event is fired before invoking ionic plugin
    console.log("cordova device ready event received by Angular");
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("ionic platform ready");
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // to check if we have permission
      // this.push.hasPermission()
      // .then((res: any) => {
      //   if (res.isEnabled) {
      //     console.log('We have permission to send push notifications');
      //   } else {
      //     console.log('We do not have permission to send push notifications');
      //   }
      // });

      // this.getNotifications();
    });

    this.ngZone.run(() => {
      this.rootPage = HomeComponent;
    });
  }

  getNotifications() {
    console.log("getNotifications from device...");
    this.restService.getNotifications().subscribe(
      (response) => {
        let jsonString = JSON.stringify(response);
        console.log(jsonString);
        
        // handle the UI presentation
        alert(jsonString);
        
      },
      (error) => {
        // error handle
        console.log(error);
      }
    )
  }

}
