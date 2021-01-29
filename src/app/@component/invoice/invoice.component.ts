import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  tour
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
  constructor(public dialogRef: MatDialogRef<InvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
       this.tour = data
     }

  ngOnInit(): void {
  }

  getTourName(val){
      let t = this.shortTours.find(o=>o.value==val)
      if(t){
        return t.name
      }
      
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('billingFile').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Camp Travel</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <style>
          body {
            margin-top: 30px;
            margin-bottom: 30px;
        }
        .kt-invoice__body {
          background-color: white;
          border: 1px solid black;
          border-radius: 2px;
          box-shadow: 0px 0px 5px 3px #000;
          margin-top: 15px;
          padding: 10px;
        }
        .header-container{
          display: flex;
          justify-content: center;
          align-items:baseline;
      }
      
      .body-container{
          display: flex;
          justify-content: space-between;
          align-items:baseline;
          flex-wrap: nowrap;
          margin: 15px;
      }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

}
