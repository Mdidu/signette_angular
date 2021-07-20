import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ClientService} from "../../service/client.service";


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  charged: boolean = false;
  id: number;
  clients: any;
  currentIndex = -1;
  title = '';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor( public clientService: ClientService, private router: Router) {
  }

  ngOnInit(): void {
    this.displayClient();
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};
    if (searchTitle) {params[`title`] = searchTitle;}
    if (page) {params[`page`] = page - 1;}
    if (pageSize) {params[`size`] = pageSize;}
    return params;
  }

  displayClient = () => {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.clientService.getAll(params).subscribe(
      (response) => {
        const { clients, totalItems } = response;
        this.clients = clients;
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
    this.displayClient();
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.displayClient();
  }

  onRemoveClient(id: number) {
    this.clientService.remove(id);

    setTimeout(
      () => {
        this.displayClient();
      }, 1000);
  }

  updateClient(id: number) {
    this.id = id;
    this.charged = true;
  }

  searchTitle(): void {
    this.page = 1;
    this.displayClient();
  }


  searchSejours(id: number){
    this.router.navigate(['/client/trip', id]);
  }

  detailClient(id: number) {
    this.router.navigate(['/client/', id]);
  }
}
