import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import{AddUserComponent } from './add-user/add-user.component';
import{UserListComponent} from './user-list/user-list.component';
import{UserDetailsComponent} from './user-details/user-details.component';
import{UpdateUserComponent } from './update-user/update-user.component'

const routes: Routes = [
  {path:'',redirectTo :'app-home',pathMatch:'full'},
  {path:"app-home" ,component:HomeComponent},
{path:"add-user" ,component:AddUserComponent},
{path:"user-list" ,component:UserListComponent},
{path:"user-details" ,component:UserDetailsComponent},
{path:"update-user" ,component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
