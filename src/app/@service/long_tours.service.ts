import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LongTour} from '../@model/long_tour.model'
// Environment
import { CreateURL } from './publicURL'

const _url = CreateURL.createURL;

@Injectable({
  providedIn: 'root'
})
export class longTourService {
  longTourURL=_url('longTours');
  headers:HttpHeaders =new HttpHeaders().set('Content-Type','application/json');

  constructor(private http: HttpClient) { }

  getLongTours():Observable<any> {
    return this.http.get<any>(`${this.longTourURL}`)
  } 

  getlongTourByID(longTourID):Observable<any>{
   return this.http.get<any>(`${this.longTourURL}/${longTourID}`, { headers: this.headers })
  }

  addNewLongTour(longTour:LongTour):Observable<any>{
   return this.http.post<any>(`${this.longTourURL}`, longTour)
  }

  updateLongTour(longTourID:number,longTour:LongTour):Observable<any>{
   return this.http.put<any>(`${this.longTourURL}/${longTourID}`, longTour ,{ headers: this.headers })
  }


  deleteLongTour(longTourID:number):Observable<any>{
    return this.http.delete<any>(`${this.longTourURL}/${longTourID}`,{ headers: this.headers })
   }

}
