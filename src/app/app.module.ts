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
import { ChartjsComponent } from './component/chart/bar/chartjs.component';
import {ChartsModule} from "ng2-charts";
import {NavbarComponent} from "./component/navbar/navbar.component";
import { FooterComponent } from './component/footer/footer.component';
import { AddPostComponent } from './component/trip/post/add-post/add-post.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import {CalendarComponent} from "./component/calendar/calendar.component";
import { DetailUserComponent } from './component/user/detail-user/detail-user.component';
import { CalendarUserComponent } from './component/user/calendar-user/calendar-user.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);

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
    TripByClientComponent,
    ChartjsComponent,
    NavbarComponent,
    FooterComponent,
    AddPostComponent,
    CalendarComponent,
    DetailUserComponent,
    CalendarUserComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ChartsModule,
    FullCalendarModule // register FullCalendar with you app

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
