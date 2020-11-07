import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shortTour} from '../@model/short_tour.model'
// Environment
import { CreateURL } from './publicURL'

const _url = CreateURL.createURL;

@Injectable({
  providedIn: 'root'
})
export class shortTourService {
  shortTourURL=_url('shortTours');
  headers:HttpHeaders =new HttpHeaders().set('Content-Type','application/json');

  constructor(private http: HttpClient) { }

  getShortTours():Observable<any> {
    return this.http.get<any>(`${this.shortTourURL}`)
  } 

  getShortTourByID(shortTourID):Observable<any>{
   return this.http.get<any>(`${this.shortTourURL}/${shortTourID}`, { headers: this.headers })
  }

  addNewShortTour(shortTour:shortTour):Observable<any>{
   return this.http.post<any>(`${this.shortTourURL}`, shortTour)
  }

  updatelShortTour(shortTourID:number,shortTour:shortTour):Observable<any>{
   return this.http.put<any>(`${this.shortTourURL}/${shortTourID}`, shortTour ,{ headers: this.headers })
  }

  deleteShortTour(longTourID:number):Observable<any>{
    return this.http.delete<any>(`${this.shortTourURL}/${longTourID}`,{ headers: this.headers })
   }

}
