import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

// Environment
import { CreateURL } from './publicURL'

const _url = CreateURL.createURL;

@Injectable({
  providedIn: 'root'
})
export class usersService {
  usersURL=_url('users');
  headers:HttpHeaders =new HttpHeaders().set('Content-Type','application/json');

  constructor(private http: HttpClient) { }

  postUser(email,password):Observable<any> {
    return this.http.post<any>(`${this.usersURL}`,{email:email,password:password})
  } 

  login(email,password):Observable<any> {
    return this.http.post<any>(`${this.usersURL}/login`,{email:email,password:password})
  } 

  loggedin(){
    if(JSON.parse(localStorage.getItem('campTraveUser')))
    {
    return JSON.parse(localStorage.getItem('campTraveUser'))
    }
    else return 
  }

  logout() {
    localStorage.removeItem('campTraveUser');
 
}
 

 

}
