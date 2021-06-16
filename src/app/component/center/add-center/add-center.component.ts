import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CenterService} from "../../../service/center.service";
import {Adresse} from "../../../model/adresse/adresse";
import {AddressService} from "../../../service/address.service";

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent implements OnInit {

  addCenterForm: FormGroup;
  center: any;
  address: any;

  constructor(private formBuilder: FormBuilder, public centerService: CenterService, public addressService: AddressService) {
  }

  ngOnInit(): void {
    this.addCenterForm = this.formBuilder.group({
      centerPicture: ['', Validators.required],
      centerName: ['', Validators.required],
      centerMail: ['', Validators.required, Validators.email],
      centerPhone: ['', Validators.required, Validators.pattern('[0-9]{10}')],
      centerComment: ['', Validators.required],
      addressGroup: this.formBuilder.group({
        addressNumber: ['', Validators.required],
        addressStreet: ['', Validators.required],
        addressCity: ['', Validators.required],
        addressCountry: ['', Validators.required]
      })
    });
  }

  addAddress(address: Adresse) {
    this.address = this.addressService.add(address).subscribe(
      (adresse: any) => {
        this.address = adresse;
      });
  }

  onSubmit() {
    const data = this.addCenterForm.value;
    this.address = {
      addressNumber: data.addressGroup.addressNumber,
      addressStreet: data.addressGroup.addressStreet,
      addressCity: data.addressGroup.addressCity,
      addressCountry: data.addressGroup.addressCountry
    }
    this.addAddress(this.address);

    setTimeout(() => {
      this.center = {
        centerPicture: data.centerPicture,
        centerName: data.centerName,
        centerMail: data.centerMail,
        centerPhone: data.centerPhone,
        centerComment: data.centerComment,
        address: this.address
      }

      this.centerService.add(this.center);
    }, 1000);

  }
}
