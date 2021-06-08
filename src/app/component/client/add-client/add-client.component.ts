import {Component, OnInit} from '@angular/core';
import {Client} from "../../../model/client/client";
import {ClientService} from "../../../service/client.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  addClientForm: FormGroup


  constructor(private formBuilder: FormBuilder, public clientService: ClientService) {
  }

  ngOnInit(): void {
    this.addClientForm = this.formBuilder.group({
      clientWording: ['', Validators.required,],
      clientMail: ['', Validators.required, Validators.email],
      clientPhone: ['', Validators.required, Validators.pattern('[0-9]{10}')],
      clientAddress: ['', Validators.required],

      addAddressForm: this.formBuilder.group({
        addressNumber: ['', Validators.required],
        addressStreet: ['', Validators.required],
        addressCity: ['', Validators.required],
        addressCountry: ['', Validators.required]
      })
    })
  }


  onSubmit() {
    const data = this.addClientForm.value
    this.clientService.add(data);
  }
}


