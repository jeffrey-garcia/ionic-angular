import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-leads-create',
  templateUrl: './leads-create.component.html',
  styleUrls: ['./leads-create.component.css']
})
export class LeadsCreateComponent implements OnInit {

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }

}
