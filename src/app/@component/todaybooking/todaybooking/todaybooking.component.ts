import { Component, OnInit } from '@angular/core';
import { shortTourService } from '../../../@service/short_service.service'
@Component({
  selector: 'app-todaybooking',
  templateUrl: './todaybooking.component.html',
  styleUrls: ['./todaybooking.component.css']
})
export class TodaybookingComponent implements OnInit {
  date = new Date().toDateString()
  longTours
  shortTours
  constructor(
    private shortTourService: shortTourService,
  ) { }

  ngOnInit(): void {
    this.shortTourService.getDailyBooking().subscribe(res=>{
      if(res.result==true){
        this.longTours= res.data.longTours
        this.shortTours= res.data.shortTours
      }
    })
  }
}
