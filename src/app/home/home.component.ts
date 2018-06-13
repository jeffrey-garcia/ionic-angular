import { Component, ViewChild, OnInit } from '@angular/core';

import { App, Tab, Tabs, MenuController } from 'ionic-angular';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LeadsComponent } from '../leads/leads.component';
import { GoalsComponent } from '../goals/goals.component';
import { ActivitiesComponent } from '../activities/activities.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('tabsRef') tabsRef: Tabs;

  title:string = "";

  tabPages = [
    {
      title: 'Dashboard',
      component: DashboardComponent
    },
    {
      title: 'Leads',
      component: LeadsComponent
    },
    {
      title: 'Activities',
      component: ActivitiesComponent
    },    
    {
      title: 'Goals',
      component: GoalsComponent
    }
  ];

  tab0Root:any = this.tabPages[0].component;
  tab1Root:any = this.tabPages[1].component;
  tab2Root:any = this.tabPages[2].component;
  tab3Root:any = this.tabPages[3].component;

  constructor(
    private app:App,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {}

  public openPage(page:any): void {
    /* this will open the new page outside the tabs view */
    let navCtrlList = this.app.getRootNavs();
    // navCtrlList.forEach(item => {
    //   console.log(item);
    // })
    if (navCtrlList[0] != null) {
      navCtrlList[0].push(DashboardComponent, {}, {animate: true, direction: 'forward'});
    }
  }

  /* programmetically changing the tab */
  public changeTab(id:any): void {
    this.tabsRef.select(id);
    this.menuCtrl.close();
  }

  /* callback when the tab page is changed */
  public tabChanged(selectedTab:Tab): void { 
    // console.log("tab changed: " + selectedTab.index);
    this.title = this.tabPages[selectedTab.index].title;
  }
}
