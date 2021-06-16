import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {TripService} from "../../service/trip.service";
import {Trip} from "../../model/trip/trip";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trips: any[];

  constructor(private formBuilder: FormBuilder, public tripService: TripService,  private router: Router) {
  }

  ngOnInit(): void {
    this.displayTrip();
  }

  displayTrip() {
    this.tripService.findAll().subscribe(
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
  updateTrip(id: number){
    this.router.navigate(['/trip/update/', id]);
  }
  detailTrip(id: number){
    this.router.navigate(['/trip/', id]);
  }
}
