import { Component, OnInit } from '@angular/core';
import { Event } from './Calendar';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
public calendars:Array<any>;
  constructor(private calendarService:CalendarService) { }

  ngOnInit() {
    this.getCalendars();
  }
getCalendars(){
  this.calendarService.getCal().subscribe((resp)=>{
  console.log(resp);
  this.calendars=resp.result});
}
}
