import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { SingleTripComponent } from './trip-list/single-trip/single-trip.component';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/user-services/auth.service';
import {TripsService} from './services/trip-services/trips.service';
import {AuthGuardService} from './services/auth-guard.service';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import { TripFormComponent } from './trip-list/trip-form/trip-form.component';
import { TripGuideListComponent } from './trip-guide-list/trip-guide-list.component';
import { SingleTripGuideComponent } from './trip-guide-list/single-trip-guide/single-trip-guide.component';
import { FormTripGuideComponent } from './trip-guide-list/form-trip-guide/form-trip-guide.component';
import { TripGuideService } from './services/trip-services/trip-guide.service';
import { TripTouristService } from './services/trip-services/trip-tourist.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { TokenStorageService } from './services/user-services/token-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    SingleTripComponent,
    TripFormComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    TripGuideListComponent,
    SingleTripGuideComponent,
    FormTripGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [AuthService, TripsService, AuthGuardService, TripGuideService, TripTouristService, TokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
