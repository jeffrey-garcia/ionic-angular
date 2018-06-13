import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.css']
})
export class LeadsListComponent implements OnInit {
  isReminderDismissed:boolean = false;
  
  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
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
