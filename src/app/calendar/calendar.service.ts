import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from './Calendar';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor( private http: HttpClient) { }

  getCal():Observable<any>{
    return this.http.get<any>('http://localhost:7010/ws/calendar?userId=mohitkhanna1994@gmail.com');
  }
}
