import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todaybooking',
  templateUrl: './todaybooking.component.html',
  styleUrls: ['./todaybooking.component.css']
})
export class TodaybookingComponent implements OnInit {
  date = new Date().toDateString()
  constructor() { }

  ngOnInit(): void {
  }

}
