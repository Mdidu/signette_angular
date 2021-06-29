import {Component, OnInit, Output} from '@angular/core';
import {TripService} from "../../../service/trip.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Trip} from "../../../model/trip/trip";
import {Client} from "../../../model/client/client";
import {Center} from "../../../model/center/center";
import {PostService} from "../../../service/post.service";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/user/user";
import {Post} from "../../../model/post/post";

@Component({
  selector: 'app-detail-trip',
  templateUrl: './detail-trip.component.html',
  styleUrls: ['./detail-trip.component.css']
})
export class DetailTripComponent implements OnInit {

  trip: Trip;
  @Output() tripId: number;
  @Output() userId: number;
  @Output() postId: number;
  client: Client;
  center: Center;
  addPostClicked: boolean = false;
  updatePostClicked: boolean = false;
  information: any[]; // reçois ex :[{"tripId":12,"userId":2,"postId":4,"postName":"Coordinateur Détaché","nameUser":"Eric","userLastname":"Tomsick"}]


  constructor( public tripService: TripService, public postService: PostService, public userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recupData()
  }

  recupData() {
    this.tripId = parseInt(<string>this.route.snapshot.paramMap.get('id'));
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
      (information) => {
        this.information = information;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  addPost(tripId: number) {
    this.addPostClicked = true;
    this.tripId = tripId;
  }

  updatePost(tripId:number,userId:number,postId:number){
    this.updatePostClicked = true;
    this.tripId=tripId;
    this.userId=userId;
    this.postId=postId;
  }

  deletePost(tripId: number, userId:number){
    this.postService.remove(tripId, userId);
  }
}
