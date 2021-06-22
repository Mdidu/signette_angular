import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../../service/client.service";
import {Client} from "../../../model/client/client";
import {Adresse} from "../../../model/adresse/adresse";
import {AddressService} from "../../../service/address.service";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  updateClientForm: FormGroup;
  client: any;
  clt:Client;
  address:any;
  clientId: any;
  @Input() parentClientId: number;
  @Input() displayClient: () => void;

  constructor(private formBuilder: FormBuilder, public clientService: ClientService,private adresseService: AddressService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recupData();

    setTimeout(() => {
      this.form();
    }, 1000);
  }

  ngOnChanges(): void {
    this.recupData();

    setTimeout(() => {
      this.form();
    }, 1000);
  }

  form() {
    this.updateClientForm = this.formBuilder.group({
      clientId: [this.client.clientId, Validators.required],
      clientWording: [this.client.clientWording, Validators.required],
      clientMail: [this.client.clientMail, [Validators.required, Validators.email]],
      clientPhone: [this.client.clientPhone, [Validators.required, Validators.pattern('[0-9]{10}')]],
      address: this.formBuilder.group({
        addressId: [this.client.address.addressId, Validators.required],
        addressNumber: [this.client.address.addressNumber, Validators.required],
        addressStreet: [this.client.address.addressStreet, Validators.required],
        addressCity: [this.client.address.addressCity, Validators.required],
        addressCountry: [this.client.address.addressCountry, Validators.required]
      })
    })
  }

  recupData() {

    this.clientService.findById(this.parentClientId).subscribe(
      (client) => {
        this.client = client;
      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }

  onSubmit() {
    const data = this.updateClientForm.value;

    this.address  = {
      addressId: data.address.addressId,
      addressNumber: data.address.addressNumber,
      addressStreet: data.address.addressStreet,
      addressCity: data.address.addressCity,
      addressCountry: data.address.addressCountry
    }

    this.clt = {
      clientId: data.clientId,
      clientWording: data.clientWording,
      clientMail: data.clientMail,
      clientPhone: data.clientPhone,
      address: this.address
    }

    this.adresseService.update(this.address.addressId, this.address);
    this.clientService.update(this.clt);

    setTimeout(() => {
      this.displayClient();
    }, 1000);
  }
}
