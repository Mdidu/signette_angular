import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {TripService} from "../../../service/trip.service";
import {ClientService} from "../../../service/client.service";
import {CenterService} from "../../../service/center.service";

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {

  updateTripForm: FormGroup;
  trip: any;
  id: any;

  constructor(private formBuilder: FormBuilder, public tripService: TripService,public clientService: ClientService, public centerService: CenterService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.recupData();

    setTimeout(() => {
      this.form();
    }, 1000);
  }
  form() {
    this.updateTripForm = this.formBuilder.group({
      tripid: [this.trip.tripid, Validators.required],
      tripStartDate: [this.trip.tripStartDate, Validators.required],
      tripEndDate: [this.trip.tripEndDate, Validators.required],
      center: [this.trip.center.centerid, Validators.required],
      client: [this.trip.client.clientId, Validators.required],
    });
  }

  recupData() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.trip = this.centerService.findById(this.id).subscribe(
      (trip) => {
        this.trip = trip;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }
  onSubmit() {
    const data = this.updateTripForm.value;
    this.centerService.update(this.id,data);
  }
}
