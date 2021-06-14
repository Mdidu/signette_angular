import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {CenterService} from "../../service/center.service";


@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  centers: any;

  constructor(public centerService: CenterService,  private router: Router) {
    this.displayCenter();
  }

  ngOnInit(): void {

  }

  displayCenter() {
    this.centers = this.centerService.findAll().subscribe(
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
    this.router.navigate(['/center/update/', id]);
  }
  detailCenter(id: number){
    this.router.navigate(['/center/', id]);
  }
}
