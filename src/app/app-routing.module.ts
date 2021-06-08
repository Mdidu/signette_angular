import {NgModule} from '@angular/core';
import {ClientComponent} from "./component/client/client.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: 'client/list', component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
