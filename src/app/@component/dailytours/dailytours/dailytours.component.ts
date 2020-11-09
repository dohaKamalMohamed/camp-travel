import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { shortTour } from '../../../@model/short_tour.model'
import { shortTourService } from '../../../@service/short_service.service'
import {  Router } from '@angular/router';


@Component({  
  selector: 'app-dailytours',
  templateUrl: './dailytours.component.html',
  styleUrls: ['./dailytours.component.css']
})
export class DailytoursComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'mobile', 'tour' , 'tourDate' , 'chairNumber', 'paid' , 'remaining', 'bookingDate' ,'actions'];
  dataSource: MatTableDataSource<shortTour>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private shortTourService: shortTourService, private router: Router,) {

    this.shortTourService.getShortTours().subscribe(res => {
      if (res.result == true) {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })

    // Assign the data to the data source for the table to render

  }

  ngAfterViewInit() {
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editTour(id) {
    this.router.navigate([`/home/editDailyTours/${id}`])
  }

  deleteTour(id){
    this.shortTourService.deleteShortTour(id).subscribe(res=>{
      if(res.result==true){
        
    this.shortTourService.getShortTours().subscribe(res => {
      if (res.result == true) {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
      }
    })
  }
}


