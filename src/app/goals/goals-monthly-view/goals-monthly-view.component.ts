import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-monthly-view',
  templateUrl: './goals-monthly-view.component.html',
  styleUrls: ['./goals-monthly-view.component.css']
})
export class GoalsMonthlyViewComponent implements OnInit {

  constructor() { 
    console.log("constructed");
  }

  ngOnInit() {
    console.log("inited");
  }

}
