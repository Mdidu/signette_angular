import {Component, OnInit} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import {TripService} from "../../service/trip.service";
import {colors} from "@angular/cli/utilities/color";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events: any = [];
  calendarOptions: CalendarOptions;

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    //web api calling to get dynamic events
    this.tripService.findAllEvent().subscribe(data => {
      this.events.push(data);
      console.log(data);
      //calendar settings
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        events: this.events[0]
      };
    });
  }

}
