import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs-compat/add/operator/map";
import {Router} from "@angular/router";

const baseUrl = 'http://localhost:8888/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private router: Router) { }

  public add(data: any) {
    return this.http.post(baseUrl + '/add', data).subscribe(
      () => {
        //this.router.navigate(['trip/list']);
      }
    );
  }

  public update(tripId: number, userId: number,data: any) {
    return this.http.put(baseUrl + '/updatetrip/' + tripId + '/user/'+ userId, data).subscribe(
      () => {
        this.router.navigate(['trip/list']);
      }
    );
  }

  public remove(tripId: number, userId: number) {
    return this.http.delete(baseUrl + '/deletetrip/' + tripId + '/user/'+ userId).subscribe(
      () => {
      }
    );
  }

  public findByTripByCenter(id: string | null) {
    return this.http.get<any>(baseUrl + '/readTripByCenter/' + id)
      .map((res: any) => {
        return res;
      })
  }

  public findByTrip(id: number | undefined) {
    return this.http.get<any>(baseUrl + '/readBytrip/' + id)
      .map((res: any) => {
        return res;
      })
  }


  public findAllPostType() {
    return this.http.get<any>(baseUrl + 'type/read')
      .map((res: any) => {
        return res;
      })
  }

  public findByDateAndUserId(id: number) {

    return this.http.get<any>(baseUrl + "/readDate/id/" + id)
      .map((res: any) => {
        return res;
      });
  }

  public findByPost(id: number) {
    return this.http.get<any>(baseUrl + "/readByPost/" + id)
      .map((res: any) => {
        return res;
      });
  }

}
