import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Trajectory } from 'src/app/models/trips/trajectory';
import { TripTourist } from 'src/app/models/trips/trip-tourist';
import { TripTouristService } from 'src/app/services/trip-services/trip-tourist.service';
import { TripsService } from 'src/app/services/trip-services/trips.service';

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
      cities: '',
      distance: '',
      trajectoryTime: new Date()
    }
  }

  constructor(private tripService: TripsService,
              private router: Router) { }

  ngOnInit(): void {}

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
