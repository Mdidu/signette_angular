import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:8888/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private router: Router) { }

  public findById(id: string | null) {
    return this.http.get<any>(baseUrl + '/read/' + id)
      .map((res: any) => {
        return res;
      });
  }

  public findAll() {
    return this.http.get<any>(baseUrl + '/read')
      .map((res: any) => {
        return res;
      });
  }

  public add(data: any) {
    return this.http.post(baseUrl + '/add', data).subscribe(
      () => {
        this.router.navigate(['role/list']);
      }
    );
  }

  public update(data: any) {
    return this.http.put(baseUrl + '/update', data).subscribe(
      () => {
        this.router.navigate(['role/list']);
      }
    );
  }

  public remove(id: number) {
    return this.http.delete(baseUrl + '/delete/' + id).subscribe(
      () => {}
    );
  }
}
