import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormTripGuideComponent } from './trip-guide-list/form-trip-guide/form-trip-guide.component';
import { SingleTripGuideComponent } from './trip-guide-list/single-trip-guide/single-trip-guide.component';
import { TripGuideListComponent } from './trip-guide-list/trip-guide-list.component';
import { SingleTripComponent } from './trip-list/single-trip/single-trip.component';
import { TripFormComponent } from './trip-list/trip-form/trip-form.component';
import { TripListComponent } from './trip-list/trip-list.component';


const routes: Routes = [
  { path: 'auth/signin', component: SigninComponent},
  { path: 'auth/signup', component: SignupComponent},
  { path: 'trips', component: TripListComponent},
  { path: 'new', component: TripFormComponent},
  { path: 'trips/view/:id', component: SingleTripComponent},

  { path: 'trips/guide', component: TripGuideListComponent},
  { path: 'new/g', component: FormTripGuideComponent},
  { path: 'tripg/view/:id', component: SingleTripGuideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
