import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CenterService} from "../../../service/center.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-center',
  templateUrl: './update-center.component.html',
  styleUrls: ['./update-center.component.css']
})
export class UpdateCenterComponent implements OnInit {

  updateCenterForm: FormGroup;
  center: any;
  id: any;

  constructor(private formBuilder: FormBuilder, public centerService: CenterService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.recupData();

    setTimeout(() => {
      this.form();
    }, 1000);
  }
  form() {
    this.updateCenterForm = this.formBuilder.group({
      centerid: [this.center.centerid, Validators.required],
      centerPicture: [this.center.centerPicture, Validators.required],
      centerName: [this.center.centerName, Validators.required],
      centerMail: [this.center.centerMail, Validators.required, Validators.email],
      centerPhone: [this.center.centerPhone, Validators.required, Validators.pattern('[0-9]{10}')],
      centerComment: [this.center.centerComment, Validators.required],
      Address: this.formBuilder.group({
        addressNumber: [this.center.adresse.addressNumber, Validators.required],
        addressStreet: [this.center.adresse.addressStreet, Validators.required],
        addressCity: [this.center.adresse.addressCity, Validators.required],
        addressCountry: [this.center.adresse.addressCountry, Validators.required]
      })
    });
  }

  recupData() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.center = this.centerService.findById(this.id).subscribe(
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
    this.centerService.update(this.id,data);
  }
}


