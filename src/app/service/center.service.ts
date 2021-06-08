import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Center} from "../model/center";

const baseUrl = 'http://localhost:8888/center';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string | null) {
    return this.http.get<any>(baseUrl + '/list/' + id)
      .map((res: any) => {
        return res;
      });
  }

  public findAll(): Observable<Center[]> {
    return this.http.get<any>(baseUrl + '/list')
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

  public update(idcenter: number, data: any) {
    return this.http.put(baseUrl + '/update/' + idcenter, data).subscribe(
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
}
