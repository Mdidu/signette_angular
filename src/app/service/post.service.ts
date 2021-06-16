import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://localhost:8888/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public findByTripByCenter(id: string | null) {
    return this.http.get<any>(baseUrl + '/readTripByCenter/' + id)
      .map((res: any) => {
        return res;
      })
  }
}