import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Client} from "../../model/client/client";
import {ClientService} from "../../service/client.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  clients: any;

  constructor(private formBuilder: FormBuilder, public clientService: ClientService, private router: Router) {
    this.displayClient();
  }

  ngOnInit(): void {
  }

  displayClient() {
    this.clients = this.clientService.findAll().subscribe(
      (clients) => {
        this.clients = clients;
      },
      (error) => {
        console.log('error=' + error.message);
      }
    );
  }

  onRemoveClient(id: number) {
    this.clientService.remove(id);

    setTimeout(
      () => {
        this.displayClient();
      }, 1000);
  }

  updateClient(id: number) {
    this.router.navigate(['/client/update/', id]);
  }

  detailClient(id: number) {
    this.router.navigate(['/client/', id]);
  }
}
