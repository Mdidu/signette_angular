import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ClientComponent} from './component/client/client.component';
import {ReactiveFormsModule} from "@angular/forms";
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
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import {authInterceptorProviders} from "../helpers/auth.interceptor";
import { UserComponent } from './component/user/user.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';
import { TripByClientComponent } from './component/client/trip-by-client/trip-by-client.component';

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
    DetailTripComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    UserComponent,
    UpdateUserComponent,
    TripByClientComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
