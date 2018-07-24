import { Component, OnInit, ViewChild } from '@angular/core';

import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'app-leads-create',
  templateUrl: './leads-create.component.html',
  styleUrls: ['./leads-create.component.css','./leads-create.component.scss']
})
export class LeadsCreateComponent implements OnInit {
  @ViewChild(Content) content:Content;

  private enable:boolean = false;

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.content.ionScroll.subscribe(($event) => {
      console.log($event.scrollTop);
      if ($event.scrollTop != null) {
        if ($event.scrollTop>=10) {
          this.enable = true;
        } else {
          this.enable = false;
        }
      }
    });
  }

  public shouldEnableBlackTitle(): boolean {
    return this.enable;
  }
}
