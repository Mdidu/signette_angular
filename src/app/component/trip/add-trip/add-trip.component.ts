import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TripService} from "../../../service/trip.service";
import {Center} from "../../../model/center/center";
import {CenterService} from "../../../service/center.service";
import {ClientService} from "../../../service/client.service";
import {Client} from "../../../model/client/client";

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  addTripForm: FormGroup;
  trip: any;
  clients: Client[];
  client:Client;
  centers: Center[];
  center: Center;

  constructor(private formBuilder: FormBuilder, public tripService: TripService, public centerService: CenterService, public clientService: ClientService) {
  }

  ngOnInit(): void {
    this.recupData();
    this.form();
  }
  form() {
    this.addTripForm = this.formBuilder.group({
      tripStartDate: ['', Validators.required],
      tripEndDate: ['', Validators.required],
      centerId: ['', Validators.required],
      clientId: ['', Validators.required]
    });
  }

  recupData() {
      this.clientService.findAll().subscribe(
          (clients: Client[]) => {
        this.clients = clients;
      },
      (error: { message: string; }) => {
        console.log('error = ' + error.message);
      }
    );
    this.centerService.findAll().subscribe(
      (centers) => {
        this.centers = centers.centers;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }


  onSubmit() {
    const data = this.addTripForm.value;
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
    this.tripService.add(this.trip);
    }, 1000);
  }
}
