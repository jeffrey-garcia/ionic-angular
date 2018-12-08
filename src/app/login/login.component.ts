import { Component, OnInit } from '@angular/core';

import { Events } from 'ionic-angular';
import { RestService, AUTH_STATUS } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private restService:RestService,
    private events: Events
  ) { 
    console.log(`creating: ${this.constructor.name}`)
  }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`)
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`)
  }

  public doLogin() {
    this.restService.loginStub().subscribe(
      (response:AUTH_STATUS) => {
        this.events.publish(response.status);
      }
    )
  }

}
