import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from './Calendar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor( private http: HttpClient) { }

  getCal():Observable<any>{
    return this.http.get<any>('http://localhost:7010/ws/calendar?userId=mohitkhanna1994@gmail.com');
  }
  uploadDatasource(payload): Observable<HttpResponse> {
    let headers = new Headers();

    headers.append('Accept', 'application/json, text/plain,');
    let options = new RequestOptions({ headers: headers });


    return this.http.post('http://192.:8080/vdg/admin/fetchVideos',payload, {observe: 'response'})
      
  }
}
