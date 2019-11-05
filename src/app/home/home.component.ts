import { Component, ViewChild, OnInit } from '@angular/core';

import { App, Tab, Tabs, MenuController, Events, LoadingController } from 'ionic-angular';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LeadsComponent } from '../leads/leads.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { GoalsComponent } from '../goals/goals.component';
import { LeadsSearchComponent } from '../leads/leads-search/leads-search.component'
import { RestService, AUTH_STATUS } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component.scss']
})
export class HomeComponent implements OnInit {
  private loading = this.loadingCtrl.create({
    content: '',
    spinner: 'dots',
    cssClass: 'my-loading-class',
    dismissOnPageChange: true
  });

  @ViewChild('tabsRef') tabsRef: Tabs;

  title:string = "";

  tabPages = [
    {
      title: 'Dashboard',
      component: DashboardComponent
    },
    {
      title: 'Code',
      component: LeadsComponent
    },
    {
      title: 'Task',
      component: ActivitiesComponent
    },    
    {
      title: 'History',
      component: GoalsComponent
    }
  ];

  tab0Root:any = this.tabPages[0].component;
  tab1Root:any = this.tabPages[1].component;
  tab2Root:any = this.tabPages[2].component;
  tab3Root:any = this.tabPages[3].component;

  leads_search:any = LeadsSearchComponent;
  leads_filter:any = LeadsSearchComponent;

  selectedTab:number;

  constructor(
    private app:App,
    private menuCtrl: MenuController,
    private events: Events,
    private restService: RestService,
    private loadingCtrl: LoadingController
  ) {
    console.log(`creating: ${this.constructor.name}`)
   }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`)

    // force navigate to tab index page 3
    this.selectedTab = 0;
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy: ${this.constructor.name}`)
  }

  ionViewDidLoad() {
    console.log(`ionViewDidLoad: ${this.constructor.name}`)
  }

  ionViewWillEnter() {
    console.log(`ionViewWillEnter: ${this.constructor.name}`)
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

  public openPage(page:any): void {
    // console.log("open page: " + page);
    /* this will open the new page outside the tabs view */
    let navCtrlList = this.app.getRootNavs();
    // navCtrlList.forEach(item => {
    //   console.log(item);
    // })
    if (navCtrlList[0] != null) {
      navCtrlList[0].push(page, {}, {animate: true, direction: 'forward'});
    }
  }

  /* programmetically changing the tab */
  public changeTab(id:any): void {
    this.tabsRef.select(id);
    this.menuCtrl.close();
  }

  /* callback when the tab page is changed */
  public tabChanged(selectedTab:Tab): void { 
    //console.log("tab changed: " + selectedTab.index);
    this.title = this.tabPages[selectedTab.index].title;

    //console.log("tab changed: " + this.title);
    if (this.title != "Leads") {
      // show search icon and filter icon ONLY in Leads Page
      document.getElementById("searchIcon").style.display = "none";
      document.getElementById("filterIcon").style.display = "none";
    } else {
      document.getElementById("searchIcon").style.display = "inline";
      document.getElementById("filterIcon").style.display = "inline";
    }
  }

  public doLogout() {
    console.log("logout clicked")
    this.loading.present()

    this.restService.logoutStub().subscribe(
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
