import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {TripService} from "../../../service/trip.service";
import {ClientService} from "../../../service/client.service";
import {CenterService} from "../../../service/center.service";
import {Center} from "../../../model/center/center";
import {Client} from "../../../model/client/client";

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {

  updateTripForm: FormGroup;
  trip: any;
  centers: Center[];
  center: Center;
  clients: Client[];
  client: Client;
  tripId: any;

  constructor(private formBuilder: FormBuilder, public tripService: TripService, public clientService: ClientService, public centerService: CenterService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recupData();
    this.recupDataCLients();
    this.recupDataCenters();
    setTimeout(() => {
      this.form();
    }, 1000);

  }

  form() {
    this.updateTripForm = this.formBuilder.group({
      tripId: [this.tripId, Validators.required],
      tripStartDate: [this.trip.tripStartDate, Validators.required],
      tripEndDate: [this.trip.tripEndDate, Validators.required],
      center: [this.trip.centerId, Validators.required],
      client: [this.trip.client.clientId, Validators.required],
    });
  }

  recupData() {
    this.tripId = this.route.snapshot.paramMap.get('id');
    this.trip = this.tripService.findById(this.tripId).subscribe(
      (trip) => {
        this.trip = trip;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  recupDataCLients() {
    this.clientService.findAll().subscribe(
      (clients) => {
        this.clients = clients;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  recupDataCenters() {
    this.centerService.findAll().subscribe(
      (centers) => {
        this.centers = centers;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  onSubmit() {
    const data = this.updateTripForm.value;
    setTimeout(() => {
      this.client = {
        clientId: data.clientId
      }
      this.center = {
        centerId: data.centerId
      }

      this.trip = {
        tripStartDate: data.tripStartDate,
        tripEndDate: data.tripEndDate,
        center: this.center,
        client: this.client,
      }
      this.tripService.update(this.tripId, this.trip);
    }, 1000);
  }
}
