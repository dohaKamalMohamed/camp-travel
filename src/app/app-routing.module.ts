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
import { AuthGuard } from './@guards/user.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent ,children:[
    { path: '', redirectTo: 'booking', pathMatch: 'full' ,canActivate: [AuthGuard]},
    { path: 'booking', component: TodaybookingComponent ,canActivate: [AuthGuard]},
    { path: 'createuser', component: CreateuserComponent ,canActivate: [AuthGuard] },
    { path: 'dailytours', component: DailytoursComponent ,canActivate: [AuthGuard]},
    { path: 'addDailyTours', component: AddDailyToursComponent ,canActivate: [AuthGuard] },
    { path: 'editDailyTours/:id', component: AddDailyToursComponent ,canActivate: [AuthGuard]},
    { path: 'longtours', component: LongtoursComponent ,canActivate: [AuthGuard] },
    { path: 'addLongTours', component: AddLongToursComponent ,canActivate: [AuthGuard]},
    { path: 'editLongTours/:id', component: AddLongToursComponent ,canActivate: [AuthGuard]},
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
