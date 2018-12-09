import { Component, OnInit, NgZone } from '@angular/core';

import { Events, LoadingController } from 'ionic-angular';
import { RestService, AUTH_STATUS } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loading = this.loadingCtrl.create({
    spinner: 'ios',
    cssClass: 'my-loading-class',
    dismissOnPageChange: true
  });

  constructor(
    private ngZone: NgZone,
    private restService:RestService,
    private events: Events,
    public loadingCtrl: LoadingController
  ) { 
    console.log(`creating: ${this.constructor.name}`)
  }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`)
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`)
  }

  public doLogin():void {
    console.log("login clicked")
    this.loading.present()
    
    this.restService.loginStub().subscribe(
      (response:AUTH_STATUS) => {
        console.log(`login response: ${response.status}`)
        this.loading.dismiss()
        this.events.publish(response.status);
      },
      (error) => {
        this.loading.dismiss()
      }
    )
  }

}
