import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationService } from './service/authentication.service';
import { AuthGuardService } from './auth-guard.service';
import {MyhttpService} from './service/myhttp.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiAPJVhV3cwrSt_Crd93tXp7830Z79d38'  // this is temp key
    })
  ],
  providers: [AuthenticationService, AuthGuardService, MyhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
