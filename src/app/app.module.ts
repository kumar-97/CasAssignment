import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CastlerService } from './castler.service';
import {HttpClientModule} from '@angular/common/http';
import { UsernotfoundComponent } from './usernotfound/usernotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    UsernotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [CastlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
