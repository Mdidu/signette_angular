import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {Adresse} from "../model/adresse/adresse";

const baseUrl = 'http://localhost:8888/adresse';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string|null) {
    return this.http.get<any>(baseUrl + '/read/' + id)
      .map((res:any)=>{
        return res;
      })
  }

  public findAll():Observable<Adresse[]> {
    return this.http.get<any>(baseUrl + '/read')
      .map((res:any)=>{
        return res;
      });
  }

  public add(data:any){
    return this.http.post(baseUrl + '/add', data)
      .map( res => {
        return res;
      }
    )
  }

  public update(addressId: number, data: any){
    return this.http.put(baseUrl + '/update/' + addressId, data).subscribe(
      ()=>{
        //this.router.navigate(['adresse/read']);
      }
    )
  }

  public remove(id:number){
    return this.http.delete(baseUrl + '/delete/' +id).subscribe(
      ()=>{

      }
    );
  }
}
