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


  clients: any;
  clientName:FormGroup;

  constructor(private formBuilder: FormBuilder, public clientService: ClientService, private router: Router) {

  }

  ngOnInit(): void {
    this.displayClient();
    this.form();
  }

  form(){
    this.clientName = this.formBuilder.group({
      name:["",Validators.required]
    })
  }

  displayClient() {
    this.clients = this.clientService.findAll().subscribe(
      (clients) => {
        console.log(clients.toString());
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

  searchClient(){
    const data = this.clientName.value;
    this.clients = this.clientService.findByName(data.name).subscribe(
      (client)=>{
        this.clients = client;
      },
      (error)=>{
        console.log('error = '+error.message);
      }
    );
  }

  searchSejours(id: number){
    this.router.navigate(['/client/trip', id]);
  }

  detailClient(id: number) {
    this.router.navigate(['/client/', id]);
  }
}
