import { Component, ViewChild, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SuperTabsController, SuperTabs } from 'ionic2-super-tabs';

import { GoalsMonthlyViewComponent } from './goals-monthly-view/goals-monthly-view.component'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  tab1Root = GoalsMonthlyViewComponent;
  tab2Root = GoalsMonthlyViewComponent;
  tab3Root = GoalsMonthlyViewComponent;

  constructor(
    private navCtrl:NavController,
    private superTabsCtrl: SuperTabsController
  ) { }

  ngOnInit() {
    this.superTabs.enableTabsSwipe(true);
  }
  
  slideToIndex(index: number) {
    this.superTabs.slideTo(index);
  }
  
  hideToolbar() {
    this.superTabs.showToolbar(false);
  }
  
  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }
  
  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }
}
