import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../../service/client.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-trip-by-client',
  templateUrl: './trip-by-client.component.html',
  styleUrls: ['./trip-by-client.component.css']
})
export class TripByClientComponent implements OnInit {

  clientId: any;
  trips:any;
  client:any;

  constructor(private route:ActivatedRoute, private clientService:ClientService, private location: Location) { }

  ngOnInit(): void {
    this.recupData();
  }

  recupData() {
    this.clientId = this.route.snapshot.paramMap.get('id');

    this.clientId = this.clientService.findTripByClientId(this.clientId).subscribe(
      (trips) => {
        this.trips = trips;
        this.client=trips[0].client;
        console.log(this.trips)

      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }

  backClicked(){
    this.location.back();
  }
}
