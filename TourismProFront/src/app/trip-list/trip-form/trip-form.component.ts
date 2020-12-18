import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Trajectory } from 'src/app/models/trips/trajectory';
import { TripTourist } from 'src/app/models/trips/trip-tourist';
import { Tourist } from 'src/app/models/users/tourist';
import { TripTouristService } from 'src/app/services/trip-services/trip-tourist.service';
import { TripsService } from 'src/app/services/trip-services/trips.service';
import { AuthService } from 'src/app/services/user-services/auth.service';
import { TokenStorageService } from 'src/app/services/user-services/jwt-services/token-storage.service';
import { TouristService } from 'src/app/services/user-services/tourist.service';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {

  trip: TripTourist = {
    id: null,
    tripName: '',
    description: '',
    trajectory: {
      id: null,
      distance: '',
      trajectoryTime: new Date()
    },
    tripPeriod: null,
    startingCity: '',
    clientId: null
  }

  constructor(private tripService: TripsService,
              private router: Router,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.trip.clientId =  this.tokenStorage.getUser().id;

       // console.log("trip-form test: " + JSON.stringify(this.tourist));
  }

  onSaveTrip() {
    this.tripService.createTrip(this.trip).subscribe(
      data => {
        console.log('response', data);
        this.trip = new TripTourist();
        this.backToList();
      },
      error => console.log(error));
  }

  backToList() {
    this.router.navigate(['/trips']);
  }


}
