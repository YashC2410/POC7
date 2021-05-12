import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { PinCodeComponent } from './pin-code/pin-code.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserIdComponent } from './user-id/user-id.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNameComponent } from './user-name/user-name.component';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
  {path: 'users',component : UserListComponent},
  {path: 'create-user',component : NewUserComponent},
  {path:'user-id/:id',component:UserIdComponent},
  {path: 'update-user/:id',component:UpdateUserComponent},
  {path:'user-id',component:UserIdComponent},
  {path:'user-name/:name',component:UserNameComponent},
  {path:'user-name',component:UserNameComponent},
  {path:'pin-code',component:PinCodeComponent},
  {path:'pin-code/:pin',component:PinCodeComponent},
  {path: 'login', component:LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
