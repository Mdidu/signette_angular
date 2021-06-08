
import {NgModule} from '@angular/core';
import {ClientComponent} from "./component/client/client.component";
import {RouterModule, Routes} from "@angular/router";
import {AddClientComponent} from "./component/client/add-client/add-client.component";
import {UpdateClientComponent} from "./component/client/update-client/update-client.component";
import {CenterComponent} from "./component/center/center.component";
import {AddCenterComponent} from "./component/center/add-center/add-center.component";
import {UpdateCenterComponent} from "./component/center/update-center/update-center.component";

const routes: Routes = [
  {path: 'client/list', component: ClientComponent},
  {path: 'client/add', component: AddClientComponent},
  {path: 'client/update/:id', component: UpdateClientComponent},
  { path: 'center/list', component:CenterComponent},
  { path: 'center/add', component:AddCenterComponent},
  { path: 'center/update/:id', component:UpdateCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

