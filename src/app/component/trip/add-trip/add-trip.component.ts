import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TripService} from "../../../service/trip.service";
import {Center} from "../../../model/center/center";
import {Trip} from "../../../model/trip/trip";
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

  clients: Client[];
  centers: Center[];

  constructor(private formBuilder: FormBuilder, public tripService: TripService, public centerService: CenterService, public clientService: ClientService) {
  }

  ngOnInit(): void {
    this.recupData();
    this.form();
  }
  form() {
    this.addTripForm = this.formBuilder.group({
      tripid: ['', Validators.required],
      tripStartDate: ['', Validators.required],
      tripEndDate: ['', Validators.required],
      center: ['', Validators.required],
      client: ['', Validators.required]
    });
  }

  recupData() {
      this.clientService.findAll().subscribe(
      (clients) => {
        this.clients = clients;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
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
    const data = this.addTripForm.value;
    this.tripService.add(data);
  }

}
