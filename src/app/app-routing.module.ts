import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UsernotfoundComponent } from './usernotfound/usernotfound.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'usernotfound',component:UsernotfoundComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
