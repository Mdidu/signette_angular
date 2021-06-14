import {Component, OnInit} from '@angular/core';
import {Client} from "../../../model/client/client";
import {ClientService} from "../../../service/client.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Adresse} from "../../../model/adresse/adresse";
import {AddressService} from "../../../service/address.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  addClientForm: FormGroup;
  client:Client;
  address: Adresse;
  adresse:any;


  constructor(private formBuilder: FormBuilder, public clientService: ClientService, private addressService: AddressService) {
  }

  ngOnInit(): void {
    this.addClientForm = this.formBuilder.group({
      clientWording: ['', Validators.required,],
      clientMail: ['', [Validators.required, Validators.email]],
      clientPhone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],

      clientAddress: this.formBuilder.group({
        addressNumber: ['', Validators.required],
        addressStreet: ['', Validators.required],
        addressCity: ['', Validators.required],
        addressCountry: ['', Validators.required]
      })
    })
  }

  addAdress(address: Adresse) {
    this.adresse = this.addressService.add(address).subscribe(
      (adresse: any)=>{
        this.adresse = adresse;
        // this.router.navigate(['adresse/read']);
      });
  }

  onSubmit() {
    const data = this.addClientForm.value;
    this.address = {
      addressNumber: data.clientAddress.addressNumber,
      addressStreet: data.clientAddress.addressStreet,
      addressCity: data.clientAddress.addressCity,
      addressCountry: data.clientAddress.addressCountry
    }
    this.addAdress(this.address);

    setTimeout(()=>{
      this.client = {
        clientWording: data.clientWording,
        clientMail: data.clientMail,
        clientPhone: data.clientPhone,
        clientAddress: this.address
      }
      console.log(this.client)
      this.clientService.add(this.client);
    },1000)

  }
}


