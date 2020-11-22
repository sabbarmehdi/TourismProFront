import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { AdminSignupComponent } from './auth/admin-signup/admin-signup.component';
import { GuideLoginComponent } from './auth/guide-login/guide-login.component';
import { GuideSignupComponent } from './auth/guide-signup/guide-signup.component';
import { TouristLoginComponent } from './auth/tourist-login/tourist-login.component';
import { TouristSignupComponent } from './auth/tourist-signup/tourist-signup.component';
import { FormTripGuideComponent } from './trip-guide-list/form-trip-guide/form-trip-guide.component';
import { SingleTripGuideComponent } from './trip-guide-list/single-trip-guide/single-trip-guide.component';
import { TripGuideListComponent } from './trip-guide-list/trip-guide-list.component';
import { SingleTripComponent } from './trip-list/single-trip/single-trip.component';
import { TripFormComponent } from './trip-list/trip-form/trip-form.component';
import { TripListComponent } from './trip-list/trip-list.component';
import {TouristAuthGuard} from './services/user-services/auth-guard/tourist-auth.guard';
import {GuideAuthGuard} from './services/user-services/auth-guard/guide-auth.guard';
import { AdminAuthGuard } from './services/user-services/auth-guard/admin-auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path:  '', pathMatch: 'full', redirectTo: 'dashboard' },

  { path: 'user/login',component: TouristLoginComponent },
  { path: 'guide/login',component: GuideLoginComponent },
  { path: 'admin/login',component: AdminLoginComponent },
  { path: 'user/signup',component: TouristSignupComponent },
  { path: 'guide/signup',component: GuideSignupComponent },
  { path: 'admin/signup',component: AdminSignupComponent },

  { path: 'trips', component: TripListComponent, canActivate: [TouristAuthGuard, TouristAuthGuard, AdminAuthGuard]},
  { path: 'new', component: TripFormComponent, canActivate: [TouristAuthGuard]},
  { path: 'trips/view/:id', component: SingleTripComponent, canActivate: [TouristAuthGuard]},
  { path: 'trips/guide', component: TripGuideListComponent},
  { path: 'new/g', component: FormTripGuideComponent, canActivate: [GuideAuthGuard]},
  { path: 'tripg/view/:id', component: SingleTripGuideComponent},
  { path: 'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
