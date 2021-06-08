import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CenterComponent} from "./component/center/center.component";
import {AddCenterComponent} from "./component/center/add-center/add-center.component";
import {UpdateCenterComponent} from "./component/center/update-center/update-center.component";


const routes: Routes = [
  { path: 'center/list', component:CenterComponent},
  { path: 'center/add', component:AddCenterComponent},
  { path: 'center/update/:id', component:UpdateCenterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
