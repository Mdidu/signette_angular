import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {User} from "../model/user/user";


const baseUrl = 'http://localhost:8888/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string|null) {
    return this.http.get<any>(baseUrl + 'read' + id)
      .map((res:any)=>{
        return res;
      })
  }

  public findAll():Observable<User[]> {
    return this.http.get<any>(baseUrl + '/read')
      .map((res:any)=>{
        return res;
    });
  }

  public add(data:any){
    return this.http.post(baseUrl + '/add', data).subscribe(
      ()=>{
        this.router.navigate(['user/read']);
      }
    )
  }

  public update(userId: number, data: any){
    return this.http.put(baseUrl + '/update/' + userId, data).subscribe(
      ()=>{
        this.router.navigate(['user/read']);
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
