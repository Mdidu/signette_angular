import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ClientComponent} from './component/client/client.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {AddClientComponent} from './component/client/add-client/add-client.component';
import {UpdateClientComponent} from './component/client/update-client/update-client.component';
import {CenterComponent} from './component/center/center.component';
import {AddCenterComponent} from './component/center/add-center/add-center.component';
import {UpdateCenterComponent} from './component/center/update-center/update-center.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { TripComponent } from './component/trip/trip.component';
import { AddTripComponent } from './component/trip/add-trip/add-trip.component';
import { UpdateTripComponent } from './component/trip/update-trip/update-trip.component';
import { DetailTripComponent } from './component/trip/detail-trip/detail-trip.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AddClientComponent,
    UpdateClientComponent,
    CenterComponent,
    AddCenterComponent,
    UpdateCenterComponent,
    FileUploadComponent,
    TripComponent,
    AddTripComponent,
    UpdateTripComponent,
    DetailTripComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
