import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Center} from "../model/center/center";

const baseUrl = 'http://localhost:8888/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string | null) {
    return this.http.get<any>(baseUrl + '/read/' + id)
      .map((res: any) => {
        return res;
      });
  }

  public findAll(): Observable<Center[]> {
    return this.http.get<any>(baseUrl + '/read')
      .map((res: any) => {
        return res;
      });
  }

  public add(data: any) {
    return this.http.post(baseUrl + '/add', data).subscribe(
      () => {
        this.router.navigate(['trip/read']);
      }
    );
  }

  public update(id: number, data: any) {
    return this.http.put(baseUrl + '/update/' + id, data).subscribe(
      () => {
        this.router.navigate(['trip/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete(baseUrl + '/delete/' + id).subscribe(
      () => {}
    );
  }
}
