import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usersService } from 'src/app/@service/user.service';
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
    private userService:usersService,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.shortTourService.getDailyBooking().subscribe(res=>{
      if(res.result==true){
        this.longTours= res.data.longTours
        this.shortTours= res.data.shortTours
      }
    })
  }

  logOut(){
    this.userService.logout();
    this.router.navigate(['/login']);
    }
 
}
