import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './@component/login/login/login.component';
import { HomeComponent } from './@component/home/home/home.component';
import { CreateuserComponent } from './@component/createuser/createuser/createuser.component';
import { DailytoursComponent } from './@component/dailytours/dailytours/dailytours.component';
import { LongtoursComponent } from './@component/longtours/longtours/longtours.component';
import { TodaybookingComponent } from './@component/todaybooking/todaybooking/todaybooking.component';
import { AddDailyToursComponent } from './@component/dailytours/add-daily-tours/add-daily-tours.component';
import { AddLongToursComponent } from './@component/longtours/add-long-tours/add-long-tours.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent ,children:[
    { path: '', redirectTo: 'booking', pathMatch: 'full' },
    { path: 'booking', component: TodaybookingComponent },
    { path: 'createuser', component: CreateuserComponent },
    { path: 'dailytours', component: DailytoursComponent },
    { path: 'addDailyTours', component: AddDailyToursComponent },
    { path: 'editDailyTours/:id', component: AddDailyToursComponent },
    { path: 'longtours', component: LongtoursComponent },
    { path: 'addLongTours', component: AddLongToursComponent },
    { path: 'editLongTours/:id', component: AddLongToursComponent },
  ] },

  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
