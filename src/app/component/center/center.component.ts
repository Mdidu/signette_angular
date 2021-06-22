import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CenterService} from "../../service/center.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  center: any;
  centers: any;
  searchCenterNameForm: FormGroup;
  charged: boolean = false;
  id: number;

  constructor(private formBuilder: FormBuilder, public centerService: CenterService,  private router: Router) {
  }

  ngOnInit(): void {
    this.displayCenter();
    this.form();
  }

  form() {
    this.searchCenterNameForm = this.formBuilder.group( {
      centerName: ['', Validators.required]
    });
  }

  displayCenter = () => {
      this.centerService.findAll().subscribe(
        (centers) => {
          this.centers = centers;
        },
        (error) => {
          console.log('error=' + error.message);
        }
      );
  }

  onRemoveCenter(id: number) {
    this.centerService.remove(id);

    setTimeout(
      () => {
        this.displayCenter();
      }, 1000);
  }

  updateCenter(id: number){
    this.id = id;
    this.charged = true;
  }

  onSubmit() {
    const data = this.searchCenterNameForm.value;

    this.centerService.findByCenterName(data.centerName).subscribe(
      (centers) => {
        this.centers = centers;
      },
      (error) => {
        console.log('errors=' + error.message);
      }
    );
  }
}
