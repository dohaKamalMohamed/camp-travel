import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LongTour } from '../../../@model/long_tour.model'
import { longTourService } from '../../../@service/long_tours.service'
import {  Router } from '@angular/router';

@Component({
  selector: 'app-longtours',
  templateUrl: './longtours.component.html',
  styleUrls: ['./longtours.component.css']
})
export class LongtoursComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'mobile', 'tour' , 'tourDate' , 'chairNumber', 'hotelName' , 'nightNumber' ,'paid' , 'remaining', 'bookingDate' ,'actions'];
  dataSource: MatTableDataSource<LongTour>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private longTourService: longTourService, private router: Router,) {

    this.longTourService.getLongTours().subscribe(res => {
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
    this.router.navigate([`/home/editLongTours/${id}`])
  }

  deleteTour(id){
    this.longTourService.deleteLongTour(id).subscribe(res=>{
      if(res.result==true){
        
    this.longTourService.getLongTours().subscribe(res => {
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


