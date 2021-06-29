import {Component, Input, OnInit} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";
import {TripService} from "../../../service/trip.service";
import {PostService} from "../../../service/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-calendar-user',
  templateUrl: './calendar-user.component.html',
  styleUrls: ['./calendar-user.component.css']
})
export class CalendarUserComponent implements OnInit {

  events: any = [];
  @Input() userId: any;
  calendarOptions: CalendarOptions;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("id");
    //web api calling to get dynamic events
    this.postService.findUserEvent(this.userId).subscribe(data => {
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
