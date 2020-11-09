import { Component, OnInit } from '@angular/core';
import { shortTourService } from '../../../@service/short_service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
