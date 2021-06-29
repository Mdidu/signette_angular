import {Component, OnInit} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    defaultAllDay:true,
    forceEventDuration:true,
    initialEvents: {
      url: 'http://localhost:8888/trip/calendar'
    }

  };

  ngOnInit(): void {
  }

}
