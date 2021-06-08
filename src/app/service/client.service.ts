import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Client} from "../model/client/client";

const baseUrl = 'http://localhost:8888/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, private router: Router) {
  }

  public findById(id: string | null) {
    return this.http.get<any>(baseUrl + '/list/' + id)
      .map((res: any) => {
        return res;
      });
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<any>(baseUrl + '/list')
      .map((res: any) => {
        return res;
      });
  }

  public add(data: any) {
    return this.http.post(baseUrl + '/add', data).subscribe(
      () => {
        this.router.navigate(['client/list']);
      }
    );
  }

  public update(clientId: number, data: any) {
    return this.http.put(baseUrl + '/update/' + clientId, data).subscribe(
      () => {
        this.router.navigate(['client/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete(baseUrl + '/delete/' + id).subscribe(
      () => {
      }
    );
  }
}
