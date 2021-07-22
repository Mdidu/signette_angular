import {NgModule} from '@angular/core';
import {ClientComponent} from "./component/client/client.component";
import {RouterModule, Routes} from "@angular/router";
import {AddClientComponent} from "./component/client/add-client/add-client.component";
import {UpdateClientComponent} from "./component/client/update-client/update-client.component";
import {CenterComponent} from "./component/center/center.component";
import {AddCenterComponent} from "./component/center/add-center/add-center.component";
import {UpdateCenterComponent} from "./component/center/update-center/update-center.component";
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {TripByClientComponent} from "./component/client/trip-by-client/trip-by-client.component";
import {TripComponent} from "./component/trip/trip.component";
import {AddTripComponent} from "./component/trip/add-trip/add-trip.component";
import {UpdateTripComponent} from "./component/trip/update-trip/update-trip.component";
import {DetailTripComponent} from "./component/trip/detail-trip/detail-trip.component";
import {UserComponent} from "./component/user/user.component";
import {ChartjsComponent} from "./component/chart/bar/chartjs.component";
import {CalendarComponent} from "./component/calendar/calendar.component";
import {DetailUserComponent} from "./component/user/detail-user/detail-user.component";
import {CalendarUserComponent} from "./component/user/calendar-user/calendar-user.component";
import {ListDocumentByTripComponent} from "./component/document/list-document-by-trip/list-document-by-trip.component";
import {ListDocumentByUserComponent} from "./component/document/list-document-by-user/list-document-by-user.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register/:id', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'client/list', component: ClientComponent},
  {path: 'client/add', component: AddClientComponent},
  {path: 'client/update/:id', component: UpdateClientComponent},
  {path: 'client/trip/:id', component: TripByClientComponent},
  {path: 'center/list', component: CenterComponent},
  {path: 'center/add', component: AddCenterComponent},
  {path: 'center/update/:id', component: UpdateCenterComponent},
  {path: 'trip/list', component: TripComponent},
  {path: 'trip/add', component: AddTripComponent},
  {path: 'trip/update/:id', component: UpdateTripComponent},
  {path: 'trip/detail/:id', component: DetailTripComponent},
  {path: 'trip/calendar', component: CalendarComponent},
  {path: 'user/detail/:id', component: DetailUserComponent},
  {path: 'user/list/:id', component: UserComponent},
  {path: 'emp/list/:id', component: UserComponent},
  {path: 'admin/list/:id', component: UserComponent},
  {path: 'chart/:id', component: ChartjsComponent},
  {path: 'document/trip/:id', component: ListDocumentByTripComponent},
  {path: 'document/user/:id', component: ListDocumentByUserComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

