import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Center} from "../model/center/center";

const baseUrl = 'http://localhost:8888/center';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: number) {
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
        this.router.navigate(['center/list']);
      }
    );
  }

  public update(id: number, data: any) {
    return this.http.put(baseUrl + '/update/' + id, data).subscribe(
      () => {
        this.router.navigate(['center/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete(baseUrl + '/delete/' + id).subscribe(
      () => {}
    );
  }

  public findByCenterName(centerName: string | null) {
    return this.http.get<any>(baseUrl + '/read/search/' + centerName)
      .map((res: any) => {
        return res;
      });
  }
}
