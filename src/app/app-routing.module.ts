import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CenterComponent} from "./component/center/center.component";


const routes: Routes = [
  { path: 'center/list', component:CenterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
