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
  currentIndex = -1;
  id: number;
  title = '';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private formBuilder: FormBuilder, public centerService: CenterService,  private router: Router) {
  }

  ngOnInit(): void {
    this.displayCenter();
    this.form();
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  form() {
    this.searchCenterNameForm = this.formBuilder.group( {
      centerName: ['', Validators.required]
    });
  }

  displayCenter = () => {
      const params = this.getRequestParams(this.title, this.page, this.pageSize);
      this.centerService.getAll(params).subscribe(
        (response) => {
          const { centers, totalItems } = response;
          this.centers = centers;
          this.count = totalItems;
          console.log(response);
        },
        (error) => {
          console.log('error=' + error.message);
        }
      );
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.displayCenter();
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.displayCenter();
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
    this.page = 1;
    this.title = this.searchCenterNameForm.value.centerName;
    this.displayCenter();
  }
}
