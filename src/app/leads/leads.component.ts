import { Component, OnInit } from '@angular/core';

import { App, NavController } from 'ionic-angular';

import { LeadsCreateComponent } from './leads-create/leads-create.component';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css', './leads.component.scss']
})
export class LeadsComponent implements OnInit {

  private isReminderDismissed:boolean = false;

  private leads_create:any;
  
  constructor(
    private app:App,
    private navCtrl:NavController
  ) { 
    this.leads_create = LeadsCreateComponent
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

  hideReminder(shouldDimiss:boolean): void {
    if (!this.isReminderDismissed && shouldDimiss) {
      this.isReminderDismissed = shouldDimiss;
    }
    document.getElementById('reminder').style.display = 'none';
  }

  showReminder(): void {
    if (!this.isReminderDismissed) {
      document.getElementById('reminder').style.display = 'inline';
    }
  }
}
