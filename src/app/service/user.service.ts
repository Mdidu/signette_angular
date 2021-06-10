import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

import {User} from "../model/user/user";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:8888/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string|null) {
    return this.http.get<any>(baseUrl + 'user/read/' + id)
      .map((res:any)=>{
        return res;
      });
  }

  public findAll():Observable<User[]> {
    return this.http.get<any>(baseUrl + 'user/read')
      .map((res: any) => {
        return res;
    });
  }

  public add(data:any){
    return this.http.post(baseUrl + 'auth/signup', data).subscribe(
      ()=>{
        this.router.navigate(['user/read']);
      }
    )
  }

  public update(userId:number ,data: any){
    return this.http.put(baseUrl + 'user/update/'+userId, data).subscribe(
      () => {
        this.router.navigate(['user/read']);
      }
    )
  }

  public remove(id:number){
    return this.http.delete(baseUrl + 'user/delete/' +id).subscribe(
      () => { }
    );
  }
}
