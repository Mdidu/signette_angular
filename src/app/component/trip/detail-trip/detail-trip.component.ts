import { Component, OnInit } from '@angular/core';
import {TripService} from "../../../service/trip.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Trip} from "../../../model/trip/trip";
import {Client} from "../../../model/client/client";
import {Center} from "../../../model/center/center";
import {PostService} from "../../../service/post.service";

@Component({
  selector: 'app-detail-trip',
  templateUrl: './detail-trip.component.html',
  styleUrls: ['./detail-trip.component.css']
})
export class DetailTripComponent implements OnInit {

  trip: Trip;
  tripId: any;
  client: Client;
  center: Center;
  users: any[];
  posts: any[];


  constructor( public tripService: TripService, public postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recupData()
  }

  recupData() {
    this.tripId = this.route.snapshot.paramMap.get('id');
    this.tripService.findById(this.tripId).subscribe(
      (trip) => {
        this.trip = trip;
        this.center = trip.center;
        this.client = trip.client;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
    this.postService.findByTrip(this.tripId).subscribe(
      (posts) => {
        this.posts = posts;
        console.log(posts[0]);
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );


  }

}
