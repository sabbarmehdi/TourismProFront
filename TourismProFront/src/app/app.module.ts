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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthService} from './services/user-services/auth.service';
import {TripsService} from './services/trip-services/trips.service';

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
import { TokenStorageService } from './services/user-services/jwt-services/token-storage.service';
import { GuideSignupComponent } from './auth/guide-signup/guide-signup.component';
import { AdminSignupComponent } from './auth/admin-signup/admin-signup.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthInterceptorService } from './services/user-services/jwt-services/auth-interceptor.service';
import {GuideLoginComponent} from './auth/guide-login/guide-login.component';
import {AdminLoginComponent} from './auth/admin-login/admin-login.component';
import { TouristLoginComponent } from './auth/tourist-login/tourist-login.component';
import {TouristSignupComponent} from './auth/tourist-signup/tourist-signup.component';
import { TouristService } from './services/user-services/tourist.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    SingleTripComponent,
    TripFormComponent,
    HeaderComponent,
    TripGuideListComponent,
    SingleTripGuideComponent,
    FormTripGuideComponent,
    TouristSignupComponent,
    GuideSignupComponent,
    TouristLoginComponent,
    AdminSignupComponent,
    GuideLoginComponent,
    AdminLoginComponent,
    TouristLoginComponent,
    DashboardComponent,
    CarouselComponent
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
  providers: [AuthService,
              TripsService,
              TripGuideService,
              TripTouristService,
              TokenStorageService,
              { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
              {provide: LocationStrategy, useClass: HashLocationStrategy},
              TouristService],


  bootstrap: [AppComponent]
})
export class AppModule { }
