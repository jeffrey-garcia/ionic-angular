import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public title:string = "Dashboard";

  constructor(
    private restService:RestService,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`)
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`)
  }

  ionViewDidLoad() {
    console.log(`ionViewDidLoad: ${this.constructor.name}`)
  }

  ionViewWillEnter() {
    console.log(`ionViewWillEnter: ${this.constructor.name}`)
    this.restService.getDataStub().subscribe()
  }

  ionViewDidEnter() {
    console.log(`ionViewDidEnter: ${this.constructor.name}`)
  }

  ionViewWillLeave() {
    console.log(`ionViewWillLeave: ${this.constructor.name}`)
  }

  ionViewDidLeave() {
    console.log(`ionViewDidLeave: ${this.constructor.name}`)
  }

  ionViewWillUnload() {
    console.log(`ionViewWillUnload: ${this.constructor.name}`)
  }

}
