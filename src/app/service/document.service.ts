import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://localhost:8888/';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  public generatePDF(userId: number, tripId: number) {
    return this.http.get<any>(baseUrl + 'api/user/' + userId + '/trip/' + tripId)
      .map(() => {
        console.log("generate pdf");
      })
  }

  public findDocumentByUser(id: number) {
    return this.http.get<any>(baseUrl + 'document/read/user/' + id)
      .map((res:any)=>{
        return res;
      })
  }

  public findDocumentByTrip(id: number) {
    return this.http.get<any>(baseUrl + 'document/read/trip/' + id)
      .map((res:any)=>{
        return res;
      })
  }

  public downloadDocument(documentName: string) {
    return this.http.get<any>(baseUrl + 'download/pdf/' + documentName)
      .map((res:any)=>{
        return res;
      })
  }
  public signDocument(id: number) {
    return this.http.get<any>(baseUrl + 'document/sign/' + id)
      .map((res:any)=>{
        return res;
      })
  }
}
