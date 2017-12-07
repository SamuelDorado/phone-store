import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { PhoneListComponent } from "./Phones/scenes/phoneList/phone-list.component";


const routes: Routes = [
    {path: 'home', component: PhoneListComponent},
    {path:'',redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
