import {NgModule} from '@angular/core';
import {ClientComponent} from "./component/client/client.component";
import {RouterModule, Routes} from "@angular/router";
import {AddClientComponent} from "./component/client/add-client/add-client.component";
import {UpdateClientComponent} from "./component/client/update-client/update-client.component";


const routes: Routes = [
  {path: 'client/list', component: ClientComponent},
  {path: 'client/add', component: AddClientComponent},
  {path: 'client/update/:id', component: UpdateClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
