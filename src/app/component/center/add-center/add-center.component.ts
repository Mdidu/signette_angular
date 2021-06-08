import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CenterService} from "../../../service/center.service";

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent implements OnInit {

  addCenterForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public centerService: CenterService) {
  }

  ngOnInit(): void {
    this.addCenterForm = this.formBuilder.group({
      centerPicture: ['', Validators.required],
      centerName: ['', Validators.required],
      centerMail: ['', Validators.required, Validators.email],
      centerPhone: ['', Validators.required, Validators.pattern('[0-9]{10}')],
      centerComment: ['', Validators.required],
      Address: this.formBuilder.group({
        addressNumber: ['', Validators.required],
        addressStreet: ['', Validators.required],
        addressCity: ['', Validators.required],
        addressCountry: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    const data = this.addCenterForm.value;
    this.centerService.add(data);
  }

}
