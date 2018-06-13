import { Component, OnInit } from '@angular/core';

import { App, NavController } from 'ionic-angular';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { GoalsComponent } from '../goals/goals.component';

import { LeadsListComponent } from './leads-list/leads-list.component'

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  private dashboard:any;
  private leads:any;
  private goals:any;

  private leads_list:any;
  
  constructor(
    private app:App,
    private navCtrl:NavController
  ) { 
    this.dashboard = DashboardComponent;
    this.leads = LeadsComponent;
    this.goals = GoalsComponent;
    this.leads_list = LeadsListComponent;
  }

  ngOnInit() {

  }

  public openPage(page:any): void {
    /* Deprecated!!! Do not use! */
    // let rootNavCtrl:any = this.app.getRootNav();
    // rootNavCtrl.push(DashboardComponent, {}, {animate: true, direction: 'forward'});

    /* this will open the new page outside the tabs view */
    let navCtrlList = this.app.getRootNavs();
    // navCtrlList.forEach(item => {
    //   console.log(item);
    // })
    if (navCtrlList[0] != null) {
      navCtrlList[0].push(page, {}, {animate: true, direction: 'forward'});
    }
    
    // this will open the new page within the tabs view
    // this.navCtrl.push(DashboardComponent, {}, {animate: true, direction: 'forward'});
  }
}
