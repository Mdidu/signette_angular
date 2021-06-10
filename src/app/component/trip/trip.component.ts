import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CenterService} from "../../service/center.service";
import {Router} from "@angular/router";
import {TripService} from "../../service/trip.service";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trips: any;

  constructor(private formBuilder: FormBuilder, public tripService: TripService,  private router: Router) {
    this.displayTrip();
  }

  ngOnInit(): void {

  }

  displayTrip() {
    this.trips = this.tripService.findAll().subscribe(
      (trips) => {
        this.trips = trips;
      },
      (error) => {
        console.log('error=' + error.message);
      }
    );
  }

  onRemoveTrip(id: number) {
    this.tripService.remove(id);

    setTimeout(
      () => {
        this.displayTrip();
      }, 1000);
  }
  updateCenter(id: number){
    this.router.navigate(['/trip/update/', id]);
  }
  detailCenter(id: number){
    this.router.navigate(['/trip/', id]);
  }
}
