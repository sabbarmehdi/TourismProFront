import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { SingleTripComponent } from './trip-list/single-trip/single-trip.component';
import { TripFormComponent } from './trip-list/single-trip/trip-form/trip-form.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {TripsService} from './services/trips.service';
import {AuthGuardService} from './services/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
//Routing links
const appRoutes: Routes = [
  { path: 'auth/signin', component: SigninComponent},
  { path: 'auth/signup', component: SignupComponent},
  { path: 'trips', component: TripListComponent},
  { path: 'trips/new', component: TripFormComponent},
  { path: 'trips/view/:id', component: SingleTripComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    SingleTripComponent,
    TripFormComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, TripsService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
