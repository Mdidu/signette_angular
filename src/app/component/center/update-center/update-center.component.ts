import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CenterService} from "../../../service/center.service";
import {ActivatedRoute} from "@angular/router";
import {AddressService} from "../../../service/address.service";

@Component({
  selector: 'app-update-center',
  templateUrl: './update-center.component.html',
  styleUrls: ['./update-center.component.css']
})
export class UpdateCenterComponent implements OnInit {

  updateCenterForm: FormGroup;
  center: any;
  address : any;
  centerid: any;

  constructor(private formBuilder: FormBuilder, public centerService: CenterService, public addressService: AddressService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.recupData();
    setTimeout(() => {
      this.form();
    }, 2000);
  }
  form() {
    this.updateCenterForm = this.formBuilder.group({
          centerPicture: [this.center.centerPicture, Validators.required],
          centerName: [this.center.centerName, Validators.required],
          centerMail: [this.center.centerMail, [Validators.required, Validators.email]],
          centerPhone: [this.center.centerPhone, Validators.required],
          centerComment: [this.center.centerComment, Validators.required],
          address: this.formBuilder.group({
            addressId:  [this.center.address.addressId, Validators.required],
            addressNumber: [this.center.address.addressNumber, Validators.required],
            addressStreet: [this.center.address.addressStreet, Validators.required],
            addressCity: [this.center.address.addressCity, Validators.required],
            addressCountry: [this.center.address.addressCountry, Validators.required]
          })
    });
  }

  recupData() {
    this.centerid = this.route.snapshot.paramMap.get('id');
    this.centerService.findById(this.centerid).subscribe(
      (center) => {
        this.center = center;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  onSubmit() {
    const data = this.updateCenterForm.value;
    this.address = {
      addressId: data.address.addressId,
      addressNumber: data.address.addressNumber,
      addressStreet: data.address.addressStreet,
      addressCity: data.address.addressCity,
      addressCountry: data.address.addressCountry
    }
    console.log("OnSubmit"+this.address.addressId);
    this.addressService.update(this.address.addressId , this.address);

    setTimeout(() => {
      this.center = {
        centerPicture: data.centerPicture,
        centerName: data.centerName,
        centerMail: data.centerMail,
        centerPhone: data.centerPhone,
        centerComment: data.centerComment,
        address: this.address
      }
      this.centerService.update(this.centerid, this.center);
    }, 1000);
}
}


