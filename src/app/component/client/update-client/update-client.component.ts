import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../../service/client.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  updateClientForm: FormGroup
  client: any
  clientId: any


  constructor(private formBuilder: FormBuilder, public clientService: ClientService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recupData();

    setTimeout(() => {
      this.form();
    }, 1000);

  }

  form() {
    this.updateClientForm = this.formBuilder.group({
      clientId: [this.client.clientId],
      clientWording: [this.client.clientWording, Validators.required,],
      clientMail: [this.client.clientMail, Validators.required, Validators.email],
      clientPhone: [this.client.clientPhone, Validators.required, Validators.pattern('[0-9]{10}')],
      clientAddress: [this.client.clientAddress, Validators.required],

      addAddressForm: this.formBuilder.group({
        addressNumber: [this.client.address.addressNumber, Validators.required],
        addressStreet: [this.client.address.addressStreet, Validators.required],
        addressCity: [this.client.address.addressCity, Validators.required],
        addressCountry: [this.client.address.addressCountry, Validators.required]
      })
    })
  }

  recupData() {
    this.clientId = this.route.snapshot.paramMap.get('id');
    this.clientId = this.clientService.findById(this.clientId).subscribe(
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
    this.clientService.update(this.clientId, data);
  }


}
