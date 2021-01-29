import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { shortTour } from '../../../@model/short_tour.model'
import { shortTourService } from '../../../@service/short_service.service'
import {  Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvoiceComponent } from '../../invoice/invoice.component';


@Component({  
  selector: 'app-dailytours',
  templateUrl: './dailytours.component.html',
  styleUrls: ['./dailytours.component.css']
})
export class DailytoursComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'mobile', 'tour' , 'tourDate' , 'chairNumber', 'paid' , 'remaining', 'bookingDate' ,'actions'];
  dataSource: MatTableDataSource<shortTour>;
  tourName
  date
  shortTours = [
    {value:"cairo", name:"مزارات القاهره "},
    {value:"alex", name:"الاسكندريه"},
    {value:"africano", name:"افريكانو بارك "},
    {value:"rayan", name:" وادي الريان"},
    {value:"family", name:" فاميلي بارك"},
    {value:"sokhna", name:" يخت السخنه"},
    {value:"dayuse", name:" داي يوز السخنه"},
    {value:"portsaid", name:"بورسعيد "},
    {value:"film", name:"مسرحيه "},
    {value:"dream", name:" دريم بارك"},
    {value:"aquapark", name:" اكوا بارك"},
    {value:"snow", name:"مدينه التلج"},
  ]
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private shortTourService: shortTourService, private router: Router
    ,public dialogRef: MatDialogRef<DailytoursComponent>, public dialog: MatDialog,
     ) {

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

  Print(row){
    const dialogRef = this.dialog.open(InvoiceComponent, {
      width: '80%',
      data: row,
    });
  }

  getTourName(val){
    let t = this.shortTours.find(o=>o.value==val)
    if(t){
      return t.name
    }
    
}

  filterByTour(){
    if(this.tourName&&this.tourName!=''&&this.date&&this.date!=''){
      this.shortTourService.findShortTour({tourName:this.tourName,date:this.date}).subscribe(res => {
        if (res.result == true) {
          this.dataSource = new MatTableDataSource(res.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      })
    }
    
  }
}


