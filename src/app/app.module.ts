import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './@material/angular-material.module';
import { CreateuserComponent } from './@component/createuser/createuser/createuser.component';
import { DailytoursComponent } from './@component/dailytours/dailytours/dailytours.component';
import { HomeComponent } from './@component/home/home/home.component';
import { LoginComponent } from './@component/login/login/login.component';
import { LongtoursComponent } from './@component/longtours/longtours/longtours.component';
import { TodaybookingComponent } from './@component/todaybooking/todaybooking/todaybooking.component';
import { shortTourService } from './@service/short_service.service';
import { AddDailyToursComponent } from './@component/dailytours/add-daily-tours/add-daily-tours.component';
import { AddLongToursComponent } from './@component/longtours/add-long-tours/add-long-tours.component';
import { longTourService } from './@service/long_tours.service';
import { usersService } from './@service/user.service';
import { AuthGuard } from './@guards/user.guard';
import { InvoiceComponent } from './@component/invoice/invoice.component';
import { MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    DailytoursComponent,
    HomeComponent,
    LoginComponent,
    LongtoursComponent,
    TodaybookingComponent,
    AddDailyToursComponent,
    AddLongToursComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [shortTourService,longTourService,usersService,AuthGuard, 
    {
      provide: MatDialogRef,
      useValue: {}
    },{
    provide: MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
      hasBackdrop: true,
      panelClass: 'kt-mat-dialog-container__wrapper',
      height: 'auto',
      width: '900px'
    },
    
  },],
  bootstrap: [AppComponent],
  entryComponents: [
    InvoiceComponent
  ]
})
export class AppModule { }
