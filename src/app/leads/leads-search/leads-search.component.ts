import { Component, OnInit } from '@angular/core';

import { App, NavController } from 'ionic-angular';

@Component({
  selector: 'app-leads-search',
  templateUrl: './leads-search.component.html',
  styleUrls: ['./leads-search.component.css']
})
export class LeadsSearchComponent implements OnInit {

  items:string[] = [];

  constructor(
    private app:App,
    private navCtrl:NavController
  ) { 
    this.initializeItems();
  }

  ngOnInit() {
  }

  initializeItems() {
    this.items = [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5",
      "item 6"
    ];
  }

  getItems(event: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goBack() {
    // console.log("goBack()");
    let navCtrlList = this.app.getRootNavs();
    navCtrlList[0].pop();
  }

}
